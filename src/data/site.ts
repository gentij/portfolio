export const site = {
  person: {
    name: 'Gentrit Jashari',
    role: 'Full Stack Engineer',
    location: 'Prishtina, Kosovo',
    email: 'gentijashari5@gmail.com',
    website: 'https://gentritjashari.com',
    github: 'https://github.com/gentij',
    linkedin: 'https://www.linkedin.com/in/gentrit-jashari-518a31199/',
    resume: '/GentritJashariResume.pdf',
    yearsExperience: '7+ years',
    summary:
      'Full Stack Engineer owning SaaS, automation, integration-heavy, and real-time product delivery.',
    intro:
      'I own product delivery from requirements and architecture through production, with a focus on automation, AI-enabled workflows, and systems that are clear to operate.',
    resumeIntro:
      'Across 7+ years I have owned delivery across SaaS products, automation platforms, integration-heavy systems, and developer tooling. The common thread is turning complex requirements into reliable software that teams can operate and customers can use.',
    focus: [
      'End-to-end product delivery from requirements through production',
      'Automation platforms with dozens of third-party integrations',
      'AI-enabled workflows and modern engineering tooling',
      'Backend systems, real-time operations, and Rust-based tooling',
    ],
    currently: [
      'Owning automation platform delivery across dozens of integrations',
      'Building AI-enabled workflow capabilities',
      'Maintaining Rust tooling and local inference products',
    ],
  },
  projects: [
    {
      slug: 'lunie',
      name: 'Lunie',
      eyebrow: 'featured platform',
      summary:
        'Self-hosted workflow automation built for inspectable, operator-friendly execution.',
      detail:
        'Owned the system design across the API, workers, data layer, CLI, and TUI so workflows remain local, observable, and extensible.',
      bullets: [
        'Built as a multi-part system with NestJS + Fastify, BullMQ workers, Prisma, PostgreSQL, Redis, and a Go CLI/TUI.',
        'Supports local deployment, operator visibility, and an API-first workflow model from day one.',
      ],
      stack: ['TypeScript', 'NestJS', 'Fastify', 'Go', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
      links: [
        { label: 'GitHub', href: 'https://github.com/gentij/lunie' },
        { label: 'Docs', href: 'https://gentij.github.io/lunie/' },
      ],
    },
    {
      slug: 'stemmer',
      name: 'Stemmer',
      eyebrow: 'desktop application',
      summary:
        'Cross-platform desktop application for local AI audio processing.',
      detail:
        'Built the product surface around a Rust processing core, local inference, GPU acceleration, and a focused desktop workflow.',
      bullets: [
        'Built with Tauri, Vue, TypeScript, and a Rust-powered audio engine.',
        'Uses stem-splitter-core for the underlying source separation pipeline.',
      ],
      stack: ['Rust', 'Tauri', 'Vue', 'TypeScript', 'ONNX Runtime', 'Desktop UX'],
      links: [
        { label: 'GitHub', href: 'https://github.com/gentij/stemmer' },
        { label: 'Latest Release', href: 'https://github.com/gentij/stemmer/releases/latest' },
      ],
    },
    {
      slug: 'stem-splitter-core',
      name: 'stem-splitter-core',
      eyebrow: 'rust library + cli',
      summary:
        'Reusable Rust library and CLI for local AI inference and audio processing.',
      detail:
        'Designed the reusable engine, provider selection, caching, model management, and first-party CLI distribution.',
      bullets: [
        'No Python dependency, with a type-safe Rust implementation and first-party CLI distribution.',
        'Supports provider selection across CUDA, CoreML, DirectML, oneDNN, and XNNPACK.',
      ],
      stack: ['Rust', 'ONNX Runtime', 'CoreML', 'CUDA', 'Audio Processing', 'CLI'],
      links: [
        { label: 'GitHub', href: 'https://github.com/gentij/stem-splitter-core' },
        { label: 'Crates.io', href: 'https://crates.io/crates/stem-splitter-core' },
        { label: 'Docs.rs', href: 'https://docs.rs/stem-splitter-core' },
      ],
    },
    {
      slug: 'google-workspace-event-integration',
      name: 'Google Workspace Event Integration API',
      eyebrow: 'integration backend',
      summary:
        'Integration backend for reliable event collection, processing, and downstream delivery.',
      detail:
        'Built the source registration, queue processing, retry, caching, and webhook delivery path as one focused service.',
      bullets: [
        'Built around Fastify, MongoDB, Redis, BullMQ, and Google Workspace Admin SDK integration.',
        'Handles credentialed source registration, periodic log fetches, retries, and webhook forwarding.',
      ],
      stack: ['TypeScript', 'Fastify', 'MongoDB', 'Redis', 'BullMQ', 'Google Admin SDK'],
      links: [{ label: 'GitHub', href: 'https://github.com/gentij/google-workspace-event-integration' }],
    },
  ],
  experience: [
    {
      company: 'AutomatedPros',
      location: 'Dubai',
      role: 'Full Stack Engineer',
      period: 'Apr 2023 - Present',
      bullets: [
        'Own end-to-end feature delivery across SaaS and automation products, translating requirements into architecture, implementation, integrations, testing, and production releases.',
        'Build and evolve an automation platform that coordinates workflows across dozens of third-party services, creating reusable integration patterns for varied customer use cases.',
        'Deliver AI-enabled solutions and workflow capabilities across the platform, integrating current AI tooling into customer-facing automation.',
        'Lead cross-functional engineering across multiple products, aligning frontend and backend systems, reusable components, APIs, real-time operations, and external integrations.',
      ],
    },
    {
      company: 'Kutia LLC',
      location: 'Kosovo',
      role: 'Full Stack Engineer',
      period: 'Apr 2022 - Mar 2023',
      bullets: [
        'Owned backend feature delivery across game and tenant-management products, taking work from design through implementation and release.',
        'Improved service reliability, performance, and security through caching, rate limiting, and request validation.',
        'Mentored junior developers through regular 1:1s, code reviews, and hands-on technical guidance while helping raise implementation quality across the team.',
      ],
    },
    {
      company: 'Rhenum LLC',
      location: 'Kosovo',
      role: 'Full Stack Engineer',
      period: 'Feb 2019 - Apr 2022',
      bullets: [
        'Worked across architecture, implementation, and production deployment for business applications and reusable React/CMS solutions.',
        'Designed real-time communication between mobile clients and operational dashboards using WebSockets.',
        'Contributed to HRM and learning platforms from core architecture through production delivery.',
        'Built monitoring capabilities for physical infrastructure operations.',
      ],
    },
  ],
  skillGroups: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Component-based UI architecture', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'NestJS', 'Express', 'Fastify', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Data + Infra',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions', 'AWS'],
    },
    {
      title: 'Systems + Tooling',
      items: ['Rust', 'Go', 'ONNX Runtime', 'WebSockets', 'BullMQ', 'Authentication', 'Rate Limiting'],
    },
  ],
  education: {
    school: 'University of Business and Technology',
    location: 'Prishtina',
    degree: 'Bachelor\'s Degree in Computer Science and Engineering',
    period: 'In progress',
  },
  contactLinks: [
    {
      title: 'Email',
      label: 'gentijashari5@gmail.com',
      href: 'mailto:gentijashari5@gmail.com',
      actionLabel: 'Send email',
      description: 'Best channel for direct collaboration or role-related outreach.',
    },
    {
      title: 'GitHub',
      label: 'github.com/gentij',
      href: 'https://github.com/gentij',
      actionLabel: 'Open GitHub',
      description: 'Public code, pinned repositories, and project documentation.',
    },
    {
      title: 'LinkedIn',
      label: 'gentrit-jashari-518a31199',
      href: 'https://www.linkedin.com/in/gentrit-jashari-518a31199/',
      actionLabel: 'Open LinkedIn',
      description: 'Professional profile and career history.',
    },
    {
      title: 'Resume PDF',
      label: 'Download resume',
      href: '/GentritJashariResume.pdf',
      actionLabel: 'Download PDF',
      description: 'A downloadable copy of the resume used for this portfolio pass.',
    },
    {
      title: 'Website',
      label: 'gentritjashari.com',
      href: 'https://gentritjashari.com',
      actionLabel: 'Open website',
      description: 'Portfolio, engineering work, and contact details.',
    },
  ],
} as const
