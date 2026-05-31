(function () {
  'use strict';

  // ================= CONFIG =================
  const config = {
    mobileBreakpoint: 1024,
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
  const menuIconUse = menuIcon?.querySelector('use');
  function setMenuIcon(name) {
    if (menuIconUse) menuIconUse.setAttribute('href', `image/icons.svg#i-${name}`);
  }

  function openMenu() {
    if (!menuIcon) return;
    setMenuIcon('bx-x');
    menuIcon.classList.add('is-open');
    navbar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    state.menuOpen = true;
  }

  function closeMenu() {
    if (!menuIcon) return;
    setMenuIcon('bx-menu');
    menuIcon.classList.remove('is-open');
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

  // ================= CACHE DES POSITIONS DE SECTIONS =================
  // Recalculer getBoundingClientRect() sur chaque scroll = layout thrashing.
  // On cache les positions au load et on les rafraîchit sur resize / window.load
  // (quand les images/fonts ont fini de modifier la hauteur des sections).
  let sectionCache = [];
  function cacheSectionPositions() {
    const scrollY = window.scrollY;
    sectionCache = sections.map(section => {
      const top = section.getBoundingClientRect().top + scrollY;
      return {
        id: section.getAttribute('id'),
        top,
        bottom: top + section.offsetHeight
      };
    });
  }

  // ================= SCROLL (spy + header.scrolled fusionnés dans un seul rAF) =================
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // 1. Classe .scrolled sur le header
      header.classList.toggle('scrolled', scrollY > config.scrollThreshold);

      // 2. Scroll spy (sauté si un smooth scroll programmatique est en cours)
      if (!state.isAutoScrolling) {
        const triggerLine = scrollY + header.offsetHeight + 100;
        let currentSectionId = '';
        for (let i = 0; i < sectionCache.length; i++) {
          const s = sectionCache[i];
          if (triggerLine >= s.top && triggerLine < s.bottom) {
            currentSectionId = s.id;
          }
        }
        if (currentSectionId) setActiveLink(currentSectionId);
      }

      scrollTicking = false;
    });
  }, { passive: true });

  // ================= RESIZE (debounced) =================
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      state.isMobile = window.innerWidth <= config.mobileBreakpoint;
      if (!state.isMobile) closeMenu();
      cacheSectionPositions();
    }, 200);
  });

  // ================= INIT =================
  function init() {
    const hash = window.location.hash.replace('#', '');
    setActiveLink(hash || sections[0]?.id);
    cacheSectionPositions();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

  // Re-cache une fois que toutes les images/fonts sont chargées (hauteur stable)
  window.addEventListener('load', cacheSectionPositions);

})();
