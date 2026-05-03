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
