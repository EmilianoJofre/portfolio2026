export const navigationItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'philosophy', label: 'Filosofía' },
  { id: 'technology', label: 'Tech Stack' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
];

export const heroSignals = [
  {
    title: 'Arquitectura Backend',
    detail: 'Sistemas en Ruby on Rails diseñados para durabilidad, claridad y confianza operativa.',
  },
  {
    title: 'Infraestructura Cloud',
    detail: 'AWS, Docker y estructurados para entornos de despliegue predecibles y seguros.',
  },
  {
    title: 'Ingeniería de Producto',
    detail: 'Desarrollo web escalable que conecta APIs, bases de datos complejas e interfaces modernas.',
  },
  {
    title: 'Automatización',
    detail: 'Conversión de operaciones manuales y flujos críticos hacia sistemas resilientes y medibles.',
  },
];

export const aboutHighlights = [
  'Arquitectura de sistemas escalables para empresas.',
  'Enfoque backend-first con fuerte ejecución de producto full-stack.',
  'Decisiones tecnológicas enfocadas en el equipo y el negocio, no solo en el código.',
];

export const skillsGroups = [
  {
    id: '01',
    title: 'Arquitectura Backend',
    description: 'Diseño núcleos de aplicación modulares y mantenibles, desde modelado de dominios hasta procesamiento en segundo plano.',
    points: [
      'Arquitectura en Ruby on Rails y APIs RESTful',
      'Diseño y contratos de API, integración de sistemas de terceros',
      'Modelado en PostgreSQL, optimización de queries e integridad de datos',
    ],
  },
  {
    id: '02',
    title: 'Infraestructura Cloud',
    description: 'Construyo bases de despliegue que mantienen los sistemas operativos, seguros y listos para iterar.',
    points: [
      'Pipelines de entrega con Docker y entornos consistentes',
      'AWS (EC2, Amplify, S3, RDS, etc) y enfoques de infraestructura',
    ],
  },
  {
    id: '03',
    title: 'Desarrollo Frontend Moderno',
    description: 'Conecto el rigor del backend con interfaces claras usando el ecosistema moderno de JavaScript.',
    points: [
      'Interfaces escalables con React, Hooks y Vite',
      'Sistemas de diseño, Tailwind CSS y Vanilla CSS',
      'Implementación responsiva y experiencias de usuario altamente interactivas',
    ],
  },
  {
    id: '04',
    title: 'Automatización y Operaciones',
    description: 'Transformo flujos de trabajo costosos y manuales en plataformas automatizadas y auditables.',
    points: [
      'Automatización de flujos y arquitectura orientada a eventos',
      'Herramientas administrativas para operaciones e informes',
      'Integración Continua (CI/CD) y DevOps básico',
    ],
  },
];

export const experienceTimeline = [
  {
    company: 'Valuelist',
    role: 'Desarrollador Fullstack',
    period: '2022 - 2025',
    logo: '/logos/valuelist.svg',
    description: 'De las primeras wealthtech en Chile enfocada en inversiones, fondos de pensiones y automatización patrimonial. Liderando desarrollo full-stack e integración de sistemas core. Hasta ahora he logrado implementar mejoras significativas en la plataforma. Startup en crecimiento.',
  },
  {
    company: 'Kargotools',
    role: 'Desarrollador Node.js / React',
    period: '2024 - Presente',
    logo: '/logos/kargotools.svg',
    description: 'Desarrollo de sistemas web para optimizar operaciones logísticas y planificación de transporte. Construcción de aplicaciones escalables con Ruby on Rails y React que integran seguimiento de rutas, gestión de pedidos y monitoreo en tiempo real.',
  },
  {
    company: 'Haulers',
    role: 'Ingeniero de Software',
    period: '2025 - Presente',
    logo: '/logos/haulers.svg',
    description: 'Desarrollo y mantenimiento de plataformas SaaS para la optimización del movimiento de carga, gestión de entregas y conexión de sistemas logísticos. Implementación de soluciones escalables para la industria del transporte utilizando tecnologías modernas.',
  }
];

export const philosophyPrinciples = [
  {
    title: 'Hacer la complejidad legible',
    description:
      'El objetivo no es solo manejar la complejidad, sino darle forma en sistemas que otros ingenieros y operadores puedan entender rápidamente.',
  },
  {
    title: 'Diseñar para la realidad operativa',
    description:
      'Las decisiones de arquitectura deben sobrevivir tráfico real, entradas imperfectas, reglas de negocio cambiantes y el ritmo diario de entrega de producto.',
  },
  {
    title: 'Automatizar los bordes frágiles',
    description:
      'La automatización de mayor valor vive donde las personas compensan el comportamiento faltante del sistema. Ahí es donde las plataformas necesitan más cuidado.',
  },
  {
    title: 'Construir para el próximo equipo',
    description:
      'Un sistema escalable es aquel que los futuros contribuyentes pueden extender, desplegar y depurar sin requerir una transferencia de contexto heroica.',
  },
];

export const constellationTech = [
  { name: 'Ruby on Rails', ring: 1, angle: 15 },
  { name: 'React', ring: 1, angle: 115 },
  { name: 'PostgreSQL', ring: 1, angle: 220 },
  { name: 'Docker', ring: 1, angle: 315 },
  { name: 'AWS EC2', ring: 2, angle: 42 },
  { name: 'Amplify', ring: 2, angle: 210 },
  { name: 'GCloud', ring: 2, angle: 300 },
  { name: 'Diseño API', ring: 3, angle: 12 },
  { name: 'DevOps', ring: 3, angle: 90 },
  { name: 'Despliegues', ring: 3, angle: 180 },
  { name: 'Automatización', ring: 3, angle: 268 },
];

export const technologyGroups = [
  {
    title: 'Núcleo de Aplicación',
    items: ['Ruby on Rails', 'React + Vite', 'PostgreSQL', 'APIs internas y REST'],
  },
  {
    title: 'Infraestructura',
    items: ['Entornos Dockerizados', 'AWS EC2 e IAM', 'Flujos de despliegue en Amplify', 'Servicios Edge en GCloud'],
  },
  {
    title: 'Capa de Entrega y Operación',
    items: ['Paneles operativos', 'Procesamiento en segundo plano', 'Flujos de automatización', 'Estrategia de despliegue de sistemas'],
  },
];

export const contactDetails = {
  email: 'emiliano.jofre@sansano.usm.cl',
  primaryCta: 'Iniciar una conversación',
  secondaryCta: 'Revisar mi GitHub',
};
