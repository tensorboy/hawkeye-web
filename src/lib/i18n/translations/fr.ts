import type { Translations } from './zh'

export const fr: Translations = {
  // Navigation
  nav: {
    features: 'Fonctionnalités',
    useCases: 'Cas d\'Utilisation',
    platforms: 'Plateformes',
    download: 'Télécharger',
    theme: 'Thème',
  },

  // Hero Section
  hero: {
    badge: 'Assistant IA Sans Prompt',
    title: 'Votre Collègue IA',
    titleHighlight: 'Voit Tout, Anticipe',
    subtitle: 'Aucun prompt nécessaire. Hawkeye comprend votre contexte de travail et suggère des actions proactives.',
    cta: {
      download: 'Télécharger Gratuit',
      github: 'GitHub',
    },
    stats: {
      users: 'Utilisateurs Actifs',
      stars: 'GitHub Stars',
      privacy: '100% Traitement Local',
    },
  },

  // Features Section
  features: {
    title: 'Redéfinir l\'Interaction IA',
    subtitle: 'Plus besoin d\'écrire des prompts. Laissez l\'IA travailler proactivement pour vous.',
    items: {
      sees: {
        title: 'Sees Everything',
        titleZh: 'Perception Multimodale',
        description: 'Écran, presse-papiers, fichiers - conscience complète de votre contexte.',
      },
      thinks: {
        title: 'Thinks Ahead',
        titleZh: 'Raisonnement Proactif',
        description: 'Sans prompt. Comprend automatiquement l\'intention et suggère des actions.',
      },
      private: {
        title: 'Stays Private',
        titleZh: 'Confidentialité d\'Abord',
        description: '100% local. Vos données ne quittent jamais votre appareil. Fonctionne hors ligne.',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: 'Votre Partenaire de Travail Tout-en-Un',
    subtitle: 'Quoi que vous fassiez, Hawkeye comprend et aide.',
    items: {
      diagnosis: {
        title: 'Diagnostic d\'Erreurs',
        description: 'Détecte les erreurs et suggère des solutions.',
      },
      docs: {
        title: 'Organisation Intelligente',
        description: 'Organise automatiquement les téléchargements.',
      },
      clipboard: {
        title: 'Presse-Papiers Amélioré',
        description: 'Comprend le contenu copié et suggère des actions.',
      },
      project: {
        title: 'Suivi de Projet',
        description: 'Surveille les changements et génère des rapports.',
      },
      email: {
        title: 'Assistant Email',
        description: 'Analyse les emails, suggère des réponses.',
      },
      web: {
        title: 'Extraction Web',
        description: 'Identifie les infos clés à sauvegarder.',
      },
    },
    popular: 'Populaire',
  },

  // Platforms Section
  platforms: {
    title: 'Support Multiplateforme',
    subtitle: 'Utilisez Hawkeye sur vos appareils préférés.',
    items: {
      macos: {
        title: 'macOS',
        description: 'App native Swift pour Apple Silicon.',
        status: 'Bientôt',
      },
      windows: {
        title: 'Windows',
        description: 'App native pour Windows 10/11.',
        status: 'En Développement',
      },
      chrome: {
        title: 'Extension Chrome',
        description: 'Extension pour navigation intelligente.',
        status: 'Planifié',
      },
      vscode: {
        title: 'VS Code',
        description: 'Plugin pour la productivité des développeurs.',
        status: 'Planifié',
      },
    },
  },

  // CTA Section
  cta: {
    title: 'Prêt pour l\'IA Sans Prompt ?',
    subtitle: 'Rejoignez des milliers d\'utilisateurs qui boostent leur productivité avec Hawkeye.',
    button: 'Télécharger Gratuit',
    note: 'Sans inscription. Entièrement gratuit.',
  },

  // Footer
  footer: {
    product: 'Produit',
    resources: 'Ressources',
    legal: 'Légal',
    language: 'Langue',
    features: 'Fonctionnalités',
    useCases: 'Cas d\'Utilisation',
    platforms: 'Plateformes',
    changelog: 'Historique',
    documentation: 'Documentation',
    github: 'GitHub',
    privacy: 'Politique de Confidentialité',
    terms: 'Conditions d\'Utilisation',
    copyright: '© {year} Anureka Inc.. MIT License.',
  },

  // Demo Section
  demo: {
    title: 'Voyez Hawkeye en Action',
    subtitle: 'Un aperçu rapide de 2 minutes des fonctionnalités principales de Hawkeye',
    playVideo: 'Jouer la Démo',
    chapters: {
      intro: 'Introduction',
      gesture: 'Démo Gestes',
      features: 'Fonctionnalités',
    },
  },

  // Trust Badges
  trustBadges: {
    noCreditCard: 'Sans Carte Bancaire',
    worksOffline: 'Fonctionne Hors Ligne',
    dataStaysLocal: 'Données Locales',
    openSource: 'Open Source',
  },

  // Stats Section
  stats: {
    efficiency: {
      value: '10x',
      label: 'Gain d\'Efficacité',
      description: 'Par rapport aux flux traditionnels',
    },
    local: {
      value: '100%',
      label: 'Traitement Local',
      description: 'Les données ne quittent jamais votre appareil',
    },
    platforms: {
      value: '3',
      label: 'Plateformes',
      description: 'Bureau / VS Code / Chrome',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'Ce Que Disent les Utilisateurs',
    items: [
      {
        quote: 'Enfin, un assistant IA qui respecte vraiment la vie privée. Toutes les données sont traitées localement, je peux l\'utiliser en confiance au travail.',
        author: 'Michel Dupont',
        role: 'Chef de Produit',
        avatar: 'M',
      },
      {
        quote: 'Hawkeye a complètement transformé mon flux de travail. Il comprend automatiquement ce que je fais et donne des suggestions précises.',
        author: 'Sophie Martin',
        role: 'Freelance',
        avatar: 'S',
      },
      {
        quote: 'En tant que projet open source, la qualité de Hawkeye est impressionnante. Communauté active, mises à jour fréquentes, de plus en plus puissant.',
        author: 'David Bernard',
        role: 'Entrepreneur',
        avatar: 'D',
      },
    ],
  },

  // Privacy Section
  privacy: {
    title: 'Confidentialité d\'Abord, Conception Sécurisée',
    items: {
      localProcessing: 'Toutes les données traitées localement',
      ollamaSupport: 'Support Ollama LLM local',
      optionalCloud: 'IA cloud optionnelle (Claude API)',
      openSource: '100% open source et transparent',
    },
  },

  // Product Demo (mock app window)
  productDemo: {
    windowTitle: 'Hawkeye - Assistant Intelligent',
    chat: 'Chat',
    chatMessage: 'Organise mon dossier téléchargements...',
    chatResponse: 'Terminé ! 23 fichiers à organiser trouvés...',
    screenPerception: 'Perception d\'Écran',
    screenStatus: 'Analyse de la fenêtre actuelle...',
    fileMonitor: 'Moniteur de Fichiers',
    fileStatus: '3 nouveaux fichiers détectés',
    clipboard: 'Presse-papiers',
    clipboardStatus: 'Extrait de code capturé',
    taskSuggestions: 'Suggestions de Tâches',
    taskStatus: '5 suggestions générées',
    running: 'En cours',
    active: 'Actif',
    ready: 'Prêt',
    complete: 'Terminé',
  },
}
