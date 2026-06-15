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

//formulaire
const contactForm = document.querySelector(".modern-form");
if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            let response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                const thankYou = document.getElementById("thank-you-message");
                if (thankYou) {
                    thankYou.classList.add("is-visible");
                    setTimeout(() => { thankYou.classList.remove("is-visible"); }, 5000);
                }
                form.reset();
            } else {
                alert("Une erreur est survenue, veuillez réessayer.");
            }
        } catch (error) {
            alert("Erreur de connexion, vérifiez votre internet.");
        }
    });
}


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
})();

