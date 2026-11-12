// Preloader
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // 500ms transition time
        }, 300); // Small initial delay for visual effect
    }
});

// Formulaire de contact (anti-spam : jeton signé + Cloudflare Turnstile invisible).
// Le serveur (contact.php) fait toutes les vérifications ; ici on ne fait que
// préparer l'envoi et afficher des messages clairs.
(function initContactForm() {
    const form = document.querySelector('.modern-form');
    if (!form) return;

    const endpoint = form.getAttribute('action') || 'contact.php';
    const statusEl = form.querySelector('.form-status');
    const thankYou = document.getElementById('thank-you-message');
    const submitBtn = form.querySelector('.contact-submit-btn');
    const MIN_TOKEN_AGE = 3500;            // le serveur refuse sous 3 s
    const MAX_TOKEN_AGE = 100 * 60 * 1000; // le serveur refuse au-delà de 2 h
    const FIELD_NAMES = ['name', 'email', 'subject', 'message'];

    let token = null;        // { value, siteKey, at }
    let tokenPromise = null;
    let primed = false;
    let busy = false;
    let statusKey = null;
    const ts = { box: null, id: null, value: '', waiters: [], loading: null };

    const t = (key) => {
        const lang = window.i18nLang || document.documentElement.lang || 'fr';
        const dict = window.i18nDict || {};
        return (dict[lang] && dict[lang][key]) || (dict.fr && dict.fr[key]) || '';
    };

    function showStatus(key) {
        statusKey = key;
        if (!statusEl) return;
        statusEl.innerHTML = key ? t(key) : '';
        statusEl.classList.toggle('is-visible', !!key);
    }
    window.addEventListener('languagechange', () => { if (statusKey) showStatus(statusKey); });

    function markInvalid(names) {
        FIELD_NAMES.forEach((n) => {
            const el = form.elements[n];
            if (!el) return;
            const bad = names.includes(n);
            el.classList.toggle('is-invalid', bad);
            if (bad) el.setAttribute('aria-invalid', 'true');
            else el.removeAttribute('aria-invalid');
        });
    }
    form.addEventListener('input', (e) => {
        if (e.target.classList && e.target.classList.contains('is-invalid')) {
            e.target.classList.remove('is-invalid');
            e.target.removeAttribute('aria-invalid');
        }
    });

    // --- Jeton signé délivré par le serveur (+ clé publique Turnstile) ---
    function fetchToken() {
        if (tokenPromise) return tokenPromise;
        tokenPromise = fetch(endpoint + '?token=1', {
            headers: { 'Accept': 'application/json' },
            cache: 'no-store',
            credentials: 'same-origin'
        })
            .then((r) => r.json())
            .then((d) => {
                if (d && d.ok && d.token) token = { value: d.token, siteKey: d.siteKey || null, at: Date.now() };
                return token;
            })
            .catch(() => null)
            .finally(() => { tokenPromise = null; });
        return tokenPromise;
    }

    async function freshToken(force) {
        if (force || !token || Date.now() - token.at > MAX_TOKEN_AGE) {
            token = null;
            await fetchToken();
        }
        if (!token) return null;
        const wait = MIN_TOKEN_AGE - (Date.now() - token.at);
        if (wait > 0) await new Promise((res) => setTimeout(res, wait));
        return token;
    }

    // --- Cloudflare Turnstile, chargé au premier focus du formulaire ---
    function resolveTs(value) {
        ts.value = value || '';
        ts.waiters.splice(0).forEach((fn) => fn(ts.value));
    }

    function loadTurnstile(siteKey) {
        if (!siteKey || ts.loading) return ts.loading;
        ts.box = document.createElement('div');
        ts.box.className = 'ts-box';
        if (submitBtn) submitBtn.before(ts.box); else form.appendChild(ts.box);

        ts.loading = new Promise((resolve) => {
            window.__mvTurnstileReady = () => resolve(window.turnstile);
            const s = document.createElement('script');
            s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__mvTurnstileReady';
            s.async = true;
            s.defer = true;
            s.onerror = () => resolve(null);
            document.head.appendChild(s);
        }).then((api) => {
            if (!api) { resolveTs(''); return null; }
            ts.id = api.render(ts.box, {
                sitekey: siteKey,
                action: 'contact',
                appearance: 'interaction-only',
                theme: document.body.classList.contains('light-mode') ? 'light' : 'dark',
                language: window.i18nLang || 'fr',
                'response-field': false,
                callback: (v) => resolveTs(v),
                'error-callback': () => { resolveTs(''); return true; },
                'expired-callback': () => { ts.value = ''; },
                'before-interactive-callback': () => ts.box.classList.add('is-active'),
                'after-interactive-callback': () => ts.box.classList.remove('is-active')
            });
            return api;
        });
        return ts.loading;
    }

    function turnstileToken() {
        if (ts.value) return Promise.resolve(ts.value);
        return new Promise((resolve) => {
            ts.waiters.push(resolve);
            // Si un défi interactif est affiché, on laisse plus de temps à l'humain.
            const limit = () => (ts.box && ts.box.classList.contains('is-active') ? 120000 : 15000);
            const started = Date.now();
            (function check() {
                if (!ts.waiters.includes(resolve)) return;
                if (Date.now() - started > limit()) {
                    ts.waiters.splice(ts.waiters.indexOf(resolve), 1);
                    resolve('');
                } else setTimeout(check, 500);
            })();
        });
    }

    function resetTurnstile() {
        ts.value = '';
        if (window.turnstile && ts.id != null) {
            try { window.turnstile.reset(ts.id); } catch (_) { /* widget déjà détruit */ }
        }
    }

    function prime() {
        if (primed) return;
        primed = true;
        fetchToken().then((tk) => { if (tk && tk.siteKey) loadTurnstile(tk.siteKey); });
    }
    form.addEventListener('focusin', prime);
    form.addEventListener('pointerdown', prime);

    // --- Vérifications locales (confort ; le serveur refait tout) ---
    function localErrors() {
        const v = (n) => (form.elements[n] ? form.elements[n].value.trim() : '');
        const bad = [];
        if (v('name').length < 2) bad.push('name');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v('email'))) bad.push('email');
        if (v('message').length < 10) bad.push('message');
        return bad;
    }

    async function send(retried) {
        const tk = await freshToken(retried);
        if (!tk) return { code: 'network' };

        const data = new FormData(form);
        data.set('form_token', tk.value);
        if (tk.siteKey) {
            await loadTurnstile(tk.siteKey);
            data.set('cf_turnstile', await turnstileToken());
        }

        let res;
        let body = {};
        try {
            res = await fetch(endpoint, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' },
                credentials: 'same-origin'
            });
            body = await res.json().catch(() => ({}));
        } catch (_) {
            return { code: 'network' };
        } finally {
            if (tk.siteKey) resetTurnstile(); // un jeton Turnstile ne sert qu'une fois
        }
        if (res.ok && body.ok) return { ok: true };
        // Jeton expiré (page restée ouverte longtemps) : on en reprend un et on réessaie une fois.
        if (body.code === 'token' && !retried) return send(true);
        return { code: body.code || 'server', fields: body.fields || [] };
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (busy) return;
        showStatus(null);

        const bad = localErrors();
        markInvalid(bad);
        if (bad.length) {
            showStatus('form.err.fields');
            const first = form.elements[bad[0]];
            if (first) first.focus();
            return;
        }

        busy = true;
        if (submitBtn) { submitBtn.disabled = true; submitBtn.setAttribute('aria-busy', 'true'); }
        prime();
        try {
            const result = await send(false);
            if (result.ok) {
                markInvalid([]);
                form.reset();
                if (thankYou) {
                    thankYou.classList.add('is-visible');
                    setTimeout(() => { thankYou.classList.remove('is-visible'); }, 5000);
                }
            } else {
                const known = ['fields', 'spam', 'captcha', 'rate', 'server', 'network'];
                const code = result.code === 'token' ? 'captcha' : result.code;
                if (code === 'fields') markInvalid(result.fields);
                showStatus('form.err.' + (known.includes(code) ? code : 'server'));
            }
        } finally {
            busy = false;
            if (submitBtn) { submitBtn.disabled = false; submitBtn.removeAttribute('aria-busy'); }
        }
    });
})();


