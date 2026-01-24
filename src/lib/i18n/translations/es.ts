import type { Translations } from './zh'

export const es: Translations = {
  // Navigation
  nav: {
    features: 'Características',
    useCases: 'Casos de Uso',
    platforms: 'Plataformas',
    download: 'Descargar',
    theme: 'Tema',
  },

  // Hero Section
  hero: {
    badge: 'Asistente de IA sin Prompts',
    title: 'Tu Compañero de Trabajo con IA',
    titleHighlight: 'Ve Todo, Piensa por Adelantado',
    subtitle: 'Sin prompts necesarios. Hawkeye entiende tu contexto de trabajo y sugiere acciones proactivamente.',
    cta: {
      download: 'Descargar Gratis',
      github: 'GitHub',
    },
    stats: {
      users: 'Usuarios Activos',
      stars: 'GitHub Stars',
      privacy: '100% Procesamiento Local',
    },
  },

  // Features Section
  features: {
    title: 'Redefiniendo la Interacción con IA',
    subtitle: 'No más escribir prompts. Deja que la IA trabaje proactivamente para ti.',
    items: {
      sees: {
        title: 'Sees Everything',
        titleZh: 'Percepción Multimodal',
        description: 'Pantalla, portapapeles, cambios de archivos - conciencia integral de tu contexto de trabajo.',
      },
      thinks: {
        title: 'Thinks Ahead',
        titleZh: 'Razonamiento Proactivo',
        description: 'Sin prompts. Entiende automáticamente la intención y sugiere acciones.',
      },
      private: {
        title: 'Stays Private',
        titleZh: 'Privacidad Primero',
        description: '100% procesamiento local. Tus datos nunca salen de tu dispositivo. Funciona offline.',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: 'Tu Socio de Trabajo Todo en Uno',
    subtitle: 'Hagas lo que hagas, Hawkeye entiende y ayuda.',
    items: {
      diagnosis: {
        title: 'Diagnóstico de Errores',
        description: 'Detecta mensajes de error y sugiere soluciones.',
      },
      docs: {
        title: 'Organización Inteligente',
        description: 'Auto-organiza descargas por tipo y fecha.',
      },
      clipboard: {
        title: 'Portapapeles Mejorado',
        description: 'Entiende el contenido copiado y sugiere acciones.',
      },
      project: {
        title: 'Seguimiento de Proyectos',
        description: 'Monitorea cambios y genera informes.',
      },
      email: {
        title: 'Asistente de Email',
        description: 'Analiza emails, sugiere respuestas y tareas.',
      },
      web: {
        title: 'Extracción de Info Web',
        description: 'Identifica info clave y sugiere guardarla.',
      },
    },
    popular: 'Popular',
  },

  // Platforms Section
  platforms: {
    title: 'Soporte Multiplataforma',
    subtitle: 'Usa Hawkeye en tus dispositivos favoritos.',
    items: {
      macos: {
        title: 'macOS',
        description: 'App nativa Swift, perfecta para Apple Silicon.',
        status: 'Próximamente',
      },
      windows: {
        title: 'Windows',
        description: 'App nativa para Windows 10/11.',
        status: 'En Desarrollo',
      },
      chrome: {
        title: 'Extensión Chrome',
        description: 'Extensión para conciencia web inteligente.',
        status: 'Planificado',
      },
      vscode: {
        title: 'VS Code',
        description: 'Plugin para productividad de desarrolladores.',
        status: 'Planificado',
      },
    },
  },

  // CTA Section
  cta: {
    title: '¿Listo para IA Sin Prompts?',
    subtitle: 'Únete a miles que usan Hawkeye para aumentar su productividad.',
    button: 'Descargar Gratis',
    note: 'Sin registro. Completamente gratis.',
  },

  // Footer
  footer: {
    product: 'Producto',
    resources: 'Recursos',
    legal: 'Legal',
    language: 'Idioma',
    features: 'Características',
    useCases: 'Casos de Uso',
    platforms: 'Plataformas',
    changelog: 'Historial de Cambios',
    documentation: 'Documentación',
    github: 'GitHub',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    copyright: '© {year} Hawkeye. MIT License.',
  },

  // Demo Section
  demo: {
    title: 'Ve Hawkeye en Acción',
    subtitle: 'Un resumen rápido de 2 minutos de las funciones principales de Hawkeye',
    playVideo: 'Reproducir Demo',
    chapters: {
      intro: 'Introducción',
      gesture: 'Demo de Gestos',
      features: 'Funciones',
    },
  },

  // Trust Badges
  trustBadges: {
    noCreditCard: 'Sin Tarjeta de Crédito',
    worksOffline: 'Funciona Offline',
    dataStaysLocal: 'Datos Locales',
    openSource: 'Código Abierto',
  },

  // Stats Section
  stats: {
    efficiency: {
      value: '10x',
      label: 'Aumento de Eficiencia',
      description: 'Comparado con flujos tradicionales',
    },
    local: {
      value: '100%',
      label: 'Procesamiento Local',
      description: 'Los datos nunca salen de tu dispositivo',
    },
    platforms: {
      value: '3',
      label: 'Plataformas',
      description: 'Escritorio / VS Code / Chrome',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'Lo Que Dicen los Usuarios',
    items: [
      {
        quote: 'Por fin, un asistente de IA que realmente respeta la privacidad. Todos los datos se procesan localmente y puedo usarlo con confianza en el trabajo.',
        author: 'Miguel García',
        role: 'Gerente de Producto',
        avatar: 'M',
      },
      {
        quote: 'Hawkeye ha transformado completamente mi flujo de trabajo. Entiende automáticamente lo que estoy haciendo y da sugerencias precisas.',
        author: 'Sara López',
        role: 'Freelancer',
        avatar: 'S',
      },
      {
        quote: 'Como proyecto de código abierto, la calidad de Hawkeye es impresionante. Comunidad activa, actualizaciones frecuentes, cada vez más potente.',
        author: 'David Martínez',
        role: 'Emprendedor',
        avatar: 'D',
      },
    ],
  },

  // Privacy Section
  privacy: {
    title: 'Privacidad Primero, Diseño Seguro',
    items: {
      localProcessing: 'Todos los datos se procesan localmente',
      ollamaSupport: 'Soporte para Ollama LLM local',
      optionalCloud: 'IA en la nube opcional (Claude API)',
      openSource: '100% código abierto y transparente',
    },
  },

  // Product Demo (mock app window)
  productDemo: {
    windowTitle: 'Hawkeye - Asistente Inteligente',
    chat: 'Chat',
    chatMessage: 'Organiza mi carpeta de descargas...',
    chatResponse: '¡Listo! Encontré 23 archivos para organizar...',
    screenPerception: 'Percepción de Pantalla',
    screenStatus: 'Analizando ventana actual...',
    fileMonitor: 'Monitor de Archivos',
    fileStatus: 'Detectados 3 archivos nuevos',
    clipboard: 'Portapapeles',
    clipboardStatus: 'Código capturado',
    taskSuggestions: 'Sugerencias de Tareas',
    taskStatus: 'Generadas 5 sugerencias',
    running: 'Ejecutando',
    active: 'Activo',
    ready: 'Listo',
    complete: 'Completo',
  },
}
