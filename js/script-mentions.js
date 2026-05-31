// Scroll-reveal (même système que script.js)
document.addEventListener("DOMContentLoaded", function () {
    // Stagger sur les sections légales
    const wrapper = document.querySelector('.content-wrapper');
    if (wrapper) {
        wrapper.querySelectorAll('.fade-in').forEach((el, i) => {
            el.style.setProperty('--reveal-delay', `${i * 60}ms`);
        });
    }

    const faders = document.querySelectorAll('.fade-in');
    if (!faders.length) return;

    const observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            obs.unobserve(entry.target);

            // Reset du délai de stagger pour ne pas décaler les transitions de hover
            entry.target.addEventListener('transitionend', () => {
                entry.target.style.setProperty('--reveal-delay', '0ms');
            }, { once: true });
        });
    }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

    faders.forEach(el => observer.observe(el));
});

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

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
