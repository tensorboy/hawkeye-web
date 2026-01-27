import type { Translations } from './zh'

export const en: Translations = {
  // Navigation
  nav: {
    features: 'Features',
    useCases: 'Use Cases',
    platforms: 'Platforms',
    download: 'Download',
    theme: 'Theme',
  },

  // Hero Section
  hero: {
    badge: 'Prompt-Free AI Assistant',
    title: 'Your AI Coworker That',
    titleHighlight: 'Sees Everything, Thinks Ahead',
    subtitle: 'No prompts needed. Hawkeye proactively understands your work context and suggests next actions.',
    cta: {
      download: 'Download Free',
      github: 'GitHub',
    },
    stats: {
      users: 'Active Users',
      stars: 'GitHub Stars',
      privacy: '100% Local Processing',
    },
  },

  // Features Section
  features: {
    title: 'Redefining AI Interaction',
    subtitle: 'No more writing prompts. Let AI work proactively for you.',
    items: {
      sees: {
        title: 'Sees Everything',
        titleZh: 'Multi-Modal Perception',
        description: 'Screen, clipboard, file changes - comprehensive awareness of your work context.',
      },
      thinks: {
        title: 'Thinks Ahead',
        titleZh: 'Proactive Reasoning',
        description: 'No prompts needed. Automatically understands intent and suggests next actions.',
      },
      private: {
        title: 'Stays Private',
        titleZh: 'Privacy First',
        description: '100% local processing. Your data never leaves your device. Works offline.',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: 'Your All-in-One Work Partner',
    subtitle: 'Whatever you\'re doing, Hawkeye understands and helps.',
    items: {
      diagnosis: {
        title: 'Error Diagnosis',
        description: 'Detects error messages and suggests solutions.',
      },
      docs: {
        title: 'Smart File Organization',
        description: 'Auto-organizes downloads by type and date.',
      },
      clipboard: {
        title: 'Clipboard Enhancement',
        description: 'Understands copied content and suggests actions.',
      },
      project: {
        title: 'Project Tracking',
        description: 'Monitors changes and generates reports.',
      },
      email: {
        title: 'Email Assistant',
        description: 'Analyzes emails, suggests replies and todos.',
      },
      web: {
        title: 'Web Information Extraction',
        description: 'Identifies key info and suggests saving.',
      },
    },
    popular: 'Popular',
  },

  // Platforms Section
  platforms: {
    title: 'Multi-Platform Support',
    subtitle: 'Use Hawkeye on your favorite devices.',
    items: {
      macos: {
        title: 'macOS',
        description: 'Native Swift app, perfect for Apple Silicon.',
        status: 'Coming Soon',
      },
      windows: {
        title: 'Windows',
        description: 'Native Windows app for Windows 10/11.',
        status: 'In Development',
      },
      chrome: {
        title: 'Chrome Extension',
        description: 'Browser extension for smart web awareness.',
        status: 'Planned',
      },
      vscode: {
        title: 'VS Code',
        description: 'Editor plugin for developer productivity.',
        status: 'Planned',
      },
    },
  },

  // CTA Section
  cta: {
    title: 'Ready for Prompt-Free AI?',
    subtitle: 'Join thousands using Hawkeye to boost productivity.',
    button: 'Download Free',
    note: 'No signup required. Completely free.',
  },

  // Footer
  footer: {
    product: 'Product',
    resources: 'Resources',
    legal: 'Legal',
    language: 'Language',
    features: 'Features',
    useCases: 'Use Cases',
    platforms: 'Platforms',
    changelog: 'Changelog',
    documentation: 'Documentation',
    github: 'GitHub',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© {year} Anureka Inc.. MIT License.',
  },

  // Demo Section
  demo: {
    title: 'See Hawkeye in Action',
    subtitle: 'A quick 2-minute overview of Hawkeye\'s core features',
    playVideo: 'Play Demo',
    chapters: {
      intro: 'Introduction',
      gesture: 'Gesture Demo',
      features: 'Features',
    },
  },

  // Trust Badges
  trustBadges: {
    noCreditCard: 'No Credit Card',
    worksOffline: 'Works Offline',
    dataStaysLocal: 'Data Stays Local',
    openSource: 'Open Source',
  },

  // Stats Section
  stats: {
    efficiency: {
      value: '10x',
      label: 'Efficiency Boost',
      description: 'Compared to traditional workflows',
    },
    local: {
      value: '100%',
      label: 'Local Processing',
      description: 'Data never leaves your device',
    },
    platforms: {
      value: '3',
      label: 'Platforms',
      description: 'Desktop / VS Code / Chrome',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'What Users Are Saying',
    items: [
      {
        quote: 'Finally, an AI assistant that truly respects privacy. All data is processed locally, and I can use it confidently at work.',
        author: 'Mike Chen',
        role: 'Product Manager',
        avatar: 'M',
      },
      {
        quote: 'Hawkeye has completely transformed my workflow. It automatically understands what I\'m doing and gives precise suggestions.',
        author: 'Sarah Lee',
        role: 'Freelancer',
        avatar: 'S',
      },
      {
        quote: 'As an open source project, Hawkeye\'s quality is impressive. Active community, frequent updates, and getting more powerful.',
        author: 'David Wang',
        role: 'Entrepreneur',
        avatar: 'D',
      },
    ],
  },

  // Privacy Section
  privacy: {
    title: 'Privacy-First, Secure by Design',
    items: {
      localProcessing: 'All data processed locally, never uploaded',
      ollamaSupport: 'Supports Ollama local LLM',
      optionalCloud: 'Optional cloud AI (Claude API)',
      openSource: '100% open source & transparent',
    },
  },

  // Product Demo (mock app window)
  productDemo: {
    windowTitle: 'Hawkeye - Smart Task Assistant',
    chat: 'Chat',
    chatMessage: 'Organize my downloads folder...',
    chatResponse: 'Done! Found 23 files to organize...',
    screenPerception: 'Screen Perception',
    screenStatus: 'Analyzing current window...',
    fileMonitor: 'File Monitor',
    fileStatus: 'Detected 3 new files',
    clipboard: 'Clipboard',
    clipboardStatus: 'Captured code snippet',
    taskSuggestions: 'Task Suggestions',
    taskStatus: 'Generated 5 suggestions',
    running: 'Running',
    active: 'Active',
    ready: 'Ready',
    complete: 'Complete',
  },
}
