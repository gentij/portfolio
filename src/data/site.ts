export const site = {
  person: {
    name: 'Gentrit Jashari',
    role: 'Full Stack Engineer',
    location: 'Prishtine, Kosovo',
    email: 'gentijashari5@gmail.com',
    github: 'https://github.com/gentij',
    linkedin: 'https://www.linkedin.com/in/gentrit-jashari-518a31199/',
    resume: '/GentritJashariResume.pdf',
    yearsExperience: '6+ years',
    summary:
      'Full Stack Engineer with 6+ years across SaaS products, integrations, realtime systems, and desktop software.',
    intro:
      'I build practical software for real use cases, from business platforms and internal tools to integrations and local desktop applications.',
    resumeIntro:
      'Across the last 6+ years I have worked on SaaS products, business platforms, realtime systems, integrations, and custom internal tools. The common thread is shipping practical software that is reliable, clear to operate, and valuable to the people using it.',
    focus: [
      'Frontend architecture with React and Next.js',
      'Backend APIs and application architecture in Node.js',
      'Realtime, integration-heavy, and operations-aware product work',
      'Rust-based tooling and local desktop software',
    ],
    currently: [
      'Building and refining Lunie',
      'Improving inference and performance in stem-splitter-core',
      'Expanding the UX and theme system of Stemmer',
    ],
  },
  projects: [
    {
      slug: 'lunie',
      name: 'Lunie',
      eyebrow: 'featured platform',
      summary:
        'Self-hosted workflow automation with an API server, workers, CLI, and TUI.',
      detail:
        'Built for technical users who want local control, API-first automation, and inspectable execution history.',
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
        'Local desktop app for AI stem separation with a retro cassette-inspired interface.',
      detail:
        'Designed around local processing, multiple visual themes, waveform feedback, and interactive stem mixing.',
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
        'Rust library and CLI for local audio stem separation powered by ONNX Runtime.',
      detail:
        'Designed as a reusable engine for music tools and creator workflows, with model management, caching, and multi-provider acceleration.',
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
        'Integration backend for ingesting Google Workspace events and forwarding them downstream.',
      detail:
        'Combines source registration, queue-based processing, retries, caching, and Google Admin SDK integration into one focused service.',
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
        'Designed and implemented Node.js REST APIs for a blockchain-based platform using IPFS for secure decentralized file upload and storage.',
        'Led frontend development for a Jira-like project management platform backed by smart contract infrastructure.',
        'Built and maintained a restaurant SaaS product with realtime order displays, CRUD flows, notifications, and third-party integrations.',
        'Currently developing a no-code website builder in React with a modular component-based authoring experience.',
      ],
    },
    {
      company: 'Kutia LLC',
      location: 'Kosovo',
      role: 'Full Stack Engineer',
      period: 'Apr 2022 - Mar 2023',
      bullets: [
        'Contributed to backend development for a mobile metaverse game, including the in-game store, virtual currency, and referral systems.',
        'Improved backend performance and security through caching layers, rate limiting, and request validation.',
        'Worked on a tenant-management SaaS platform, including personality-based tenant matching features.',
        'Mentored junior developers through code reviews, 1:1 sessions, and hands-on technical guidance.',
      ],
    },
    {
      company: 'Rhenum LLC',
      location: 'Kosovo',
      role: 'Full Stack Engineer',
      period: 'Feb 2019 - Apr 2022',
      bullets: [
        'Built production React applications and custom themes backed by headless CMS solutions for local businesses.',
        'Designed and implemented a realtime taxi dispatch system using WebSockets to connect native mobile apps with admin dashboards.',
        'Contributed end-to-end to an HRM platform from architecture through deployment.',
        'Developed an LMS with Next.js and MUI and built Shield, a monitoring platform for large shopping mall infrastructure.',
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
    period: 'Sep 2020 - Expected 2026',
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
  ],
} as const
