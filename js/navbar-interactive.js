(function () {
  'use strict';

  // ================= CONFIG =================
  const config = {
    mobileBreakpoint: 768,
    scrollThreshold: 50,
    headerOffset: 20
  };

  // ================= DOM =================
  const header = document.querySelector('.header');
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const navLinks = Array.from(document.querySelectorAll('.navbar a'));
  const sections = Array.from(document.querySelectorAll('section[id]'));

  if (!header || !navbar) return;

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  // ================= STATE =================
  const state = {
    menuOpen: false,
    isMobile: window.innerWidth <= config.mobileBreakpoint,
    activeSection: null,
    isAutoScrolling: false
  };

  // ================= MENU =================
  function openMenu() {
    if (!menuIcon) return;
    menuIcon.classList.add('bx-x');
    navbar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    state.menuOpen = true;
  }

  function closeMenu() {
    if (!menuIcon) return;
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    state.menuOpen = false;
  }

  menuIcon?.addEventListener('click', e => {
    e.preventDefault();
    state.menuOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  // ================= SMOOTH SCROLL =================
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href')?.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      state.isAutoScrolling = true;

      setActiveLink(id);

     // getBoundingClientRect().top donne la position relative à l'écran, 
      // on ajoute window.scrollY pour avoir la position absolue sur le document
      const y = 
        target.getBoundingClientRect().top + 
        window.scrollY - 
        header.offsetHeight - 
        config.headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });

      if (state.isMobile) {
        setTimeout(closeMenu, 300);
      }

      setTimeout(() => {
        state.isAutoScrolling = false;
      }, 700);
    });
  });

  // ================= ACTIVE LINK =================
  function setActiveLink(id) {
    if (state.activeSection === id) return;

    navLinks.forEach(l => l.classList.remove('active'));
    document
      .querySelector(`.navbar a[href="#${id}"]`)
      ?.classList.add('active');

    state.activeSection = id;
  }

// ================= SCROLL SPY (CHANGEMENT ACTIF AU DÉFILEMENT) =================
  window.addEventListener('scroll', () => {
    // On ne fait rien si l'utilisateur a cliqué sur un lien (le smooth scroll est en cours)
    if (state.isAutoScrolling) return;

    let currentSectionId = '';
    // On calcule la ligne de détection (le bas du header + une petite marge de 100px)
    const triggerLine = window.scrollY + header.offsetHeight + 100;

    sections.forEach(section => {
      // Position absolue de la section par rapport au haut de la page
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Si notre ligne de détection traverse cette section
      if (triggerLine >= sectionTop && triggerLine < sectionBottom) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // On met à jour le lien actif si on a trouvé une section
    if (currentSectionId) {
      setActiveLink(currentSectionId);
    }
  }, { passive: true });

  // ================= HEADER SCROLL =================
  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle(
            'scrolled',
            window.scrollY > config.scrollThreshold
          );
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  // ================= RESIZE =================
  window.addEventListener('resize', () => {
    state.isMobile = window.innerWidth <= config.mobileBreakpoint;
    if (!state.isMobile) closeMenu();
  });

  // ================= INIT =================
  function init() {
    const hash = window.location.hash.replace('#', '');
    setActiveLink(hash || sections[0]?.id);
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();
