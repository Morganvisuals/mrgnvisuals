//navbar animation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active");
}

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

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});