//fade home




//fade in
document.addEventListener("DOMContentLoaded", function () {

    // Auto-stagger : décale l'animation de chaque item dans une grille.
    // On modulo la position pour ne jamais dépasser un délai de ~280ms
    // (sinon les items très bas dans la grille attendent trop longtemps après
    // être entrés dans le viewport).
    document.querySelectorAll('.skills-container, .projects-grid, .content-wrapper').forEach(grid => {
        const items = grid.querySelectorAll('.fade-in');
        const STEP = 70;   // ms entre deux items consécutifs
        const MAX  = 4;    // cap : jamais plus de 4 × STEP = 280ms de délai
        items.forEach((item, i) => {
            item.style.setProperty('--reveal-delay', `${(i % MAX) * STEP}ms`);
        });
    });

    const faders = document.querySelectorAll(".fade-in");

    // threshold: 0 = déclenche dès qu'1 px est visible.
    // Indispensable pour les conteneurs plus grands que le viewport mobile
    // (sinon le ratio max ne peut jamais atteindre une valeur élevée et
    // l'animation ne se déclenche jamais → la section reste cachée).
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -80px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target);

            // Une fois le reveal terminé, on remet --reveal-delay à 0 sinon le
            // délai de stagger s'appliquerait aussi aux transitions de hover
            // (effet d'animation "décalée" sur les dernières cards).
            entry.target.addEventListener('transitionend', () => {
                entry.target.style.setProperty('--reveal-delay', '0ms');
            }, { once: true });
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// lIGHT MODE THEME

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeUse = themeIcon?.querySelector('use');

    const setIcon = (name) => {
        if (themeUse) themeUse.setAttribute('href', `image/icons.svg#i-${name}`);
    };

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
        setIcon('bx-sun');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-mode');
            setIcon(isLight ? 'bx-sun' : 'bx-moon');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }
});

