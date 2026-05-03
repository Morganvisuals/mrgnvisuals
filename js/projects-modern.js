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
      outils: "After Effects, FL Studio, Artlist.IA",
      "U.E": "Exprimer"
    },
    links: [
      { url: "https://youtu.be/__3YGMU6w24", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  2: {
    title: "Press Kit DJ Skylight",
    tags: ["Design", "Personnel"],
    image: "image/DJ.jpg",
    description: "Ce projet consiste en un dossier de presse professionnel que j'ai conçu en tant que DJ, afin de mettre en valeur mes compétences musicales, présenter mes statistiques de performances et fournir mes coordonnées pour être contacté dans le cadre de prestations événementielles. Le design reflète l'identité visuelle de mon projet artistique.",
    details: {
      "type de projet": "Personnel",
      date: "2024",
      role: "Designer & DJ",
      outils: "Photoshop, Illustrator",
      "U.E": "Exprimer"
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
      "type de projet": "Stratégie de communication (SAÉ 4.STRAT.01)",
      date: "2024",
      role: "Stratégie de communication",
      outils: "Canva, Google Docs",
      "U.E": "Comprendre"
    },
    links: [
      { url: "https://docs.google.com/document/d/1_wmGODrmdui6cYz_ow7nCwkrx3zdMsb6X74O0PVqYNg/edit?usp=sharing", text: "Voir le projet", icon: "bx-download" }
    ]
  },
  4: {
    title: "Charte graphique DASH",
    tags: ["Design", "SAÉ"],
    image: "image/dash.jpg",
    description: "Une charte graphique complète pour le logo d'une plateforme de streaming fictive nommée 'DASH', avec des couleurs jaune et noir dynamiques, et un logo représentant un petit fantôme stylisé. Le projet comprend l'identité visuelle complète : logo, typographie, palette de couleurs, et déclinaisons.",
    details: {
      "type de projet": "Charte graphique (SAÉ 4.CRÉA.01)",
      date: "2024",
      role: "Designer Graphique",
      outils: "Illustrator, Photoshop",
      "U.E": "Exprimer"
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
      outils: "HTML, CSS, JavaScript",
      "U.E": "développer"
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
      "type de projet": "Animation 3D",
      date: "2025",
      role: "Motion Designer",
      outils: "After Effect",
      "U.E": ""
    },
    links: [
      { url: "https://youtu.be/oZmUKvjlo48", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  7: {
    title: "Réel pour l'agence Koroko",
    tags: ["Vidéo", "Entreprise"],
    image: "image/koroko.jpg",
    description: "J'ai réalisé en entreprise plusieurs réels pour mettre en avant l'agence de voyage Koroko. J'ai pu mettre en avant les différentes destinations proposées par l'agence, ainsi que les différentes activités proposées.",
    details: {
      "type de projet": "Réels Instagram (Entreprise)",
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
      "type de projet": "Animation 3D (projet personnel)",
      date: "2025",
      role: "Motion designer",
      outils: "After Effect",
    },
    links: [
      { url: "https://youtu.be/ht3zFmFcb4k", text: "Voir la vidéo", icon: "bx-play-circle" }
    ]
  },
  9: {
    title: "Clip vidéo Krys",
    tags: ["Vidéo", "Personnel"],
    image: "image/poukwa.jpg",
    description: "Dans ce projet, j’ai occupé le rôle de VFX sur le clip vidéo de Krys intitulé 'Poukwa', en collaboration avec JIXELS et EDDAY. Grâce à l’intégration de textes en 3D et de divers effets visuels, j’ai contribué à donner une nouvelle dimension au clip. Cette réalisation s’est faite en collaboration avec Mighty Production.",
    details: {
      "type de projet": "Clip vidéo (projet personnel)",
      date: "2025",
      role: "VFX",
      outils: "After Effect",
    },
    links: [
      { url: "https://www.youtube.com/watch?v=Nxt36rOShPU", text: "Voir la vidéo", icon: "bx-play-circle" }
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
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    const filter = button.getAttribute('data-filter');

    projectItems.forEach(item => {
      const categories = (item.getAttribute('data-category') || '').trim();

      if (filter === 'all' || categories.split(/\s+/).includes(filter)) {
        item.classList.remove('hide');
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

if (modal) {
  const modalBody = modal.querySelector('.modal-body');
  const modalClose = modal.querySelector('.modal-close');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const projectButtons = document.querySelectorAll('.project-btn');

  const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // Ouvrir le modal
  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project');
      const project = projectsData[projectId];
      if (!project) return;

      const modalContent = `
        <div class="modal-header">
          <h2>${escapeHTML(project.title)}</h2>
          <div class="modal-tags">
            ${project.tags.map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`).join('')}
          </div>
        </div>

        <div class="modal-image">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)}">
        </div>

        <div class="modal-description">
          <p>${escapeHTML(project.description)}</p>
        </div>

        <div class="modal-details">
          ${Object.entries(project.details).map(([key, value]) => `
            <div class="detail-item">
              <h4>${escapeHTML(key.charAt(0).toUpperCase() + key.slice(1))}</h4>
              <p>${escapeHTML(value)}</p>
            </div>
          `).join('')}
        </div>

        <div class="modal-links">
          ${project.links.map(link => `
            <a href="${escapeHTML(link.url)}" class="modal-link" target="_blank" rel="noopener noreferrer">
              <svg class="icon" aria-hidden="true"><use href="image/icons.svg#i-${escapeHTML(link.icon)}"></use></svg>
              <span>${escapeHTML(link.text)}</span>
            </a>
          `).join('')}
        </div>
      `;

      modalBody.innerHTML = modalContent;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
