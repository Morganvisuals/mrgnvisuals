// ============================================
// DONNÉES DES PROJETS (bilingue FR / EN)
// Structure : { image, fr: {...}, en: {...} }
// ============================================

const projectsData = {
  1: {
    image: "image/cyparis.jpg",
    fr: {
      title: "Documentaire Cyparis",
      tags: ["Vidéo", "Scolaire"],
      description: "Dans ce projet, j'ai eu pour but de créer un documentaire sur Cyparis en animation 2D. Pour cela, j'ai utilisé plusieurs outils comme Artlist.IA pour la génération d'images, After Effects pour l'animation et FL Studio pour le sound design.",
      details: {
        "type de projet": "Documentaire animé",
        date: "2026",
        role: "Motion Designer, Monteur, Sound Designer",
        outils: "After Effects, FL Studio, Artlist.IA",
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
        tools: "After Effects, FL Studio, Artlist.AI",
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
      tags: ["Stratégie", "Scolaire"],
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
      tags: ["Design", "Scolaire"],
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
      tags: ["Web", "Scolaire"],
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
        outils: "After Effects"
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
        tools: "After Effects"
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
        outils: "Premiere Pro"
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
        tools: "Premiere Pro"
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
        outils: "After Effects"
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
        tools: "After Effects"
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
        outils: "After Effects"
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
        tools: "After Effects"
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
        outils: "Wordpress Elementor, Figma"
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
        tools: "Wordpress Elementor, Figma"
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
        outils: "HTML, CSS, JavaScript, Claude Code"
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
        tools: "HTML, CSS, JavaScript, Claude Code"
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
        outils: "Premiere Pro"
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
        tools: "Premiere Pro"
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
        outils: "After Effects, Premiere Pro"
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
        tools: "After Effects, Premiere Pro"
      },
      links: [{ url: "https://www.youtube.com/watch?v=GlWtgka-Hqs&list=RDGlWtgka-Hqs&start_radio=1", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  14: {
    image: "image/Businessprocessmanagement.jpg",
    fr: {
      title: "Business Process Management",
      tags: ["Stratégie", "Scolaire"],
      description: "Dans ce projet, j'ai appris à structurer les processus pour transformer le chaos créatif en performance durable. Nous avons analysé et identifié les meilleures façons d'optimiser l'organisation d'une entreprise à travers un cas pratique.",
      details: {
        "type de projet": "Gestion de processus (Scolaire)",
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
      tags: ["Vidéo", "Scolaire"],
      description: "Dans ce projet, j'ai réalisé des réels Instagram pour Le média BLOK. L'objectif était de créer des contenus vidéo courts et engageants.",
      details: {
        "type de projet": "Réels Instagram (Scolaire)",
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
      tags: ["Gestion de projet", "Stratégie", "Scolaire"],
      description: "Dans le cadre de ce projet, mon groupe et moi avons créé une marque nommée « Flora Beauty » et développé l'ensemble de sa stratégie entrepreneuriale : étude de marché, positionnement, identité visuelle, plan de communication et stratégie commerciale.",
      details: {
        "type de projet": "Projet entrepreneurial (Scolaire)",
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
      tags: ["Gestion de projet", "Stratégie", "Scolaire"],
      description: "Dans le cadre de ce projet, j'ai contribué avec mon groupe à la création d'une entreprise fictive de mobilité en Guadeloupe. Nous avons développé le modèle économique, la stratégie de communication et la gestion du projet.",
      details: {
        "type de projet": "Projet entrepreneurial (Scolaire)",
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
      description: "For this project, I contributed with my team to the creation of a fictional mobility company in Guadeloupe. We developed the business model, communication strategy and project management.",
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
      tags: ["Stratégie", "Scolaire"],
      description: "Dans ce projet, j'ai appris avec mon groupe les principes de la gestion lean et leur application dans un contexte professionnel. Nous avons étudié les méthodes d'élimination des gaspillages et d'amélioration continue pour optimiser les flux de production.",
      details: {
        "type de projet": "Gestion & Stratégie (Scolaire)",
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
        outils: "Premiere Pro"
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
        tools: "Premiere Pro"
      },
      links: [{ url: "https://www.instagram.com/p/DYX3P0uN951/", text: "Watch the video", icon: "bx-play-circle" }]
    }
  },
  20: {
    image: "image/premier-site-web.jpg",
    fr: {
      title: "Mon premier portfolio en HTML/CSS",
      tags: ["Web", "Scolaire"],
      description: "Dans ce projet, j'ai créé mon premier portfolio en utilisant HTML et CSS. Ce premier site m'a permis de poser les bases du développement web et de découvrir la structure d'une page HTML, les sélecteurs CSS et la mise en page responsive.",
      details: {
        "type de projet": "Site web (Scolaire)",
        date: "2024",
        role: "Développeur Front-End",
        outils: "HTML, CSS, JavaScript",
        "U.E": "Développer, Concevoir"
      },
      links: [{ url: "https://morganvisuals.vercel.app/", text: "Voir le projet", icon: "bx-code-alt" }]
    },
    en: {
      title: "My first HTML/CSS portfolio",
      tags: ["Web", "Academic"],
      description: "For this project, I built my first portfolio using HTML and CSS. This first site allowed me to lay the foundations of web development and discover HTML page structure, CSS selectors and responsive layout.",
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
      tags: ["Web", "Scolaire"],
      description: "DOM-COM est un site web que j'ai réalisé en première année de BUT MMI. Il présente trois territoires français d'outre-mer — la Martinique, la Guadeloupe et la Guyane — sous forme de portail informatif, avec une page dédiée à chaque destination. Ce projet m'a permis de poser mes premières bases en intégration HTML/CSS et en structuration d'un site multi-pages.",
      details: {
        "type de projet": "Site web (Scolaire)",
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
      description: "DOM-COM is a website I built during my first year of BUT MMI. It showcases three French overseas territories — Martinique, Guadeloupe and French Guiana — as an informative portal, with a dedicated page for each destination. This project gave me my first hands-on experience with HTML/CSS integration and structuring a multi-page site.",
      details: {
        "project type": "Website (Academic)",
        date: "2023",
        role: "Web Designer & Front-End Developer",
        tools: "HTML, CSS",
        "U.E": "Design, Develop"
      },
      links: [{ url: "https://domcom.vercel.app/index.html", text: "View the website", icon: "bx-code-alt" }]
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

    modalBody.innerHTML = `
      <div class="modal-header">
        <h2>${escapeHTML(data.title)}</h2>
        <div class="modal-tags">
          ${data.tags.map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`).join('')}
        </div>
      </div>

      <div class="modal-image">
        <img src="${escapeHTML(project.image)}" alt="${escapeHTML(lang === 'en' ? `Project preview: ${data.title}` : `Aperçu du projet : ${data.title}`)}">
      </div>

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
          // link.preview → ouvre le PDF dans le visualiseur intégré au site
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
    const viewerOpen = document.getElementById('pdfViewer')?.classList.contains('active');
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

  // Délégation : déclenché par tout élément [data-pdf] (les liens "preview" du
  // modal sont régénérés à chaque ouverture, d'où la délégation au document).
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-pdf]');
    if (!trigger) return;
    e.preventDefault();
    openPdfViewer(trigger.getAttribute('data-pdf'), trigger.getAttribute('data-pdf-title'), trigger);
  });

  pdfBack?.addEventListener('click', closePdfViewer);
  pdfViewer.querySelector('.pdf-viewer-overlay')?.addEventListener('click', closePdfViewer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdfViewer.classList.contains('active')) {
      closePdfViewer();
    }
  });
}