// Bulles (tooltips) au survol des logos de la bande compétences.
// Le nom vient de l'alt de la 1re moitié ; on le mappe par src pour
// l'appliquer aussi aux copies dupliquées (alt vide, aria-hidden).
(function initMarqueeTips() {
    const items = document.querySelectorAll('.skills-marquee .marquee-item');
    if (!items.length) return;
    const primaryOf = (item) => item.querySelector('img.logo-dark') || item.querySelector('img');
    const labels = {};
    items.forEach((item) => {
        const named = item.querySelector('img[alt]:not([alt=""])');
        const primary = primaryOf(item);
        if (named && primary) labels[primary.getAttribute('src')] = named.getAttribute('alt').trim();
    });
    items.forEach((item) => {
        const primary = primaryOf(item);
        if (!primary) return;
        const tip = labels[primary.getAttribute('src')];
        if (tip) item.setAttribute('data-tip', tip);
    });

    // Sur écran tactile (pas de :hover), on affiche la bulle au tap. Le
    // défilement est figé dès que le doigt se pose (.is-paused), pour que la
    // cible ne bouge plus sous le doigt — sinon on sélectionne le mauvais logo.
    if (window.matchMedia('(hover: none)').matches) {
        const marquee = document.querySelector('.skills-marquee');
        const track = marquee && marquee.querySelector('.marquee-track');
        if (!marquee || !track) return;

        let activeTip = null;
        // item = élément à mettre en avant, ou null pour tout refermer/reprendre.
        const setTip = (item) => {
            if (activeTip) activeTip.classList.remove('show-tip');
            activeTip = item;
            if (item) item.classList.add('show-tip');
            // La bande reste figée tant qu'une bulle est ouverte.
            track.classList.toggle('is-paused', !!item);
        };

        // Fige dès le contact pour stabiliser la cible avant le tap…
        marquee.addEventListener('touchstart', () => {
            track.classList.add('is-paused');
        }, { passive: true });
        // …mais reprend si le geste est un scroll (et non un tap), sauf si une
        // bulle est déjà ouverte.
        marquee.addEventListener('touchmove', () => {
            if (!activeTip) track.classList.remove('is-paused');
        }, { passive: true });

        marquee.addEventListener('click', (e) => {
            const item = e.target.closest('.marquee-item[data-tip]');
            // Tap dans un trou → on referme et on relance le défilement.
            if (!item) { setTip(null); return; }
            // Re-tap sur le même logo → on referme.
            setTip(activeTip === item ? null : item);
        });

        // Tap hors de la bande → referme et relance.
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.skills-marquee')) setTip(null);
        });
    }
})();

