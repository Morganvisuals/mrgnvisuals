// ============================================
// DONNÉES DES PROJETS
// ============================================

const projectsData = {
  1: {
    title: "Documentaire Cyparis",
    tags: ["Vidéo", "Scolaire"],
    image: "image/cyparis.jpg",
    description: "Dans ce projet, j'ai eu pour but de créer un documentaire sur Cyparis en animation 2D, j'ai utilisé plusieurs outils comme Artlist.IA pour la génération d'images, After Effect pour l'animation et FL Studio pour le sound design.",
    details: {
      "type de projet": "Documentaire animé",
      date: "2026",
      role: "Motion Designer, Monteur, Sound Designer",
      outils: "After Effects, FL Studio, Artlist.IA, FL Studio"
    },
    links: [
      { url: "https://youtu.be/__3YGMU6w24", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  2: {
    title: "Press Kit DJ Skylight",
    tags: ["Design", "Personnel"],
    image: "image/DJ.png",
    description: "Ce projet consiste en un dossier de presse professionnel que j'ai conçu en tant que DJ, afin de mettre en valeur mes compétences musicales, présenter mes statistiques de performances et fournir mes coordonnées pour être contacté dans le cadre de prestations événementielles. Le design reflète l'identité visuelle de mon projet artistique.",
    details: {
      "type de projet": "Projet personnel",
      date: "2024",
      role: "Designer & DJ",
      outils: "Photoshop, Illustrator"
    },
    links: [
      { url: "https://www.behance.net/gallery/234007493/DJ-SKYLIGHT-PRESS-KIT", text: "Voir sur Behance", icon: "bxl-behance" }
    ]
  },
  3: {
    title: "Stratégie CoArt",
    tags: ["Stratégie", "Scolaire"],
    image: "image/coa.jpg",
    description: "Ce projet est la réalisation d'un espace de Coworking en Guadeloupe, nommé 'CoArt'. Ce projet a été réalisé en groupe avec 2 autres participants. Mon rôle principal dans ce projet a été de faire l'analyse des différentes stratégies de communication, et la réalisation d'un spot radio. Nous avons uniquement fait la partie communication du projet.",
    details: {
      "type de projet": "SAÉ 4.STRAT.01",
      date: "2024",
      role: "Stratégie de communication",
      outils: "Canva, Google Docs"
    },
    links: [
      { url: "https://docs.google.com/document/d/1_wmGODrmdui6cYz_ow7nCwkrx3zdMsb6X74O0PVqYNg/edit?usp=sharing", text: "Voir le projet", icon: "bx-download" }
    ]
  },
  4: {
    title: "Charte graphique DASH",
    tags: ["Design", "SAÉ"],
    image: "image/dash.png",
    description: "Une charte graphique complète pour le logo d'une plateforme de streaming fictive nommée 'DASH', avec des couleurs jaune et noir dynamiques, et un logo représentant un petit fantôme stylisé. Le projet comprend l'identité visuelle complète : logo, typographie, palette de couleurs, et déclinaisons.",
    details: {
      "type de projet": "SAÉ 4.CRÉA.01",
      date: "2024",
      role: "Designer Graphique",
      outils: "Illustrator, Photoshop"
    },
    links: [
      { url: "image/DASH pdf.pdf", text: "Télécharger la charte", icon: "bx-download" }
    ]
  },
  5: {
    title: "Portfolio Personnel",
    tags: ["Web", "SAÉ"],
    image: "image/portfolionew.jpg",
    description: "Portfolio développé en HTML, CSS et JavaScript dans le cadre de la SAE 3.CREA.03. Ce site met en avant l'ensemble de mes projets réalisés durant ma formation en BUT MMI, ainsi que mes créations personnelles et mes expériences professionnelles en entreprise. Design responsive et moderne avec animations fluides.",
    details: {
      "type de projet": "SAÉ 3.CREA.03",
      date: "2024",
      role: "Développeur Front-End",
      outils: "HTML, CSS, JavaScript"
    },
    links: [
      { url: "#home", text: "Vous êtes dessus !", icon: "bx-home" }
    ]
  },
  6: {
    title: "Apple iPhone Air",
    tags: ["Vidéo", "Personnel"],
    image: "image/iphoneair.jpg",
    description: "Petite animation d'un iPhone Air réalisé sur After effect.",
    details: {
      "type de projet": "Personnel",
      date: "2025",
      role: "Motion Designer",
      outils: "After Effect"
    },
    links: [
      { url: "https://youtu.be/oZmUKvjlo48", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  7: {
    title: "Réel pour l'agence Koroko",
    tags: ["Vidéo", "Entreprise"],
    image: "image/koroko.jpg",
    description: "J'ai réaliser en entreprise plusieurs réels pour mettre en avant l'agence de voyage Koroko. J'ai pu mettre en avant les différentes destinations proposées par l'agence, ainsi que les différentes activités proposées.",
    details: {
      "type de projet": "Entreprise",
      date: "2025",
      role: "Monteur vidéo",
      outils: "Premiere pro"
    },
    links: [
      { url: "https://www.instagram.com/p/DRXSO-cl1e4/", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  8: {
    title: "Vidéo 18 coutures",
    tags: ["Vidéo", "Personnel"],
    image: "image/18coutures.jpg",
    description: "J'ai réalisé cette animation 3D pour la marque '18 coutures' sur After effect.",
    details: {
      "type de projet": "Personnel",
      date: "2025",
      role: "Motion designer",
      outils: "After Effect"
    },
    links: [
      { url: "https://youtu.be/ht3zFmFcb4k", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  }
};


// ============================================
// SYSTÈME DE FILTRAGE
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retirer la classe active de tous les boutons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Ajouter la classe active au bouton cliqué
    button.classList.add('active');

    // Récupérer la catégorie filtrée
    const filter = button.getAttribute('data-filter');

    // Filtrer les projets
    projectItems.forEach(item => {
      const categories = item.getAttribute('data-category');

      if (filter === 'all' || categories.includes(filter)) {
        item.classList.remove('hide');
        // Animation d'apparition
        setTimeout(() => {
          item.classList.add('show');
        }, 100);
      } else {
        item.classList.add('hide');
        item.classList.remove('show');
      }
    });
  });
});

// Animation d'apparition au chargement
window.addEventListener('load', () => {
  projectItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 100);
  });
});

// ============================================
// MODAL POPUP
// ============================================

const modal = document.getElementById('projectModal');
const modalBody = modal.querySelector('.modal-body');
const modalClose = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');
const projectButtons = document.querySelectorAll('.project-btn');

// Ouvrir le modal
projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project');
    const project = projectsData[projectId];

    if (project) {
      // Générer le contenu du modal
      const modalContent = `
        <div class="modal-header">
          <h2>${project.title}</h2>
          <div class="modal-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
        
        <div class="modal-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        
        <div class="modal-description">
          <p>${project.description}</p>
        </div>
        
        <div class="modal-details">
          ${Object.entries(project.details).map(([key, value]) => `
            <div class="detail-item">
              <h4>${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
              <p>${value}</p>
            </div>
          `).join('')}
        </div>
        
        <div class="modal-links">
          ${project.links.map(link => `
            <a href="${link.url}" class="modal-link" target="_blank">
              <i class='bx ${link.icon}'></i>
              <span>${link.text}</span>
            </a>
          `).join('')}
        </div>
      `;

      // Injecter le contenu
      modalBody.innerHTML = modalContent;

      // Afficher le modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

// Fermer le modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Fermer avec Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ============================================
// ANIMATION SCROLL REVEAL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer tous les éléments fade-in
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ============================================
// SMOOTH SCROLL POUR LES LIENS INTERNES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Ignorer les liens vides ou #
    if (href === '#' || href === '#home') {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// COMPTEUR D'ANIMATIONS
// ============================================

function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Activer les compteurs si présents
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, 0, target, 2000);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

console.log('🎨 Portfolio moderne chargé avec succès !');
