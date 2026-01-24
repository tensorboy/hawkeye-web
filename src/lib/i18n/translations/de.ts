import type { Translations } from './zh'

export const de: Translations = {
  // Navigation
  nav: {
    features: 'Funktionen',
    useCases: 'Anwendungsfälle',
    platforms: 'Plattformen',
    download: 'Herunterladen',
    theme: 'Theme',
  },

  // Hero Section
  hero: {
    badge: 'Prompt-freier KI-Assistent',
    title: 'Ihr KI-Arbeitskollege',
    titleHighlight: 'Sieht Alles, Denkt Voraus',
    subtitle: 'Keine Prompts nötig. Hawkeye versteht Ihren Arbeitskontext und schlägt proaktiv Aktionen vor.',
    cta: {
      download: 'Kostenlos Herunterladen',
      github: 'GitHub',
    },
    stats: {
      users: 'Aktive Nutzer',
      stars: 'GitHub Stars',
      privacy: '100% Lokale Verarbeitung',
    },
  },

  // Features Section
  features: {
    title: 'KI-Interaktion Neu Definiert',
    subtitle: 'Keine Prompts mehr schreiben. Lassen Sie KI proaktiv für Sie arbeiten.',
    items: {
      sees: {
        title: 'Sees Everything',
        titleZh: 'Multimodale Wahrnehmung',
        description: 'Bildschirm, Zwischenablage, Dateiänderungen - umfassende Kontexterkennung.',
      },
      thinks: {
        title: 'Thinks Ahead',
        titleZh: 'Proaktives Denken',
        description: 'Ohne Prompts. Versteht automatisch Absichten und schlägt Aktionen vor.',
      },
      private: {
        title: 'Stays Private',
        titleZh: 'Datenschutz Zuerst',
        description: '100% lokal. Ihre Daten verlassen nie Ihr Gerät. Funktioniert offline.',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: 'Ihr All-in-One Arbeitspartner',
    subtitle: 'Was auch immer Sie tun, Hawkeye versteht und hilft.',
    items: {
      diagnosis: {
        title: 'Fehlerdiagnose',
        description: 'Erkennt Fehlermeldungen und schlägt Lösungen vor.',
      },
      docs: {
        title: 'Intelligente Organisation',
        description: 'Organisiert Downloads automatisch nach Typ und Datum.',
      },
      clipboard: {
        title: 'Erweiterte Zwischenablage',
        description: 'Versteht kopierte Inhalte und schlägt Aktionen vor.',
      },
      project: {
        title: 'Projektverfolgung',
        description: 'Überwacht Änderungen und erstellt Berichte.',
      },
      email: {
        title: 'E-Mail-Assistent',
        description: 'Analysiert E-Mails, schlägt Antworten und Aufgaben vor.',
      },
      web: {
        title: 'Web-Informationsextraktion',
        description: 'Identifiziert Schlüsselinfos zum Speichern.',
      },
    },
    popular: 'Beliebt',
  },

  // Platforms Section
  platforms: {
    title: 'Multiplattform-Unterstützung',
    subtitle: 'Nutzen Sie Hawkeye auf Ihren Lieblingsgeräten.',
    items: {
      macos: {
        title: 'macOS',
        description: 'Native Swift-App, perfekt für Apple Silicon.',
        status: 'Bald Verfügbar',
      },
      windows: {
        title: 'Windows',
        description: 'Native Windows-App für Windows 10/11.',
        status: 'In Entwicklung',
      },
      chrome: {
        title: 'Chrome-Erweiterung',
        description: 'Browser-Erweiterung für intelligente Web-Erkennung.',
        status: 'Geplant',
      },
      vscode: {
        title: 'VS Code',
        description: 'Editor-Plugin für Entwicklerproduktivität.',
        status: 'Geplant',
      },
    },
  },

  // CTA Section
  cta: {
    title: 'Bereit für Prompt-freie KI?',
    subtitle: 'Schließen Sie sich Tausenden an, die mit Hawkeye ihre Produktivität steigern.',
    button: 'Kostenlos Herunterladen',
    note: 'Keine Anmeldung erforderlich. Völlig kostenlos.',
  },

  // Footer
  footer: {
    product: 'Produkt',
    resources: 'Ressourcen',
    legal: 'Rechtliches',
    language: 'Sprache',
    features: 'Funktionen',
    useCases: 'Anwendungsfälle',
    platforms: 'Plattformen',
    changelog: 'Änderungsprotokoll',
    documentation: 'Dokumentation',
    github: 'GitHub',
    privacy: 'Datenschutzrichtlinie',
    terms: 'Nutzungsbedingungen',
    copyright: '© {year} Hawkeye. MIT License.',
  },

  // Demo Section
  demo: {
    title: 'Sehen Sie Hawkeye in Aktion',
    subtitle: 'Ein schneller 2-Minuten-Überblick über die Kernfunktionen von Hawkeye',
    playVideo: 'Demo Abspielen',
    chapters: {
      intro: 'Einführung',
      gesture: 'Gesten-Demo',
      features: 'Funktionen',
    },
  },

  // Trust Badges
  trustBadges: {
    noCreditCard: 'Keine Kreditkarte',
    worksOffline: 'Funktioniert Offline',
    dataStaysLocal: 'Daten Bleiben Lokal',
    openSource: 'Open Source',
  },

  // Stats Section
  stats: {
    efficiency: {
      value: '10x',
      label: 'Effizienzsteigerung',
      description: 'Im Vergleich zu traditionellen Workflows',
    },
    local: {
      value: '100%',
      label: 'Lokale Verarbeitung',
      description: 'Daten verlassen nie Ihr Gerät',
    },
    platforms: {
      value: '3',
      label: 'Plattformen',
      description: 'Desktop / VS Code / Chrome',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'Was Nutzer Sagen',
    items: [
      {
        quote: 'Endlich ein KI-Assistent, der die Privatsphäre wirklich respektiert. Alle Daten werden lokal verarbeitet, ich kann ihn vertrauensvoll bei der Arbeit nutzen.',
        author: 'Michael Schmidt',
        role: 'Produktmanager',
        avatar: 'M',
      },
      {
        quote: 'Hawkeye hat meinen Workflow komplett verändert. Es versteht automatisch, was ich tue und gibt präzise Vorschläge.',
        author: 'Sarah Müller',
        role: 'Freiberufler',
        avatar: 'S',
      },
      {
        quote: 'Als Open-Source-Projekt ist die Qualität von Hawkeye beeindruckend. Aktive Community, häufige Updates, wird immer leistungsfähiger.',
        author: 'David Weber',
        role: 'Unternehmer',
        avatar: 'D',
      },
    ],
  },

  // Privacy Section
  privacy: {
    title: 'Datenschutz Zuerst, Sicheres Design',
    items: {
      localProcessing: 'Alle Daten lokal verarbeitet, nie hochgeladen',
      ollamaSupport: 'Unterstützt Ollama lokale LLM',
      optionalCloud: 'Optionale Cloud-KI (Claude API)',
      openSource: '100% Open Source & transparent',
    },
  },

  // Product Demo (mock app window)
  productDemo: {
    windowTitle: 'Hawkeye - Intelligenter Aufgabenassistent',
    chat: 'Chat',
    chatMessage: 'Organisiere meinen Downloads-Ordner...',
    chatResponse: 'Fertig! 23 Dateien zum Organisieren gefunden...',
    screenPerception: 'Bildschirmerkennung',
    screenStatus: 'Aktuelles Fenster wird analysiert...',
    fileMonitor: 'Dateiüberwachung',
    fileStatus: '3 neue Dateien erkannt',
    clipboard: 'Zwischenablage',
    clipboardStatus: 'Code-Snippet erfasst',
    taskSuggestions: 'Aufgabenvorschläge',
    taskStatus: '5 Vorschläge generiert',
    running: 'Läuft',
    active: 'Aktiv',
    ready: 'Bereit',
    complete: 'Fertig',
  },
}
