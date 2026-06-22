/* ============================================
   SYSTÈME DE TRADUCTION FR / EN
   - Les éléments traduits portent un attribut data-i18n="cle"
   - Placeholders : data-i18n-placeholder="cle"
   - Attribut aria-label : data-i18n-aria="cle"
   - Les valeurs du dictionnaire peuvent contenir du HTML (spans, liens)
   ============================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'lang';
  const SUPPORTED = ['fr', 'en'];
  const DEFAULT_LANG = 'fr';

  const dict = {
    fr: {
      // --- Méta ---
      'meta.title': "Morgan Visual's — Motion Designer, Monteur vidéo & Développeur Front-End",
      'meta.titleLegal': "Mentions Légales - Morgan Visual's",
      'meta.titleCgu': "Conditions Générales d'Utilisation - Morgan Visual's",

      // --- Navigation ---
      'nav.home': "Accueil",
      'nav.about': "À propos",
      'nav.skills': "Compétences",
      'nav.projects': "Projets",
      'nav.contact': "Contact",
      'header.education': "Ma Formation",
      'aria.theme': "Changer de mode",
      'aria.lang': "Changer de langue",
      'aria.menu': "Ouvrir le menu de navigation",
      'aria.skip': "Aller au contenu principal",
      'skip.link': "Aller au contenu",

      // --- Accueil ---
      'home.greeting': "Je transforme les idées en créations visuelles, entre design, mouvement et émotion.",
      'home.cv': "CV",
      'home.contactBtn': "Contact",

      // --- À propos ---
      'about.heading': "À <span>Propos</span>",
      'about.text': "Je suis Marie-Joseph Morgan, jeune artiste visuel polyvalent sous le nom de \"Morgan Visual's\". Je suis principalement spécialisé dans le motion/graphic design, le montage vidéo et le Développement web front-end.",

      // --- Compétences ---
      'skills.heading': "Mes <span>Compétences</span>",
      'skills.web': "Web",
      'skills.design': "Design",
      'skills.video': "Vidéo",
      'skills.ai': "IA",

      // --- Projets ---
      'projects.heading': "Mes <span>Projets</span>",
      'filter.all': "Tous",
      'filter.video': "Vidéo",
      'filter.web': "Web",
      'filter.design': "Design",
      'filter.management': "Gestion de projet",
      'filter.strategy': "Stratégie & Com",
      'filter.school': "Scolaire",
      'filter.company': "Entreprise",
      'filter.personal': "Personnel",

      // Tags partagés des cartes projet
      'tag.video': "Vidéo",
      'tag.school': "Scolaire",
      'tag.design': "Design",
      'tag.personal': "Personnel",
      'tag.management': "Gestion de projet",
      'tag.strategy': "Stratégie",
      'tag.web': "Web",
      'tag.company': "Entreprise",

      // Boutons des cartes
      'card.view': "Voir le projet",
      'card.viewSite': "Voir le site web",

      // Bouton "Voir plus" de la grille
      'projects.showMore': "Voir plus",
      'projects.showLess': "Voir moins",

      // Visualiseur PDF
      'viewer.back': "Retour",
      'viewer.open': "Ouvrir",

      // Cartes projet (grille)
      'pcard.1.title': "Documentaire Cyparis",
      'pcard.1.desc': "Dans ce projet, j'ai eu pour but de créer un documentaire sur Cyparis en animation 2D.",
      'pcard.2.title': "Press Kit DJ",
      'pcard.2.desc': "Dossier de presse conçu en tant que DJ pour mettre en valeur mes compétences et statistiques.",
      'pcard.3.title': "Stratégie CoArt",
      'pcard.3.desc': "Stratégie de communication pour un projet créé en cours.",
      'pcard.4.title': "Charte graphique \"DASH\"",
      'pcard.4.desc': "Charte graphique pour une plateforme de streaming avec des couleurs jaune et noir.",
      'pcard.5.title': "Portfolio Personnel",
      'pcard.5.desc': "Portfolio développé en HTML, CSS et JavaScript mettant en avant mes projets et compétences.",
      'pcard.6.title': "Apple iPhone Air",
      'pcard.6.desc': "Animation d'un iPhone Air.",
      'pcard.7.title': "Vidéos instagram pour Koroko",
      'pcard.7.desc': "J'ai réalisé en entreprise plusieurs réels pour mettre en avant l'agence de voyage Koroko.",
      'pcard.8.title': "Vidéo 18 coutures",
      'pcard.8.desc': "Animation 3D pour la marque \"18 coutures\".",
      'pcard.9.title': "Clip vidéo Krys",
      'pcard.9.desc': "Dans ce projet, j'ai été amené à être le VFX de ce clip vidéo.",
      'pcard.10.title': "Site web Exterria",
      'pcard.10.desc': "Dans ce projet, j'ai été amené à être le webdesigner et le concepteur de ce site web.",
      'pcard.22.title': "Maquette Photolux",
      'pcard.22.desc': "Maquette du site d'un studio photo en Guadeloupe, conçue sur Adobe XD en entreprise.",
      'pcard.23.title': "Maquette Maison & Paysage",
      'pcard.23.desc': "Maquette du site d'un constructeur de maisons sur mesure en Guadeloupe, conçue sur Adobe XD en entreprise.",

      // --- Contact ---
      'contact.heading': "Contactez-<span>Moi</span>",
      'contact.infoTitle': "Parlons de votre projet !",
      'contact.infoText': "N'hésitez pas à me contacter pour toute opportunité de collaboration ou simplement pour échanger.",
      'contact.email': "Email",
      'contact.phone': "Téléphone",
      'contact.location': "Localisation",
      'contact.locationValue': "Martinique",
      'ph.name': "Nom complet",
      'ph.email': "Email",
      'ph.subject': "Sujet",
      'ph.message': "Votre Message",
      'contact.send': "Envoyer",
      'contact.thanks': "Merci ! Votre message a été envoyé avec succès. 😊",

      // --- Pied de page ---
      'footer.copyright': "© Morgan Visual's | Tous droits réservés | <a class=\"mention\" href=\"mentions-legales.html\">Mentions Légales</a> | <a class=\"mention\" href=\"cgu.html\">CGU</a>",

      // --- Mentions légales ---
      'legal.heading': "Mentions <span>Légales</span>",
      'legal.s1.title': "Éditeur du site",
      'legal.s1.name': "<strong>Nom :</strong> Marie-Joseph Morgan",
      'legal.s1.trade': "<strong>Nom commercial :</strong> Morgan Visual's",
      'legal.s1.status': "<strong>Statut :</strong> Portfolio personnel",
      'legal.s1.email': "<strong>Email :</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s2.title': "Hébergement",
      'legal.s2.host': "<strong>Hébergeur :</strong> o2switch",
      'legal.s2.address': "<strong>Adresse :</strong> 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France",
      'legal.s2.web': "<strong>Site web :</strong> <a href=\"https://www.o2switch.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">o2switch.fr</a>",
      'legal.s3.title': "Propriété intellectuelle",
      'legal.s3.p1': "L'ensemble du contenu de ce site (textes, images, vidéos, logos, animations) est la propriété exclusive de Morgan Visual's, sauf mention contraire.",
      'legal.s3.p2': "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur.",
      'legal.s3.p3': "Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.",
      'legal.s4.title': "Protection des données personnelles",
      'legal.s4.p1': "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.",
      'legal.s4.p2': "Les informations recueillies via le formulaire de contact sont destinées exclusivement à Morgan Visual's et ne seront en aucun cas cédées à des tiers.",
      'legal.s4.p3': "Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s5.title': "Cookies",
      'legal.s5.p1': "Ce site n'utilise pas de cookies de suivi ou de cookies publicitaires.",
      'legal.s5.p2': "Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.",
      'legal.s6.title': "Liens hypertextes",
      'legal.s6.p1': "Le site peut contenir des liens vers d'autres sites internet. Morgan Visual's n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
      'legal.s6.p2': "Les liens présents sur ce site renvoient notamment vers :",
      'legal.s7.title': "Responsabilité",
      'legal.s7.p1': "Morgan Visual's s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.",
      'legal.s7.p2': "Toutefois, Morgan Visual's ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.",
      'legal.s7.p3': "En conséquence, Morgan Visual's décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.",
      'legal.s8.title': "Crédits",
      'legal.s8.p1': "<strong>Conception et développement :</strong> Morgan Visual's",
      'legal.s8.p2': "<strong>Technologies utilisées :</strong>",
      'legal.s9.title': "Contact",
      'legal.s9.p1': "Pour toute question concernant ces mentions légales, vous pouvez me contacter :",
      'legal.s9.email': "<strong>Email :</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s9.form': "<strong>Via le formulaire de contact :</strong> <a href=\"index.html#contact\">Accéder au formulaire</a>",
      'legal.updated': "<strong>Dernière mise à jour :</strong> Juin 2026",
      'legal.backHome': "Retour à l'accueil",

      // --- Conditions Générales d'Utilisation ---
      'cgu.heading': "Conditions Générales <span>d'Utilisation</span>",
      'cgu.s1.title': "Objet",
      'cgu.s1.p1': "Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'accès et d'utilisation du site Morgan Visual's, accessible à l'adresse de ce portfolio.",
      'cgu.s1.p2': "Ce site est un portfolio personnel présentant les travaux et services de Morgan Visual's en motion design, montage vidéo et développement front-end.",
      'cgu.s2.title': "Acceptation des conditions",
      'cgu.s2.p1': "L'accès et l'utilisation du site impliquent l'acceptation pleine et entière des présentes CGU par l'utilisateur.",
      'cgu.s2.p2': "Si vous n'acceptez pas tout ou partie de ces conditions, vous êtes invité à ne pas utiliser le site.",
      'cgu.s3.title': "Accès au site",
      'cgu.s3.p1': "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Tous les frais nécessaires à l'accès au site (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.",
      'cgu.s3.p2': "Morgan Visual's s'efforce de maintenir le site accessible en permanence, mais ne peut être tenu responsable en cas d'indisponibilité, notamment pour des raisons de maintenance, de mise à jour ou de cas de force majeure.",
      'cgu.s4.title': "Propriété intellectuelle",
      'cgu.s4.p1': "L'ensemble des éléments présents sur ce site (textes, images, vidéos, logos, animations, code) est la propriété exclusive de Morgan Visual's, sauf mention contraire, et est protégé par le droit de la propriété intellectuelle.",
      'cgu.s4.p2': "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable, est interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.",
      'cgu.s5.title': "Utilisation et responsabilité",
      'cgu.s5.p1': "L'utilisateur s'engage à utiliser le site conformément à sa destination et à ne pas porter atteinte à son bon fonctionnement, à sa sécurité ou à son intégrité.",
      'cgu.s5.p2': "Morgan Visual's ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données ou la présence de virus.",
      'cgu.s6.title': "Liens hypertextes",
      'cgu.s6.p1': "Le site peut contenir des liens vers des sites tiers. Morgan Visual's n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de confidentialité.",
      'cgu.s7.title': "Données personnelles",
      'cgu.s7.p1': "Les données personnelles éventuellement collectées via le formulaire de contact sont traitées dans le respect du RGPD. Pour plus de détails, consultez les <a href=\"mentions-legales.html\">mentions légales</a>.",
      'cgu.s8.title': "Modification des CGU",
      'cgu.s8.p1': "Morgan Visual's se réserve le droit de modifier les présentes CGU à tout moment et sans préavis. Les CGU applicables sont celles en vigueur au moment de la consultation du site.",
      'cgu.s9.title': "Droit applicable",
      'cgu.s9.p1': "Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
      'cgu.s10.title': "Contact",
      'cgu.s10.p1': "Pour toute question concernant ces conditions générales d'utilisation, vous pouvez me contacter :",
      'cgu.s10.email': "<strong>Email :</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'cgu.updated': "<strong>Dernière mise à jour :</strong> Juin 2026",
      'cgu.backHome': "Retour à l'accueil"
    },

    en: {
      // --- Meta ---
      'meta.title': "Morgan Visual's — Motion Designer, Video Editor & Front-End Developer",
      'meta.titleLegal': "Legal Notice - Morgan Visual's",
      'meta.titleCgu': "Terms of Use - Morgan Visual's",

      // --- Navigation ---
      'nav.home': "Home",
      'nav.about': "About",
      'nav.skills': "Skills",
      'nav.projects': "Projects",
      'nav.contact': "Contact",
      'header.education': "My Education",
      'aria.theme': "Toggle theme",
      'aria.lang': "Change language",
      'aria.menu': "Open navigation menu",
      'aria.skip': "Skip to main content",
      'skip.link': "Skip to content",

      // --- Home ---
      'home.greeting': "I bring ideas to life through visual creations that blend design, motion, and emotion.",
      'home.cv': "Resume",
      'home.contactBtn': "Contact",

      // --- About ---
      'about.heading': "<span>About</span> Me",
      'about.text': "I'm Marie-Joseph Morgan, a young versatile visual artist working under the name \"Morgan Visual's\". I mainly specialise in motion/graphic design, video editing and front-end web development.",

      // --- Skills ---
      'skills.heading': "My <span>Skills</span>",
      'skills.web': "Web",
      'skills.design': "Design",
      'skills.video': "Video",
      'skills.ai': "AI",

      // --- Projects ---
      'projects.heading': "My <span>Projects</span>",
      'filter.all': "All",
      'filter.video': "Video",
      'filter.web': "Web",
      'filter.design': "Design",
      'filter.management': "Project management",
      'filter.strategy': "Strategy & Comm",
      'filter.school': "Academic",
      'filter.company': "Company",
      'filter.personal': "Personal",

      // Shared project tags
      'tag.video': "Video",
      'tag.school': "Academic",
      'tag.design': "Design",
      'tag.personal': "Personal",
      'tag.management': "Project Management",
      'tag.strategy': "Strategy",
      'tag.web': "Web",
      'tag.company': "Company",

      // Card buttons
      'card.view': "View project",
      'card.viewSite': "View website",

      // Grid "Show more" button
      'projects.showMore': "See more",
      'projects.showLess': "See less",

      // PDF viewer
      'viewer.back': "Back",
      'viewer.open': "Open",

      // Project cards (grid)
      'pcard.1.title': "Cyparis Documentary",
      'pcard.1.desc': "For this project, my goal was to create a documentary about Cyparis using 2D animation.",
      'pcard.2.title': "DJ Press Kit",
      'pcard.2.desc': "Press kit designed as a DJ to showcase my skills and statistics.",
      'pcard.3.title': "CoArt Strategy",
      'pcard.3.desc': "Communication strategy for a project created in class.",
      'pcard.4.title': "\"DASH\" Brand Guidelines",
      'pcard.4.desc': "Brand guidelines for a streaming platform with yellow and black colors.",
      'pcard.5.title': "Personal Portfolio",
      'pcard.5.desc': "Portfolio built with HTML, CSS and JavaScript showcasing my projects and skills.",
      'pcard.6.title': "Apple iPhone Air",
      'pcard.6.desc': "Animation of an iPhone Air.",
      'pcard.7.title': "Instagram videos for Koroko",
      'pcard.7.desc': "I created several reels in-company to promote the travel agency Koroko.",
      'pcard.8.title': "18 coutures Video",
      'pcard.8.desc': "3D animation for the brand \"18 coutures\".",
      'pcard.9.title': "Krys Music Video",
      'pcard.9.desc': "For this project, I worked as the VFX artist on this music video.",
      'pcard.10.title': "Exterria Website",
      'pcard.10.desc': "For this project, I was the web designer and creator of this website.",
      'pcard.22.title': "Photolux Mockup",
      'pcard.22.desc': "Website mockup for a photo studio in Guadeloupe, designed on Adobe XD in-company.",
      'pcard.23.title': "Maison & Paysage Mockup",
      'pcard.23.desc': "Website mockup for a custom home builder in Guadeloupe, designed on Adobe XD in-company.",

      // --- Contact ---
      'contact.heading': "Get in <span>Touch</span>",
      'contact.infoTitle': "Let's talk about your project!",
      'contact.infoText': "Feel free to contact me for any collaboration opportunity or simply to get in touch.",
      'contact.email': "Email",
      'contact.phone': "Phone",
      'contact.location': "Location",
      'contact.locationValue': "Martinique",
      'ph.name': "Full name",
      'ph.email': "Email",
      'ph.subject': "Subject",
      'ph.message': "Your message",
      'contact.send': "Send",
      'contact.thanks': "Thank you! Your message has been sent successfully. 😊",

      // --- Footer ---
      'footer.copyright': "© Morgan Visual's | All rights reserved | <a class=\"mention\" href=\"mentions-legales.html\">Legal Notice</a> | <a class=\"mention\" href=\"cgu.html\">Terms</a>",

      // --- Legal notice ---
      'legal.heading': "Legal <span>Notice</span>",
      'legal.s1.title': "Website Publisher",
      'legal.s1.name': "<strong>Name:</strong> Marie-Joseph Morgan",
      'legal.s1.trade': "<strong>Trade name:</strong> Morgan Visual's",
      'legal.s1.status': "<strong>Status:</strong> Personal portfolio",
      'legal.s1.email': "<strong>Email:</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s2.title': "Hosting",
      'legal.s2.host': "<strong>Host:</strong> o2switch",
      'legal.s2.address': "<strong>Address:</strong> 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France",
      'legal.s2.web': "<strong>Website:</strong> <a href=\"https://www.o2switch.fr/\" target=\"_blank\" rel=\"noopener noreferrer\">o2switch.fr</a>",
      'legal.s3.title': "Intellectual Property",
      'legal.s3.p1': "All content on this site (text, images, videos, logos, animations) is the exclusive property of Morgan Visual's, unless otherwise stated.",
      'legal.s3.p2': "Any reproduction, representation, modification, publication or adaptation of all or part of the site's elements, by any means or process, is prohibited without the prior written authorisation of the publisher.",
      'legal.s3.p3': "Any unauthorised use of the site or of any of its content will be considered as constituting infringement and prosecuted in accordance with the provisions of articles L.335-2 and following of the French Intellectual Property Code.",
      'legal.s4.title': "Personal Data Protection",
      'legal.s4.p1': "In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the right to access, rectify, delete and object to the personal data concerning you.",
      'legal.s4.p2': "The information collected via the contact form is intended exclusively for Morgan Visual's and will under no circumstances be transferred to third parties.",
      'legal.s4.p3': "To exercise your rights, you can contact us at the following address: <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s5.title': "Cookies",
      'legal.s5.p1': "This site does not use tracking cookies or advertising cookies.",
      'legal.s5.p2': "Only technical cookies strictly necessary for the proper functioning of the site may be used.",
      'legal.s6.title': "Hyperlinks",
      'legal.s6.p1': "The site may contain links to other websites. Morgan Visual's has no control over these sites and disclaims all responsibility for their content.",
      'legal.s6.p2': "The links on this site point notably to:",
      'legal.s7.title': "Liability",
      'legal.s7.p1': "Morgan Visual's strives to ensure the accuracy and updating of the information published on this site.",
      'legal.s7.p2': "However, Morgan Visual's cannot guarantee the accuracy, precision or completeness of the information made available on this site.",
      'legal.s7.p3': "Consequently, Morgan Visual's disclaims all responsibility for any imprecision, inaccuracy or omission regarding information available on this site.",
      'legal.s8.title': "Credits",
      'legal.s8.p1': "<strong>Design and development:</strong> Morgan Visual's",
      'legal.s8.p2': "<strong>Technologies used:</strong>",
      'legal.s9.title': "Contact",
      'legal.s9.p1': "For any question regarding this legal notice, you can contact me:",
      'legal.s9.email': "<strong>Email:</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'legal.s9.form': "<strong>Via the contact form:</strong> <a href=\"index.html#contact\">Go to the form</a>",
      'legal.updated': "<strong>Last updated:</strong> June 2026",
      'legal.backHome': "Back to home",

      // --- Terms of Use ---
      'cgu.heading': "Terms <span>of Use</span>",
      'cgu.s1.title': "Purpose",
      'cgu.s1.p1': "These Terms of Use (ToU) set out the terms and conditions governing access to and use of the Morgan Visual's website, available at this portfolio's address.",
      'cgu.s1.p2': "This site is a personal portfolio presenting the work and services of Morgan Visual's in motion design, video editing and front-end development.",
      'cgu.s2.title': "Acceptance of the terms",
      'cgu.s2.p1': "Accessing and using the site implies the user's full and unreserved acceptance of these Terms of Use.",
      'cgu.s2.p2': "If you do not accept all or part of these terms, you are advised not to use the site.",
      'cgu.s3.title': "Access to the site",
      'cgu.s3.p1': "The site is freely accessible to any user with Internet access. All costs required to access the site (computer hardware, Internet connection, etc.) are the responsibility of the user.",
      'cgu.s3.p2': "Morgan Visual's strives to keep the site accessible at all times but cannot be held liable in the event of unavailability, in particular for maintenance, updates or force majeure.",
      'cgu.s4.title': "Intellectual Property",
      'cgu.s4.p1': "All elements on this site (text, images, videos, logos, animations, code) are the exclusive property of Morgan Visual's, unless otherwise stated, and are protected by intellectual property law.",
      'cgu.s4.p2': "Any reproduction, representation or distribution, in whole or in part, without prior written authorisation, is prohibited and constitutes infringement punishable under the Intellectual Property Code.",
      'cgu.s5.title': "Use and liability",
      'cgu.s5.p1': "The user agrees to use the site in accordance with its intended purpose and not to impair its proper functioning, security or integrity.",
      'cgu.s5.p2': "Morgan Visual's cannot be held liable for any direct or indirect damage resulting from access to or use of the site, including inaccessibility, data loss or the presence of viruses.",
      'cgu.s6.title': "Hyperlinks",
      'cgu.s6.p1': "The site may contain links to third-party sites. Morgan Visual's has no control over these sites and disclaims all responsibility for their content or privacy policies.",
      'cgu.s7.title': "Personal data",
      'cgu.s7.p1': "Any personal data collected via the contact form is processed in compliance with the GDPR. For more details, please see the <a href=\"mentions-legales.html\">legal notice</a>.",
      'cgu.s8.title': "Changes to the Terms",
      'cgu.s8.p1': "Morgan Visual's reserves the right to modify these Terms of Use at any time and without notice. The applicable Terms are those in force at the time the site is accessed.",
      'cgu.s9.title': "Applicable law",
      'cgu.s9.p1': "These Terms of Use are governed by French law. In the event of a dispute, and failing an amicable resolution, the French courts shall have sole jurisdiction.",
      'cgu.s10.title': "Contact",
      'cgu.s10.p1': "For any question regarding these terms of use, you can contact me:",
      'cgu.s10.email': "<strong>Email:</strong> <a href=\"mailto:morgan.rmx@gmail.com\">morgan.rmx@gmail.com</a>",
      'cgu.updated': "<strong>Last updated:</strong> June 2026",
      'cgu.backHome': "Back to home"
    }
  };

  // Expose le dictionnaire pour les autres scripts (ex : projects-modern.js)
  window.i18nDict = dict;

  function getStoredLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : DEFAULT_LANG;
  }

  function translate(lang) {
    const table = dict[lang] || dict[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = table[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = table[el.getAttribute('data-i18n-placeholder')];
      if (v != null) el.setAttribute('placeholder', v);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = table[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });

    // Titre de l'onglet
    const isCgu = !!document.querySelector('.cgu-page');
    const isLegal = !!document.querySelector('.mentions-legales');
    const titleKey = isCgu ? 'meta.titleCgu' : (isLegal ? 'meta.titleLegal' : 'meta.title');
    if (table[titleKey]) document.title = table[titleKey];

    document.documentElement.lang = lang;
  }

  function updateButton(lang) {
    // Met à jour le code affiché sur le bouton (FR / EN)
    const code = document.querySelector('#lang-toggle .lang-code');
    if (code) code.textContent = lang.toUpperCase();
    // Marque l'option active dans le menu
    document.querySelectorAll('.lang-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    window.i18nLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    translate(lang);
    updateButton(lang);
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  function init() {
    const lang = getStoredLang();
    window.i18nLang = lang;
    translate(lang);
    updateButton(lang);

    const select = document.getElementById('lang-select');
    const toggle = document.getElementById('lang-toggle');

    if (select && toggle) {
      const closeMenu = () => {
        select.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      };
      const openMenu = () => {
        select.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      };

      // Ouvre / ferme le menu déroulant
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        select.classList.contains('open') ? closeMenu() : openMenu();
      });

      // Choix d'une langue
      select.querySelectorAll('.lang-item').forEach(item => {
        item.addEventListener('click', () => {
          setLang(item.getAttribute('data-lang'));
          closeMenu();
        });
      });

      // Fermeture au clic extérieur
      document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) closeMenu();
      });

      // Fermeture avec la touche Échap
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
    }

    // Notifie les scripts déjà chargés (ex : modal des projets)
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  }

  // Applique la langue avant le premier rendu visible si possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
