// ============================================
// DONNÉES DES PROJETS (bilingue FR / EN)
// Structure : { image, fr: {...}, en: {...} }
// ============================================

const projectsData = {
  1: {
    image: "image/cyparis.jpg",
    fr: {
      title: "Documentaire Cyparis",
      tags: ["Vidéo", "Universitaire"],
      description: "Dans ce projet, j'ai eu pour but de créer un documentaire sur Cyparis en animation 2D. Pour cela, j'ai utilisé plusieurs outils comme Artlist.IA pour la génération d'images, After Effects pour l'animation et FL Studio pour le sound design.",
      details: {
        "type de projet": "Documentaire animé",
        date: "2026",
        role: "Motion Designer, Monteur, Sound Designer",
        outils: "After Effects, Photoshop, FL Studio, Artlist.IA",
        "U.E": "Exprimer, Concevoir"
      },
      links: [{ url: "https://youtu.be/__3YGMU6w24", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "Cyparis Documentary",
      tags: ["Video", "Academic"],
      description: "For this project, my goal was to create a documentary about Cyparis using 2D animation. I used several tools such as Artlist.AI for image generation, After Effects for animation and FL Studio for sound design.",
      details: {
        "project type": "Animated documentary",
        date: "2026",
        role: "Motion Designer, Editor, Sound Designer",
        tools: "After Effects, Photoshop, FL Studio, Artlist.AI",
        "U.E": "Express, Design"
      },
      links: [{ url: "https://youtu.be/__3YGMU6w24", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  2: {
    image: "image/DJ.jpg",
    fr: {
      title: "Press Kit DJ Skylight",
      tags: ["Design", "Personnel", "Gestion de projet"],
      description: "Ce projet consiste en un dossier de presse professionnel que j'ai conçu en tant que DJ, afin de mettre en valeur mes compétences musicales, présenter mes statistiques de performances et fournir mes coordonnées pour être contacté dans le cadre de prestations événementielles. Le design reflète l'identité visuelle de mon projet artistique.",
      details: {
        "type de projet": "Personnel",
        date: "2024",
        role: "Designer & DJ",
        outils: "Photoshop, Illustrator",
        "U.E": "Exprimer, Entreprendre"
      },
      links: [{ url: "https://www.behance.net/gallery/234007493/DJ-SKYLIGHT-PRESS-KIT", text: "Voir sur Behance", icon: "bxl-behance" }]
    },
    en: {
      title: "DJ Skylight Press Kit",
      tags: ["Design", "Personal", "Project Management"],
      description: "This project is a professional press kit I designed as a DJ, to showcase my musical skills, present my performance statistics and provide my contact details for event bookings. The design reflects the visual identity of my artistic project.",
      details: {
        "project type": "Personal",
        date: "2024",
        role: "Designer & DJ",
        tools: "Photoshop, Illustrator",
        "U.E": "Express, Undertake"
      },
      links: [{ url: "https://www.behance.net/gallery/234007493/DJ-SKYLIGHT-PRESS-KIT", text: "View on Behance", icon: "bxl-behance" }]
    }
  },
  3: {
    image: "image/coa.jpg",
    fr: {
      title: "Stratégie CoArt",
      tags: ["Stratégie", "Universitaire"],
      description: "Ce projet est la réalisation d'un espace de Coworking en Guadeloupe, nommé 'CoArt'. Ce projet a été réalisé en groupe avec 2 autres participants. Mon rôle principal dans ce projet a été de faire l'analyse des différentes stratégies de communication, et la réalisation d'un spot radio. Nous avons uniquement fait la partie communication du projet.",
      details: {
        "type de projet": "Stratégie de communication (SAÉ 4.STRAT.01)",
        date: "2024",
        role: "Stratégie de communication",
        outils: "Canva, Google Docs",
        "U.E": "Comprendre"
      },
      links: [{ url: "image/coart.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "CoArt Strategy",
      tags: ["Strategy", "Academic"],
      description: "This project is the creation of a coworking space in Guadeloupe, named 'CoArt'. It was carried out as a team with 2 other participants. My main role was to analyse the different communication strategies and to produce a radio spot. We only handled the communication part of the project.",
      details: {
        "project type": "Communication strategy (SAÉ 4.STRAT.01)",
        date: "2024",
        role: "Communication Strategy",
        tools: "Canva, Google Docs",
        "U.E": "Understand"
      },
      links: [{ url: "image/coart.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  4: {
    image: "image/dash.jpg",
    fr: {
      title: "Charte graphique DASH",
      tags: ["Design", "Universitaire"],
      description: "Une charte graphique complète pour le logo d'une plateforme de streaming fictive nommée 'DASH', avec des couleurs jaune et noir dynamiques, et un logo représentant un petit fantôme stylisé. Le projet comprend l'identité visuelle complète : logo, typographie, palette de couleurs, et déclinaisons.",
      details: {
        "type de projet": "Charte graphique (SAÉ 4.CRÉA.01)",
        date: "2024",
        role: "Designer Graphique",
        outils: "Illustrator, Photoshop",
        "U.E": "Exprimer, Concevoir"
      },
      links: [{ url: "image/DASH pdf.pdf", text: "Voir la charte", icon: "bx-download", preview: true }]
    },
    en: {
      title: "DASH Brand Guidelines",
      tags: ["Design", "Academic"],
      description: "A complete brand guideline for the logo of a fictional streaming platform named 'DASH', with dynamic yellow and black colors, and a logo featuring a small stylised ghost. The project includes the full visual identity: logo, typography, color palette and variations.",
      details: {
        "project type": "Brand guidelines (SAÉ 4.CRÉA.01)",
        date: "2024",
        role: "Graphic Designer",
        tools: "Illustrator, Photoshop",
        "U.E": "Express, Design"
      },
      links: [{ url: "image/DASH pdf.pdf", text: "View the guidelines", icon: "bx-download", preview: true }]
    }
  },
  5: {
    image: "image/portfolionew.jpg",
    fr: {
      title: "Portfolio Personnel",
      tags: ["Web", "Universitaire"],
      description: "Portfolio développé en HTML, CSS et JavaScript dans le cadre de la SAE 3.CREA.03. Ce site met en avant l'ensemble de mes projets réalisés durant ma formation en BUT MMI, ainsi que mes créations personnelles et mes expériences professionnelles en entreprise. Design responsive et moderne avec animations fluides.",
      details: {
        "type de projet": "SAÉ 3.CREA.03",
        date: "2026",
        role: "Développeur Front-End",
        outils: "HTML, CSS, JavaScript",
        "U.E": "Développer, Concevoir"
      },
      links: [{ url: "#home", text: "Vous êtes dessus !", icon: "bx-home" }]
    },
    en: {
      title: "Personal Portfolio",
      tags: ["Web", "Academic"],
      description: "Portfolio built with HTML, CSS and JavaScript as part of the SAE 3.CREA.03. This site showcases all the projects I created during my BUT MMI studies, as well as my personal creations and professional experiences in companies. Responsive and modern design with smooth animations.",
      details: {
        "project type": "SAÉ 3.CREA.03",
        date: "2026",
        role: "Front-End Developer",
        tools: "HTML, CSS, JavaScript",
        "U.E": "Develop, Design"
      },
      links: [{ url: "#home", text: "You're on it!", icon: "bx-home" }]
    }
  },
  6: {
    image: "image/iphoneair.jpg",
    fr: {
      title: "Apple iPhone Air",
      tags: ["Vidéo", "Personnel"],
      description: "Petite animation d'un iPhone Air réalisée sur After Effects.",
      details: {
        "type de projet": "Animation 3D",
        date: "2025",
        role: "Motion Designer",
        outils: "After Effects",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://youtu.be/oZmUKvjlo48", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "Apple iPhone Air",
      tags: ["Video", "Personal"],
      description: "A short animation of an iPhone Air made with After Effects.",
      details: {
        "project type": "3D Animation",
        date: "2025",
        role: "Motion Designer",
        tools: "After Effects",
        "U.E": "Express"
      },
      links: [{ url: "https://youtu.be/oZmUKvjlo48", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  7: {
    image: "image/koroko.jpg",
    fr: {
      title: "Réel pour l'agence Koroko",
      tags: ["Vidéo", "Entreprise"],
      description: "J'ai réalisé en entreprise plusieurs réels pour mettre en avant l'agence de voyage Koroko. J'ai pu mettre en avant les différentes destinations proposées par l'agence, ainsi que les différentes activités proposées.",
      details: {
        "type de projet": "Réels Instagram (Entreprise)",
        date: "2025",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.instagram.com/p/DRXSO-cl1e4/", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "Reel for the Koroko agency",
      tags: ["Video", "Company"],
      description: "I created several reels in-company to promote the travel agency Koroko. I was able to highlight the different destinations offered by the agency, as well as the various activities available.",
      details: {
        "project type": "Instagram Reels (Company)",
        date: "2025",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.instagram.com/p/DRXSO-cl1e4/", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  8: {
    image: "image/18coutures.jpg",
    fr: {
      title: "Vidéo 18 coutures",
      tags: ["Vidéo", "Personnel"],
      description: "J'ai réalisé cette animation 3D pour la marque '18 coutures' sur After Effects.",
      details: {
        "type de projet": "Animation 3D (projet personnel)",
        date: "2025",
        role: "Motion Designer",
        outils: "After Effects",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://youtu.be/ht3zFmFcb4k", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "18 coutures Video",
      tags: ["Video", "Personal"],
      description: "I created this 3D animation for the brand '18 coutures' with After Effects.",
      details: {
        "project type": "3D Animation (personal project)",
        date: "2025",
        role: "Motion Designer",
        tools: "After Effects",
        "U.E": "Express"
      },
      links: [{ url: "https://youtu.be/ht3zFmFcb4k", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  9: {
    image: "image/poukwa.jpg",
    fr: {
      title: "Clip vidéo Krys",
      tags: ["Vidéo", "Personnel"],
      description: "Dans ce projet, j'ai occupé le rôle de VFX sur le clip vidéo de Krys intitulé 'Poukwa', en collaboration avec JIXELS et EDDAY. Grâce à l'intégration de textes en 3D et de divers effets visuels, j'ai contribué à donner une nouvelle dimension au clip. Cette réalisation s'est faite en collaboration avec Mighty Production.",
      details: {
        "type de projet": "Clip vidéo (projet personnel)",
        date: "2025",
        role: "VFX",
        outils: "After Effects",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.youtube.com/watch?v=Nxt36rOShPU", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "Krys Music Video",
      tags: ["Video", "Personal"],
      description: "For this project, I worked as the VFX artist on Krys's music video titled 'Poukwa', in collaboration with JIXELS and EDDAY. Through the integration of 3D text and various visual effects, I helped give the video a new dimension. This work was done in collaboration with Mighty Production.",
      details: {
        "project type": "Music video (personal project)",
        date: "2025",
        role: "VFX",
        tools: "After Effects",
        "U.E": "Express"
      },
      links: [{ url: "https://www.youtube.com/watch?v=Nxt36rOShPU", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  10: {
    image: "image/exterria.jpg",
    fr: {
      title: "Site web Exterria",
      tags: ["Web", "Entreprise"],
      description: "Dans ce projet, j'ai été chargé de la réalisation du site web pour le cabinet paysagiste 'Exterria'. Le but était de créer un site vitrine pour présenter les différentes prestations proposées par le cabinet.",
      details: {
        "type de projet": "Site web (entreprise)",
        date: "2026",
        role: "Web designer",
        outils: "Wordpress Elementor, Figma",
        "U.E": "Développer, Concevoir"
      },
      links: [{ url: "https://exterria.fr/", text: "Voir le site web", icon: "bx-code-alt" }]
    },
    en: {
      title: "Exterria Website",
      tags: ["Web", "Company"],
      description: "For this project, I was in charge of building the website for the landscaping firm 'Exterria'. The goal was to create a showcase site presenting the different services offered by the firm.",
      details: {
        "project type": "Website (company)",
        date: "2026",
        role: "Web Designer",
        tools: "Wordpress Elementor, Figma",
        "U.E": "Develop, Design"
      },
      links: [{ url: "https://exterria.fr/", text: "Visit the website", icon: "bx-code-alt" }]
    }
  },
  11: {
    image: "image/skylightsite.jpg",
    fr: {
      title: "Site web DJ Skylight",
      tags: ["Web", "Personnel"],
      description: "Dans ce projet, j'ai été le webdesigner et le concepteur de ce site, conçu pour promouvoir mon activité de DJ et de compositeur. Il remplace mon press kit papier et a pour but de présenter mes créations musicales, ma biographie et mes coordonnées pour être contacté dans le cadre de prestations événementielles.",
      details: {
        "type de projet": "Site web (projet personnel)",
        date: "2026",
        role: "Web Designer & développeur",
        outils: "HTML, CSS, JavaScript, Claude Code",
        "U.E": "Développer, Concevoir"
      },
      links: [{ url: "https://djskylight.fr", text: "Voir le site web", icon: "bx-code-alt" }]
    },
    en: {
      title: "DJ Skylight Website",
      tags: ["Web", "Personal"],
      description: "For this project, I was in charge of building the website for the DJ and producer 'Skylight'. The goal was to create a showcase site presenting the different services offered by the artist.",
      details: {
        "project type": "Website (personal project)",
        date: "2026",
        role: "Web Designer & developer",
        tools: "HTML, CSS, JavaScript, Claude Code",
        "U.E": "Develop, Design"
      },
      links: [{ url: "https://djskylight.fr", text: "Visit the website", icon: "bx-code-alt" }]
    }
  },
  12: {
    image: "image/audrey.jpg",
    fr: {
      title: "Vidéos de personal branding pour un client",
      tags: ["Vidéo", "Entreprise"],
      description: "Dans ce projet réalisé en entreprise, j'ai été chargé de créer des vidéos promotionnelles pour un client : Audrey Promeneur, fondatrice de l'agence de voyage Feeling Guadeloupe. Le but de ces vidéos est de la mettre en valeur elle et son activité principale : l'organisation de voyages sur mesure en Guadeloupe.",
      details: {
        "type de projet": "Vidéos (projet d'entreprise)",
        date: "2026",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.instagram.com/p/DSp-O9QAH2t/", text: "Voir une des vidéos", icon: "bx-play-circle" }]
    },
    en: {
      title: "Personal Branding Videos for a Client",
      tags: ["Video", "Company"],
      description: "For this project, I was in charge of creating promotional videos for a client.",
      details: {
        "project type": "Videos (company project)",
        date: "2026",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.instagram.com/p/DSp-O9QAH2t/", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  13: {
    image: "image/boheme.jpg",
    fr: {
      title: 'Clip vidéo "La bohème"',
      tags: ["Vidéo", "Personnel"],
      description: "Dans ce projet, en collaboration avec Mighty Production, j'ai été amené à être le monteur vidéo et le VFX de ce clip. J'ai pu mettre en avant mes compétences en montage et en effets visuels pour donner une nouvelle dimension au clip.",
      details: {
        "type de projet": "Clip vidéo (projet personnel)",
        date: "2026",
        role: "Monteur vidéo & VFX",
        outils: "After Effects, Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.youtube.com/watch?v=GlWtgka-Hqs&list=RDGlWtgka-Hqs&start_radio=1", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: 'Music Video "La bohème"',
      tags: ["Video", "Personal"],
      description: "For this project, in collaboration with Mighty Production, I was the video editor and VFX artist for this music video. I was able to showcase my skills in editing and visual effects to give the video a new dimension.",
      details: {
        "project type": "Music video (personal project)",
        date: "2026",
        role: "Video Editor & VFX",
        tools: "After Effects, Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.youtube.com/watch?v=GlWtgka-Hqs&list=RDGlWtgka-Hqs&start_radio=1", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  14: {
    image: "image/Businessprocessmanagement.jpg",
    fr: {
      title: "Business Process Management",
      tags: ["Stratégie", "Universitaire"],
      description: "Dans ce projet, j'ai appris à structurer les processus pour transformer le chaos créatif en performance durable. Nous avons analysé et identifié les meilleures façons d'optimiser l'organisation d'une entreprise à travers un cas pratique.",
      details: {
        "type de projet": "Gestion de processus (Universitaire)",
        date: "2025",
        role: "Étudiant",
        outils: "Canva, Google Docs",
        "U.E": "Comprendre"
      },
      links: [{ url: "image/business-process-management.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Business Process Management",
      tags: ["Strategy", "Academic"],
      description: "In this project, I learned how to structure processes to transform creative chaos into sustainable performance. We analysed and identified the best ways to optimise a company's organisation through a practical case study.",
      details: {
        "project type": "Process Management (Academic)",
        date: "2025",
        role: "Student",
        tools: "Canva, Google Docs",
        "U.E": "Understand"
      },
      links: [{ url: "image/business-process-management.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  15: {
    image: "image/blok.jpg",
    fr: {
      title: "Réels Instagram pour Le média BLOK",
      tags: ["Vidéo", "Universitaire"],
      description: "Dans ce projet, j'ai réalisé des réels Instagram pour Le média BLOK. L'objectif était de créer des contenus vidéo courts et engageants.",
      details: {
        "type de projet": "Réels Instagram (Universitaire)",
        date: "2026",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.instagram.com/p/DWbq6hojroH/", text: "Voir une des vidéos", icon: "bx-play-circle" }]
    },
    en: {
      title: "Instagram Reels for BLOK Media",
      tags: ["Video", "Academic"],
      description: "For this project, I created Instagram reels for BLOK Media. The goal was to produce short, engaging video content.",
      details: {
        "project type": "Instagram Reels (Academic)",
        date: "2026",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.instagram.com/p/DWbq6hojroH/", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  16: {
    image: "image/flora.jpg",
    fr: {
      title: "Flora Beauty",
      tags: ["Gestion de projet", "Stratégie", "Universitaire"],
      description: "Dans le cadre de ce projet, mon groupe et moi avons créé une marque nommée « Flora Beauty » et développé l'ensemble de sa stratégie entrepreneuriale : étude de marché, positionnement, identité visuelle, plan de communication et stratégie commerciale.",
      details: {
        "type de projet": "Projet entrepreneurial (Universitaire)",
        date: "2026",
        role: "Chef de projet & Stratégie",
        outils: "Canva, Google Docs",
        "U.E": "Entreprendre, Comprendre"
      },
      links: [{ url: "image/flora-beauty.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Flora Beauty",
      tags: ["Project Management", "Strategy", "Academic"],
      description: "For this project, my team and I created a brand called 'Flora Beauty' and developed its entire entrepreneurial strategy: market research, positioning, visual identity, communication plan and commercial strategy.",
      details: {
        "project type": "Entrepreneurial project (Academic)",
        date: "2026",
        role: "Project Manager & Strategy",
        tools: "Canva, Google Docs",
        "U.E": "Undertake, Understand"
      },
      links: [{ url: "image/flora-beauty.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  17: {
    image: "image/gwadamobilite.jpg",
    fr: {
      title: "Gwada Mobilité",
      tags: ["Gestion de projet", "Stratégie", "Universitaire"],
      description: "Projet de groupe autour de GuadaMobilité, une application mobile fictive pensée pour faciliter les déplacements en Guadeloupe en centralisant différents modes de transport (bus, covoiturage, mobilité plus responsable).\n\nNous avons construit l'univers global du projet : concept, modèle économique, proposition de valeur, cibles et stratégie de communication, sans oublier la gestion de projet et l'impact social, économique et environnemental de l'application.\n\nMon rôle : création du concept, réflexion stratégique, business model, définition des cibles et stratégie de communication.",
      details: {
        "type de projet": "Projet entrepreneurial (Universitaire)",
        date: "2025",
        role: "Chef de projet & Communication",
        outils: "Canva, Google Docs",
        "U.E": "Entreprendre, Comprendre, Concevoir"
      },
      links: [{ url: "image/gwada-mobilite.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Gwada Mobilité",
      tags: ["Project Management", "Strategy", "Academic"],
      description: "Group project around GuadaMobilité, a fictional mobile app designed to make getting around Guadeloupe easier by bringing together different modes of transport (buses, carpooling, more responsible mobility).\n\nWe built the project's overall identity: concept, business model, value proposition, target audiences and communication strategy, along with project management and the app's social, economic and environmental impact.\n\nMy role: concept creation, strategic thinking, business model, target audience definition and communication strategy.",
      details: {
        "project type": "Entrepreneurial project (Academic)",
        date: "2025",
        role: "Project Manager & Communication",
        tools: "Canva, Google Docs",
        "U.E": "Undertake, Understand, Design"
      },
      links: [{ url: "image/gwada-mobilite.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  18: {
    image: "image/LeanManagement.jpg",
    fr: {
      title: "Lean Management",
      tags: ["Stratégie", "Universitaire"],
      description: "Dans ce projet, j'ai appris avec mon groupe les principes de la gestion lean et leur application dans un contexte professionnel. Nous avons étudié les méthodes d'élimination des gaspillages et d'amélioration continue pour optimiser les flux de production.",
      details: {
        "type de projet": "Gestion & Stratégie (Universitaire)",
        date: "2025",
        role: "Étudiant",
        outils: "Canva, Google Docs",
        "U.E": "Comprendre"
      },
      links: [{ url: "image/lean-management.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Lean Management",
      tags: ["Strategy", "Academic"],
      description: "In this project, I learned with my team the principles of lean management and their application in a professional context. We studied methods for eliminating waste and continuous improvement to optimise production flows.",
      details: {
        "project type": "Management & Strategy (Academic)",
        date: "2025",
        role: "Student",
        tools: "Canva, Google Docs",
        "U.E": "Understand"
      },
      links: [{ url: "image/lean-management.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  19: {
    image: "image/NBT.jpg",
    fr: {
      title: "Réels Instagram pour NBT",
      tags: ["Vidéo", "Entreprise"],
      description: "Dans ce projet, j'ai créé des réels Instagram pour promouvoir l'office du tourisme du Nord Basse-Terre. L'objectif était de mettre en avant les produits, services et partenaires de l'entreprise à travers des contenus vidéo adaptés aux codes des réseaux sociaux.",
      details: {
        "type de projet": "Réels Instagram (Entreprise)",
        date: "2026",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.instagram.com/p/DYX3P0uN951/", text: "Voir une des vidéos", icon: "bx-play-circle" }]
    },
    en: {
      title: "Instagram Reels for NBT",
      tags: ["Video", "Company"],
      description: "For this project, I created Instagram reels to promote the Nord Basse-Terre tourism office. The goal was to highlight the organisation's products, services and partners through video content tailored to social media standards.",
      details: {
        "project type": "Instagram Reels (Company)",
        date: "2026",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.instagram.com/p/DYX3P0uN951/", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  20: {
    image: "image/premier-site-web.jpg",
    fr: {
      title: "Mon ancien portfolio",
      tags: ["Web", "Universitaire"],
      description: "Mon ancien portfolio, réalisé durant ma 2e année de BUT MMI en HTML, CSS et JavaScript. Ce site m'a permis de mettre en pratique mes compétences en intégration web à travers un projet concret, d'apprendre à concevoir une mise en page responsive et d'ajouter des animations pour présenter l'ensemble de mes travaux.",
      details: {
        "type de projet": "Site web (Universitaire)",
        date: "2024",
        role: "Développeur Front-End",
        outils: "HTML, CSS, JavaScript",
        "U.E": "Développer, Concevoir"
      },
      links: [{ url: "https://morganvisuals.vercel.app/", text: "Voir le projet", icon: "bx-code-alt" }]
    },
    en: {
      title: "My old portfolio",
      tags: ["Web", "Academic"],
      description: "My old portfolio, built during my second year of BUT MMI using HTML, CSS and JavaScript. This site let me put my web integration skills into practice through a concrete project, learn to design a responsive layout and add animations to showcase all of my work.",
      details: {
        "project type": "Website (Academic)",
        date: "2024",
        role: "Front-End Developer",
        tools: "HTML, CSS, JavaScript",
        "U.E": "Develop, Design"
      },
      links: [{ url: "https://morganvisuals.vercel.app/", text: "View the project", icon: "bx-code-alt" }]
    }
  },
  21: {
    image: "image/DOM.jpg",
    fr: {
      title: "DOM-COM",
      tags: ["Web", "Universitaire"],
      description: "DOM-COM est un site web que j'ai réalisé en groupe en première année de BUT MMI. Il présente trois territoires français d'outre-mer — la Martinique, la Guadeloupe et la Guyane — sous forme de portail informatif, avec une page dédiée à chaque destination. Ce projet m'a permis de poser mes premières bases en intégration HTML/CSS et en structuration d'un site multi-pages.",
      details: {
        "type de projet": "Site web (Universitaire)",
        date: "2023",
        role: "Webdesigner & Développeur Front-End",
        outils: "HTML, CSS",
        "U.E": "Concevoir, Développer"
      },
      links: [{ url: "https://domcom.vercel.app/index.html", text: "Voir le site web", icon: "bx-code-alt" }]
    },
    en: {
      title: "DOM-COM",
      tags: ["Web", "Academic"],
      description: "DOM-COM is a website I built as part of a team during my first year of BUT MMI. It showcases three French overseas territories — Martinique, Guadeloupe and French Guiana — as an informative portal, with a dedicated page for each destination. This project gave me my first hands-on experience with HTML/CSS integration and structuring a multi-page site.",
      details: {
        "project type": "Website (Academic)",
        date: "2023",
        role: "Web Designer & Front-End Developer",
        tools: "HTML, CSS",
        "U.E": "Design, Develop"
      },
      links: [{ url: "https://domcom.vercel.app/index.html", text: "View the website", icon: "bx-code-alt" }]
    }
  },
  22: {
    image: "image/photolux.png",
    fr: {
      title: "Maquette Photolux",
      tags: ["Design", "Entreprise"],
      description: "Dans le cadre de mon expérience en entreprise, j'ai conçu sur Adobe XD la maquette du site web de Photolux, un studio photo implanté en Guadeloupe depuis plus de 50 ans. J'ai réalisé l'ensemble de l'interface : page d'accueil, présentation du studio et de ses services (photos d'identité, impressions, encadrement, retouches et montages). L'objectif était de proposer une direction visuelle moderne et lisible, fidèle à l'identité de l'enseigne, avant l'étape d'intégration.",
      details: {
        "type de projet": "Maquette web (entreprise)",
        date: "2026",
        role: "UI/UX Designer",
        outils: "Adobe XD",
        "U.E": "Concevoir"
      },
      links: [{ url: "image/photolux.pdf", text: "Voir la maquette", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Photolux Mockup",
      tags: ["Design", "Company"],
      description: "During my in-company experience, I designed the website mockup of Photolux on Adobe XD, a photo studio established in Guadeloupe for over 50 years. I built the entire interface: home page, presentation of the studio and its services (ID photos, prints, framing, retouching and editing). The goal was to define a modern and readable visual direction, true to the brand's identity, ahead of the integration stage.",
      details: {
        "project type": "Web mockup (company)",
        date: "2026",
        role: "UI/UX Designer",
        tools: "Adobe XD",
        "U.E": "Design"
      },
      links: [{ url: "image/photolux.pdf", text: "View the mockup", icon: "bx-download", preview: true }]
    }
  },
  23: {
    image: "image/maison.jpg",
    fr: {
      title: "Maquette Maison & Paysage",
      tags: ["Design", "Entreprise"],
      description: "Réalisée sur Adobe XD lors de mon expérience en entreprise, cette maquette présente le site web d'un constructeur de maisons sur mesure en Guadeloupe. J'ai conçu la page d'accueil et l'ensemble du parcours : mise en avant des offres, comparatif des solutions, contenu de l'étude de conception et formulaire de contact. Le travail s'est concentré sur une interface claire et rassurante pour accompagner les clients dans leur projet de construction.",
      details: {
        "type de projet": "Maquette web (entreprise)",
        date: "2026",
        role: "UI/UX Designer",
        outils: "Adobe XD",
        "U.E": "Concevoir"
      },
      links: [{ url: "image/maison.pdf", text: "Voir la maquette", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Maison & Paysage Mockup",
      tags: ["Design", "Company"],
      description: "Designed on Adobe XD during my in-company experience, this mockup presents the website of a custom home builder in Guadeloupe. I created the home page and the full journey: highlighting the offers, comparing the solutions, the design study content and the contact form. The work focused on a clear and reassuring interface to support clients throughout their construction project.",
      details: {
        "project type": "Web mockup (company)",
        date: "2026",
        role: "UI/UX Designer",
        tools: "Adobe XD",
        "U.E": "Design"
      },
      links: [{ url: "image/maison.pdf", text: "View the mockup", icon: "bx-download", preview: true }]
    }
  },
  24: {
    image: "image/ppp-marie-joseph-morgan.png",
    fr: {
      title: "Projet Professionnel Personnalisé",
      tags: ["Gestion de projet", "Universitaire"],
      description: "Le Projet Professionnel Personnalisé (PPP) est un dossier structurant mon parcours. J'y définis mes objectifs professionnels, notamment devenir monteur vidéo / motion designer et publier un morceau en tant que DJ. J'y présente également mes compétences, mes justificatifs de qualification, une cartographie des aides à la formation et au financement, un budget prévisionnel, un rétroplanning, ainsi que les règles juridiques liées à mon futur métier. Ce travail m'a permis d'établir une feuille de route réaliste et cohérente afin de développer mes compétences, mieux organiser mon projet et construire progressivement mon identité professionnelle.",
      details: {
        "type de projet": "Projet professionnel personnalisé (Universitaire)",
        date: "2026",
        role: "Étudiant",
        outils: "Canva",
        "U.E": "Entreprendre, Comprendre"
      },
      links: [{ url: "image/ppp-marie-joseph-morgan.pdf", text: "Voir le projet", icon: "bx-download", preview: true }]
    },
    en: {
      title: "Personalised Professional Project",
      tags: ["Project Management", "Academic"],
      description: "The Personalised Professional Project (PPP) is a report that structures my career path. I define my professional goals, notably becoming a video editor / motion designer and releasing a track as a DJ. I also present my skills, qualification records, a map of training and funding support, a forecast budget, a schedule, as well as the legal rules tied to my future profession. This work allowed me to set out a realistic and coherent roadmap to develop my skills, better organise my project and progressively build my professional identity.",
      details: {
        "project type": "Personalised professional project (Academic)",
        date: "2026",
        role: "Student",
        tools: "Canva",
        "U.E": "Undertake, Understand"
      },
      links: [{ url: "image/ppp-marie-joseph-morgan.pdf", text: "View the project", icon: "bx-download", preview: true }]
    }
  },
  25: {
    image: "image/forever.jpg",
    fr: {
      title: "Forever Caribbean — Spot promotionnel",
      tags: ["Vidéo", "Entreprise"],
      description: "Pour Forever Caribbean, j'ai réalisé un spot publicitaire de 30 secondes visant à promouvoir l'univers et le savoir-faire de la marque. La vidéo rassemble plusieurs mariages réalisés par Forever Caribbean afin de créer un montage dynamique, élégant et émotionnel, capable de transmettre rapidement l'énergie, la beauté et l'intensité de ces moments uniques. L'objectif du projet était de concevoir une vidéo courte, impactante et rythmée, pensée pour les réseaux sociaux et la communication digitale. À travers une sélection d'images fortes, de détails visuels et d'instants authentiques, le spot met en avant l'expérience proposée par Forever Caribbean : capturer et sublimer les souvenirs les plus précieux.",
      details: {
        "type de projet": "Spot promotionnel (Entreprise)",
        date: "2026",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.youtube.com/watch?v=Nsx32WtB3lI", text: "Voir la vidéo", icon: "bx-play-circle" }]
    },
    en: {
      title: "Forever Caribbean — Promotional Video",
      tags: ["Video", "Company"],
      description: "For Forever Caribbean, I created a 30-second promotional video to showcase the brand's world and craftsmanship. The video brings together several weddings produced by Forever Caribbean to create a dynamic, elegant and emotional edit that quickly conveys the energy, beauty and intensity of these unique moments. The goal of the project was to design a short, impactful and fast-paced video, made for social media and digital communication. Through a selection of strong images, visual details and authentic moments, the video highlights the experience offered by Forever Caribbean: capturing and enhancing the most precious memories.",
      details: {
        "project type": "Promotional video (Company)",
        date: "2026",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.youtube.com/watch?v=Nsx32WtB3lI", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  26: {
    image: "image/kannaripann.jpg",
    fr: {
      title: "Kannari Pann — Montage vidéo",
      tags: ["Vidéo", "Entreprise"],
      description: "Pour Kannari Pann, j'ai réalisé différents montages vidéo destinés à accompagner la communication digitale du magazine. Mon travail s'est principalement concentré sur le montage d'interviews de personnalités et d'acteurs liés à l'univers de Kannari Pann, tout en incluant également d'autres formats, comme des vidéos récapitulatives d'événements. L'objectif était de créer des contenus vidéo clairs, fluides et dynamiques, capables de mettre en valeur les intervenants, les moments forts et l'identité du magazine. Pour les interviews, mon rôle consistait à sélectionner les meilleures prises, structurer les échanges, rendre le discours lisible et agréable à suivre, puis soigner le rythme et les transitions afin de maintenir l'attention du spectateur. À travers ces différents montages, j'ai contribué à valoriser l'image de Kannari Pann en créant des vidéos professionnelles, cohérentes et adaptées aux réseaux sociaux, entre formats d'interviews, contenus éditoriaux et récapitulatifs d'événements.",
      details: {
        "type de projet": "Montage vidéo (Entreprise)",
        date: "2026",
        role: "Monteur vidéo",
        outils: "Premiere Pro",
        "U.E": "Exprimer"
      },
      links: [{ url: "https://www.instagram.com/kannaripann_magazine/", text: "Voir sur Instagram", icon: "bxl-instagram-alt" }]
    },
    en: {
      title: "Kannari Pann — Video Editing",
      tags: ["Video", "Company"],
      description: "For Kannari Pann, I produced various video edits to support the magazine's digital communication. My work mainly focused on editing interviews of personalities and figures connected to the Kannari Pann world, while also including other formats such as event recap videos. The goal was to create clear, smooth and dynamic video content that showcases the speakers, the highlights and the magazine's identity. For the interviews, my role was to select the best takes, structure the exchanges, make the speech readable and pleasant to follow, then refine the pacing and transitions to keep the viewer's attention. Through these various edits, I helped enhance Kannari Pann's image by creating professional, consistent video content tailored to social media, across interview formats, editorial content and event recaps.",
      details: {
        "project type": "Video editing (Company)",
        date: "2026",
        role: "Video Editor",
        tools: "Premiere Pro",
        "U.E": "Express"
      },
      links: [{ url: "https://www.instagram.com/kannaripann_magazine/", text: "View on Instagram", icon: "bxl-instagram-alt" }]
    }
  },
  27: {
    image: "image/bullit3.jpg",
    fr: {
      title: "Cover « Everything Is Nice »",
      tags: ["Design", "Personnel"],
      description: "Pochette de single réalisée pour le titre « Everything Is Nice » de Lucky Luke x Skycee. J'ai détouré les deux artistes, créé un fond rouge et orange avec des effets de lumière, puis travaillé un lettrage épais et lumineux pour que le titre reste lisible même en petit sur les plateformes de streaming. Les balles rappellent l'ambiance du morceau.",
      details: {
        "type de projet": "Pochette de single",
        date: "2025",
        role: "Directeur artistique, Designer graphique",
        outils: "Photoshop, Illustrator",
        "U.E": "Exprimer, Concevoir"
      },
      links: [{ url: "image/bullit3.jpg", text: "Voir la cover en grand", icon: "bx-image", image: true }]
    },
    en: {
      title: "“Everything Is Nice” Cover Art",
      tags: ["Design", "Personal"],
      description: "Single cover created for the track “Everything Is Nice” by Lucky Luke x Skycee. I cut out both artists, built a red and orange background with lighting effects, then worked on thick, glowing lettering so the title stays readable even at thumbnail size on streaming platforms. The bullets echo the mood of the track.",
      details: {
        "project type": "Single cover art",
        date: "2025",
        role: "Art Director, Graphic Designer",
        tools: "Photoshop, Illustrator",
        "U.E": "Express, Design"
      },
      links: [{ url: "image/bullit3.jpg", text: "View the full cover", icon: "bx-image", image: true }]
    }
  },
  28: {
    image: "image/affiche-samaritaine.jpg",
    fr: {
      title: "Affiche publicitaire Samaritaine",
      tags: ["Design", "Universitaire"],
      description: "Affiche publicitaire conçue pour le grand magasin La Samaritaine. J'ai composé toute la scène en photomontage : détourage du modèle, mise en place des produits sur les podiums, création des ombres et de la lumière de studio pour rendre l'ensemble crédible. Le cadre jaune et les tons violet clair structurent l'image et laissent de la place au logo de la marque.",
      details: {
        "type de projet": "Affiche publicitaire",
        date: "2025",
        role: "Designer graphique",
        outils: "Photoshop, Illustrator",
        "U.E": "Exprimer, Concevoir"
      },
      links: [{ url: "image/affiche-samaritaine.jpg", text: "Voir l'affiche en grand", icon: "bx-image", image: true }]
    },
    en: {
      title: "Samaritaine Advertising Poster",
      tags: ["Design", "Academic"],
      description: "Advertising poster designed for the Samaritaine department store. I built the whole scene as a photo montage: cutting out the model, placing the products on the podiums, and creating the shadows and studio lighting that make it all believable. The yellow frame and the light purple tones structure the image and leave room for the brand logo.",
      details: {
        "project type": "Advertising poster",
        date: "2025",
        role: "Graphic Designer",
        tools: "Photoshop, Illustrator",
        "U.E": "Express, Design"
      },
      links: [{ url: "image/affiche-samaritaine.jpg", text: "View the full poster", icon: "bx-image", image: true }]
    }
  },
  29: {
    image: "image/affiche-six-triple-eight.jpg",
    fr: {
      title: "Affiche The Six Triple Eight",
      tags: ["Design", "Universitaire"],
      description: "Réinterprétation de l'affiche du film « The Six Triple Eight ». L'exercice portait sur les codes de l'affiche de cinéma : un portrait au premier plan, un arrière-plan qui raconte l'histoire (soldats, ruines, fumée) et des teintes sépia pour situer l'époque. Les textes suivent la mise en page classique d'une affiche, du nom de l'actrice en haut jusqu'au bloc diffuseur et à la date de sortie en bas.",
      details: {
        "type de projet": "Affiche de film",
        date: "2025",
        role: "Designer graphique",
        outils: "Photoshop",
        "U.E": "Exprimer, Concevoir"
      },
      links: [{ url: "image/affiche-six-triple-eight.jpg", text: "Voir l'affiche en grand", icon: "bx-image", image: true }]
    },
    en: {
      title: "The Six Triple Eight Poster",
      tags: ["Design", "Academic"],
      description: "A reinterpretation of the poster for the film “The Six Triple Eight”. The exercise focused on the codes of movie posters: a portrait in the foreground, a background that tells the story (soldiers, ruins, smoke) and sepia tones to set the period. The text follows the classic poster layout, from the lead actress's name at the top down to the distributor block and release date at the bottom.",
      details: {
        "project type": "Movie poster",
        date: "2025",
        role: "Graphic Designer",
        tools: "Photoshop",
        "U.E": "Express, Design"
      },
      links: [{ url: "image/affiche-six-triple-eight.jpg", text: "View the full poster", icon: "bx-image", image: true }]
    }
  },
  30: {
    image: "image/maquette-vintageshop.jpg",
    fr: {
      title: "Maquette VintageShop",
      tags: ["Design", "Universitaire"],
      description: "Maquette de la page d'accueil de « VintageShop », une boutique en ligne fictive spécialisée dans les objets vintage. Le fond gris foncé texturé et l'orange vif mettent en avant le produit du moment, ici le téléphone à cadran d'Alexander Graham Bell. La page pose la barre de navigation, le titre avec sa date, le bouton d'action et l'espace produit, sur une grille réutilisable pour le reste du site.",
      details: {
        "type de projet": "Maquette web (page d'accueil)",
        date: "2025",
        role: "UI Designer",
        outils: "Figma, Photoshop",
        "U.E": "Concevoir, Exprimer"
      },
      links: [{ url: "image/maquette-vintageshop.jpg", text: "Voir la maquette en grand", icon: "bx-image", image: true }]
    },
    en: {
      title: "VintageShop Mockup",
      tags: ["Design", "Academic"],
      description: "Homepage mockup for “VintageShop”, a fictional online store specialising in vintage objects. The textured dark grey background and the bright orange put the featured product forward, here Alexander Graham Bell's rotary telephone. The page sets out the navigation bar, the headline with its date, the action button and the product area, on a grid that can be reused across the rest of the site.",
      details: {
        "project type": "Web mockup (homepage)",
        date: "2025",
        role: "UI Designer",
        tools: "Figma, Photoshop",
        "U.E": "Design, Express"
      },
      links: [{ url: "image/maquette-vintageshop.jpg", text: "View the full mockup", icon: "bx-image", image: true }]
    }
  }

};


// ============================================
// SYSTÈME DE FILTRAGE
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

// Nombre de projets affichés d'emblée dans la catégorie "Tous" avant le "Voir plus"
const INITIAL_COUNT = 6;

const projectsSection = document.querySelector('.projects-modern');
const showMoreBtn = document.querySelector('.show-more-btn');
const showMoreText = showMoreBtn?.querySelector('.show-more-text');

let currentFilter = 'all';
let expanded = false;

// Items correspondant au filtre courant, en ignorant ceux masqués en dur (ex. projet 7)
function getMatchingItems(filter) {
  return [...projectItems].filter(item => {
    if (item.style.display === 'none') return false;
    const categories = (item.getAttribute('data-category') || '').trim();
    return filter === 'all' || categories.split(/\s+/).includes(filter);
  });
}

function updateShowMoreLabel() {
  if (!showMoreText) return;
  const lang = window.i18nLang === 'en' ? 'en' : 'fr';
  const table = (window.i18nDict && window.i18nDict[lang]) || {};
  showMoreText.textContent = expanded
    ? (table['projects.showLess'] || 'Voir moins')
    : (table['projects.showMore'] || 'Voir plus');
}

// Replie les projets au-delà de la limite et pilote l'affichage du bouton.
// Le "Voir plus" n'existe que dans la catégorie "Tous".
function applyShowMore() {
  const matching = getMatchingItems(currentFilter);
  const hasOverflow = currentFilter === 'all' && matching.length > INITIAL_COUNT;
  const clampNow = hasOverflow && !expanded;

  matching.forEach((item, i) => {
    item.classList.toggle('is-clamped', clampNow && i >= INITIAL_COUNT);
  });

  if (showMoreBtn) {
    showMoreBtn.classList.toggle('is-hidden', !hasOverflow);
    showMoreBtn.setAttribute('aria-expanded', String(expanded));
    updateShowMoreLabel();
  }
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    currentFilter = button.getAttribute('data-filter');
    expanded = false; // on repart d'une liste repliée à chaque changement de filtre

    projectItems.forEach(item => {
      const categories = (item.getAttribute('data-category') || '').trim();

      if (currentFilter === 'all' || categories.split(/\s+/).includes(currentFilter)) {
        // Remettre visible — le scroll-reveal gère opacity/transform
        item.classList.remove('hide');
      } else {
        // Masquer visuellement ; ne pas retirer .show (l'état reveal est permanent)
        item.classList.add('hide');
      }
    });

    applyShowMore();
  });
});

if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    expanded = !expanded;
    applyShowMore();
    // En repliant, on ramène l'utilisateur en haut de la section pour ne pas
    // le laisser flotter loin sous des cartes qui viennent de disparaître.
    if (!expanded) {
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Réétiquette le bouton si la langue change
window.addEventListener('languagechange', updateShowMoreLabel);

// État initial : catégorie "Tous" repliée à INITIAL_COUNT projets
applyShowMore();


// ============================================
// MODAL POPUP
// ============================================

const modal = document.getElementById('projectModal');

if (modal) {
  const modalBody = modal.querySelector('.modal-body');
  const modalClose = modal.querySelector('.modal-close');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const projectButtons = document.querySelectorAll('.project-btn');

  let currentProjectId = null;
  let modalReturnFocus = null; // élément à refocaliser à la fermeture (a11y dialog)

  const escapeHTML = (str) => String(str).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  function renderModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const lang = window.i18nLang === 'en' ? 'en' : 'fr';
    const data = project[lang] || project.fr;

    const imageAlt = lang === 'en' ? `Project preview: ${data.title}` : `Aperçu du projet : ${data.title}`;
    const zoomLabel = ((window.i18nDict && window.i18nDict[lang]) || {})['viewer.zoom']
      || (lang === 'en' ? 'Enlarge' : 'Agrandir');

    // La vignette n'est agrandissable que si l'image EST le livrable, ce que
    // signale déjà un lien `image: true`. Ailleurs (couverture de vidéo, de PDF
    // ou de site en ligne) elle reste une simple image : le lien du projet est
    // la vraie action, et l'agrandir n'apporterait rien.
    const zoomable = data.links.some(link => link.image);

    const thumbnail = zoomable
      ? `<button type="button" class="modal-image" data-image="${escapeHTML(encodeURI(project.image))}" data-image-alt="${escapeHTML(imageAlt)}" aria-label="${escapeHTML(zoomLabel)} : ${escapeHTML(data.title)}">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(imageAlt)}">
          <span class="modal-image-zoom" aria-hidden="true">
            <svg class="icon" aria-hidden="true"><use href="#i-bx-image"></use></svg>
            ${escapeHTML(zoomLabel)}
          </span>
        </button>`
      : `<div class="modal-image">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(imageAlt)}">
        </div>`;

    modalBody.innerHTML = `
      <div class="modal-header">
        <h2>${escapeHTML(data.title)}</h2>
        <div class="modal-tags">
          ${data.tags.map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`).join('')}
        </div>
      </div>

      ${thumbnail}

      <div class="modal-description">
        <p>${escapeHTML(data.description)}</p>
      </div>

      <div class="modal-details">
        ${Object.entries(data.details).map(([key, value]) => `
          <div class="detail-item">
            <h4>${escapeHTML(key.charAt(0).toUpperCase() + key.slice(1))}</h4>
            <p>${escapeHTML(value)}</p>
          </div>
        `).join('')}
      </div>

      <div class="modal-links">
        ${data.links.map(link => {
          const inner = `<svg class="icon" aria-hidden="true"><use href="#i-${escapeHTML(link.icon)}"></use></svg>
            <span>${escapeHTML(link.text)}</span>`;
          // link.preview → visualiseur PDF intégré ; link.image → visionneuse d'image
          if (link.image) {
            return `<button type="button" class="modal-link" data-image="${escapeHTML(encodeURI(link.url))}" data-image-alt="${escapeHTML(imageAlt)}">${inner}</button>`;
          }
          return link.preview
            ? `<button type="button" class="modal-link" data-pdf="${escapeHTML(encodeURI(link.url))}" data-pdf-title="${escapeHTML(data.title)}">${inner}</button>`
            : `<a href="${escapeHTML(link.url)}" class="modal-link" target="_blank" rel="noopener noreferrer">${inner}</a>`;
        }).join('')}
      </div>
    `;
  }

  // Verrou de scroll : on fige le body en position fixed en mémorisant
  // la position courante (fiable sur iOS Safari, contrairement à overflow:hidden).
  let savedScrollY = 0;

  function lockScroll() {
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
  }

  function unlockScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    // Restauration instantanée : on neutralise temporairement le scroll-behavior
    // smooth du <html>, sinon le retour s'anime depuis le haut de page.
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, savedScrollY);
    html.style.scrollBehavior = prevBehavior;
  }

  // Ouvrir le modal
  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project');
      if (!projectsData[projectId]) return;

      currentProjectId = projectId;
      modalReturnFocus = button; // pour rendre le focus à la fermeture
      renderModal(projectId);
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      lockScroll();
      modalClose?.focus(); // déplace le focus dans le dialog
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    unlockScroll();
    currentProjectId = null;
    // Rend le focus à la carte projet qui a ouvert le modal
    if (modalReturnFocus) { modalReturnFocus.focus(); modalReturnFocus = null; }
  }

  // Piège de focus : maintient la tabulation à l'intérieur du dialog ouvert
  modal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !modal.classList.contains('active')) return;
    const focusables = modal.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), iframe'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    // Si le visualiseur PDF est ouvert par-dessus, Échap le ferme lui d'abord
    // (géré plus bas) — on ne ferme pas le modal tant qu'il est actif.
    const viewerOpen = document.getElementById('pdfViewer')?.classList.contains('active')
      || document.getElementById('imageViewer')?.classList.contains('active');
    if (e.key === 'Escape' && modal.classList.contains('active') && !viewerOpen) {
      closeModal();
    }
  });

  // Re-traduit le contenu du modal si la langue change pendant qu'il est ouvert
  window.addEventListener('languagechange', () => {
    if (currentProjectId && modal.classList.contains('active')) {
      renderModal(currentProjectId);
    }
  });
}


// ============================================
// VISUALISEUR PDF EN FENÊTRE FLOTTANTE
// Ouvert depuis tout élément [data-pdf] (boutons "preview" du modal, bouton CV…).
// ============================================

const pdfViewer = document.getElementById('pdfViewer');

if (pdfViewer) {
  const pdfFrame = pdfViewer.querySelector('.pdf-viewer-frame');
  const pdfBack = pdfViewer.querySelector('.pdf-back');
  const pdfOpen = pdfViewer.querySelector('.pdf-open');

  // Mémorise l'élément à refocaliser à la fermeture (accessibilité dialog)
  let pdfReturnFocus = null;

  // Verrou de scroll autonome : le visualiseur peut être ouvert sans modal
  // (bouton CV). On ne pose le verrou que si le body n'est pas déjà figé par
  // le modal projet, et on ne le retire alors que si c'est nous qui l'avons mis.
  let pdfLockedByUs = false;
  let pdfSavedScrollY = 0;

  function lockPdfScroll() {
    if (document.body.style.position === 'fixed') return; // déjà verrouillé par le modal
    pdfSavedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${pdfSavedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    pdfLockedByUs = true;
  }

  function unlockPdfScroll() {
    if (!pdfLockedByUs) return;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, pdfSavedScrollY);
    html.style.scrollBehavior = prev;
    pdfLockedByUs = false;
  }

  function openPdfViewer(url, title, trigger) {
    if (!url) return;
    lockPdfScroll();
    // #view=FitH : ajuste la largeur de la page à la zone d'affichage
    pdfFrame.src = `${url}#view=FitH`;
    // Lien "Ouvrir" : visionnage natif plein écran (fiable sur mobile, où les
    // iframes PDF s'affichent mal). On vise l'URL brute, sans le fragment.
    if (pdfOpen) pdfOpen.href = url;
    if (title) pdfFrame.title = title;
    pdfReturnFocus = trigger || null;
    pdfViewer.classList.add('active');
    pdfViewer.setAttribute('aria-hidden', 'false');
    pdfBack?.focus(); // déplace le focus dans le dialog
  }

  function closePdfViewer() {
    pdfViewer.classList.remove('active');
    pdfViewer.setAttribute('aria-hidden', 'true');
    pdfFrame.src = ''; // stoppe le rendu du PDF en arrière-plan
    unlockPdfScroll();
    // Rend le focus à l'élément déclencheur (bouton CV, lien du modal…)
    if (pdfReturnFocus) { pdfReturnFocus.focus(); pdfReturnFocus = null; }
  }

  // Sur mobile, le visualiseur PDF en iframe s'affiche mal : on ouvre alors le
  // PDF directement dans le visionneur natif (nouvel onglet) plutôt que la fenêtre flottante.
  const isMobilePdf = () => window.matchMedia('(max-width: 768px)').matches;

  // Délégation : déclenché par tout élément [data-pdf] (les liens "preview" du
  // modal sont régénérés à chaque ouverture, d'où la délégation au document).
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-pdf]');
    if (!trigger) return;
    e.preventDefault();
    const url = trigger.getAttribute('data-pdf');
    if (isMobilePdf()) {
      if (url) window.open(url, '_blank', 'noopener');
      return;
    }
    openPdfViewer(url, trigger.getAttribute('data-pdf-title'), trigger);
  });

  pdfBack?.addEventListener('click', closePdfViewer);
  pdfViewer.querySelector('.pdf-viewer-overlay')?.addEventListener('click', closePdfViewer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfViewer.classList.contains('active')) {
      closePdfViewer();
    }
  });
}


// ============================================
// VISUALISEUR D'IMAGE EN FENÊTRE FLOTTANTE
// Ouvert depuis tout élément [data-image] (vignette du modal projet…).
// Même mécanique que le visualiseur PDF, sans repli mobile : une image
// s'affiche correctement dans la fenêtre, contrairement à une iframe PDF.
// ============================================

const imageViewer = document.getElementById('imageViewer');

if (imageViewer) {
  const imageEl = imageViewer.querySelector('.image-viewer-img');
  const imageBack = imageViewer.querySelector('.image-back');
  const imageOpen = imageViewer.querySelector('.image-open');

  let imageReturnFocus = null;

  // Verrou de scroll autonome : la visionneuse s'ouvre presque toujours
  // par-dessus le modal projet (body déjà figé) — on ne pose alors rien.
  let imageLockedByUs = false;
  let imageSavedScrollY = 0;

  function lockImageScroll() {
    if (document.body.style.position === 'fixed') return;
    imageSavedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${imageSavedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    imageLockedByUs = true;
  }

  function unlockImageScroll() {
    if (!imageLockedByUs) return;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, imageSavedScrollY);
    html.style.scrollBehavior = prev;
    imageLockedByUs = false;
  }

  function openImageViewer(url, alt, trigger) {
    if (!url) return;
    lockImageScroll();
    imageEl.src = url;
    imageEl.alt = alt || '';
    if (imageOpen) imageOpen.href = url;
    imageReturnFocus = trigger || null;
    imageViewer.classList.add('active');
    imageViewer.setAttribute('aria-hidden', 'false');
    imageBack?.focus();
  }

  function closeImageViewer() {
    imageViewer.classList.remove('active');
    imageViewer.setAttribute('aria-hidden', 'true');
    // removeAttribute plutôt que src='' : une src vide fait re-télécharger la page
    imageEl.removeAttribute('src');
    imageEl.alt = '';
    unlockImageScroll();
    if (imageReturnFocus) { imageReturnFocus.focus(); imageReturnFocus = null; }
  }

  // Délégation : la vignette du modal est régénérée à chaque ouverture
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-image]');
    if (!trigger) return;
    e.preventDefault();
    openImageViewer(
      trigger.getAttribute('data-image'),
      trigger.getAttribute('data-image-alt'),
      trigger
    );
  });

  imageBack?.addEventListener('click', closeImageViewer);
  imageViewer.querySelector('.image-viewer-overlay')?.addEventListener('click', closeImageViewer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageViewer.classList.contains('active')) {
      closeImageViewer();
    }
  });
}
