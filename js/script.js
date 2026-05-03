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
                    thankYou.style.display = "block";
                    setTimeout(() => { thankYou.style.display = "none"; }, 5000);
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
    const faders = document.querySelectorAll(".fade-in");

    // threshold: 0 = déclenche dès qu'1 px est visible.
    // Indispensable pour les conteneurs plus grands que le viewport mobile
    // (sinon le ratio max ne peut jamais atteindre une valeur élevée et
    // l'animation ne se déclenche jamais → la section reste cachée).
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target);
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

