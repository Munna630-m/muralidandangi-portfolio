import type { Profile, VentureLabStartup, Project, DesignItem, VideoItem, SkillCategory } from '../types/portfolio';

export const initialProfile: Profile = {
  name: 'Murali Dandangi',
  titles: ['UI/UX Designer', 'Graphic Designer', 'Founder'],
  tagline: 'Designing digital experiences, visual identities and products that turn ideas into meaningful experiences.',
  bioParagraphs: [
    "I’m Murali Dandangi, a UI/UX Designer and Graphic Designer focused on creating intuitive digital experiences and visually compelling designs.",
    "My work combines user-centered thinking, visual design and technology to transform ideas into products people can understand, use and remember.",
    "Alongside design, I am building VentureLab OS, an AI-powered startup ecosystem designed to connect skills, real-world projects, startups and opportunities."
  ],
  heroImage: '/assets/portrait-hero.jpg',
  aboutImage: '/assets/portrait-about.jpg',
  email: 'muralidandangi8@gmail.com',
  location: 'Hyderabad, India • Available Worldwide',
  availability: 'Open for Freelance Projects, Product Design & Startup Collaborations',
  socialLinks: [
    {
      id: 'soc-1',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muralidandangi',
      icon: 'linkedin'
    },
    {
      id: 'soc-2',
      name: 'Behance',
      url: 'https://www.behance.net/muralidandangi',
      icon: 'behance'
    },
    {
      id: 'soc-3',
      name: 'Instagram',
      url: 'https://www.instagram.com/elite_creation630?igsi=MXZpdTdrcm1saHAxOQ==',
      icon: 'instagram'
    },
    {
      id: 'soc-4',
      name: 'Email',
      url: 'mailto:muralidandangi8@gmail.com',
      icon: 'email'
    }
  ],
  stats: {
    experienceYears: '3+',
    projectsCompleted: '45+',
    startupsFounded: '1',
    clientSatisfaction: '100%'
  },
  designPhilosophy: 'I believe design is not just what it looks like, but how it solves problems and connects human emotion with product utility. Clean geometry, purposeful white space, and frictionless user flows drive every project I create.',
  careerFocus: 'UI/UX Architecture, Scalable Design Systems, Visual Identity, AI Product Interfaces & Startup Incubation.'
};

export const initialStartup: VentureLabStartup = {
  name: 'VENTURELAB OS',
  subtitle: 'AI-Powered Skill-to-Opportunity Ecosystem',
  role: 'Founder & Product Lead',
  founderName: 'Murali Dandangi',
  vision: 'Build a connected ecosystem where skills can become real-world opportunities.',
  description: 'VentureLab OS is my startup concept focused on connecting students, professionals, startups and real-world opportunities through an AI-powered ecosystem.',
  pillars: [
    {
      title: 'Skill Development',
      description: 'Hands-on practical challenges designed to replace theoretical rote learning with proof of skill.',
      badge: 'Action-Driven',
      icon: 'Brain'
    },
    {
      title: 'Real-World Projects',
      description: 'Direct engagement with real startup tasks, client challenges, and product builds.',
      badge: 'Portfolio Ready',
      icon: 'FolderKanban'
    },
    {
      title: 'AI-Powered Skill Profiles',
      description: 'Dynamic intelligence analyzing code, UI designs, and problem-solving aptitude.',
      badge: 'Smart Metrics',
      icon: 'Cpu'
    },
    {
      title: 'Startup Collaboration',
      description: 'Enabling founders to discover pre-vetted talent matched precisely to their product stacks.',
      badge: 'Synergy',
      icon: 'Network'
    },
    {
      title: 'Industry Problem Solving',
      description: 'Crowdsourced micro-incubations tackling genuine operational and UX roadblocks.',
      badge: 'Impact',
      icon: 'Target'
    },
    {
      title: 'Career & Growth Opportunities',
      description: 'Direct talent pipelines into early-stage ventures, design studios, and technology companies.',
      badge: 'Verified Path',
      icon: 'Rocket'
    }
  ],
  projectUrl: 'https://venturelabos.com',
  status: 'In Active Development • Early Access Beta'
};

export const initialSkillCategories: SkillCategory[] = [
  {
    title: 'UI/UX DESIGN',
    subtitle: 'User-centered architecture and product experiences',
    icon: 'Layers',
    skills: [
      'User Research',
      'User Personas',
      'Information Architecture',
      'User Flows',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Interaction Design',
      'Design Systems',
      'Mobile App Design',
      'Web Design',
      'Product Design'
    ]
  },
  {
    title: 'GRAPHIC DESIGN',
    subtitle: 'High-impact visual communication and brand identity',
    icon: 'Palette',
    skills: [
      'Social Media Design',
      'Brand Design & Identity',
      'Posters & Banners',
      'Flyers & Print Assets',
      'Marketing Creatives',
      'Visual Communication',
      'Vector Illustration',
      'Typography & Layout'
    ]
  },
  {
    title: 'DIGITAL DESIGN',
    subtitle: 'Eye-catching assets optimized for digital growth',
    icon: 'Sparkles',
    skills: [
      'YouTube Thumbnails',
      'Social Media Creatives',
      'Promotional Graphics',
      'Digital Campaign Design',
      'Carousel Storytelling',
      'Ad Banner Creatives'
    ]
  },
  {
    title: 'STARTUP / PRODUCT',
    subtitle: 'Strategic thinking for zero-to-one venture creation',
    icon: 'Flame',
    skills: [
      'Product Thinking',
      'Startup Ideation',
      'Product Strategy',
      'AI Product Concepts',
      'UX Strategy & Roadmapping',
      'Market & Competitor Analysis'
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'VentureLab OS — AI Skill & Ecosystem Platform',
    category: 'Product Design',
    shortDescription: 'Comprehensive UI/UX design and product strategy for an AI-powered talent incubation and project matchmaking ecosystem.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tools: ['Figma', 'Design Systems', 'AI Workflows', 'React'],
    tags: ['Product Design', 'Startup', 'AI Ecosystem', 'SaaS'],
    year: '2026',
    featured: true,
    published: true,
    order: 1,
    caseStudy: {
      overview: 'VentureLab OS connects emerging designers, developers and students with verified startup opportunities through interactive project simulations.',
      clientOrContext: 'Founder Initiative / VentureLab OS',
      timeline: '4 Months • In Active Build',
      role: 'Founder & Lead Product Designer',
      problem: 'Traditional resumes fail to showcase a designer or engineer’s real-world problem-solving abilities, leading to severe talent-opportunity mismatch.',
      goal: 'Design a frictionless, gamified ecosystem where builders showcase verified skills through simulated project sprints and land startup roles.',
      researchInsights: [
        'Over 82% of startup founders surveyed prefer reviewing interactive case studies over standard PDF resumes.',
        'Students struggled with understanding industry-standard workflows without structured mentorship.',
        'High cognitive load was the primary drop-off reason in existing talent marketplaces.'
      ],
      uxProcessSteps: [
        'Stakeholder & Student Interviews',
        'User Journey Mapping & Information Architecture',
        'Low-Fidelity Wireframes in Figma',
        'Interactive Dark/Light Component System',
        'High-Fidelity Prototyping & Usability Sprints'
      ],
      wireframeNotes: 'Emphasized a modular dashboard card architecture with unified progress telemetry, skill radar visualizations, and one-click challenge onboarding.',
      uiDesignHighlights: [
        'OLED-black minimal aesthetics with vibrant orange/coral signal accents',
        'Live interactive skill trees with real-time competency benchmarks',
        'Contextual side-drawers for rapid challenge switching without losing workspace context'
      ],
      screens: [
        {
          id: 'scr-1',
          title: 'Founder & Candidate Dashboard',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          caption: 'High-density telemetry dashboard with skill heatmaps and venture applications.'
        },
        {
          id: 'scr-2',
          title: 'Skill Challenge Workspace',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
          caption: 'Interactive task interface with step-by-step UX deliverables and automated scoring.'
        },
        {
          id: 'scr-3',
          title: 'AI Talent Matchmaker',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          caption: 'Founder talent discovery feed with verified capability proofs and direct scheduling.'
        }
      ],
      designDecisions: [
        'Adopted a 4px/8px baseline grid to maintain immaculate vertical rhythm across dense data tables.',
        'Implemented collapsible navigation to give maximum screen real estate to project canvases.',
        'Selected high-contrast typography hierarchy (Syne + Inter) for peak readability in low-light environments.'
      ],
      outcome: 'Validated with over 150 early student testers and 12 startup founders, achieving a 94% task completion rate on initial onboarding.'
    }
  },
  {
    id: 'proj-2',
    title: 'ApexPay — Next-Gen FinTech Mobile App',
    category: 'Mobile App',
    shortDescription: 'Mobile banking and crypto-fiat wealth management app engineered for intuitive split-second transactions and portfolio analytics.',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tools: ['Figma', 'Principle', 'iOS Design System'],
    tags: ['FinTech', 'iOS / Android', 'Micro-interactions', 'Dark UI'],
    year: '2025',
    featured: true,
    published: true,
    order: 2,
    caseStudy: {
      overview: 'ApexPay is a modern financial app engineered to simplify multi-currency international transfers, automated savings buckets, and card management.',
      clientOrContext: 'FinTech Concept / Client Project',
      timeline: '6 Weeks',
      role: 'Lead UI/UX Designer',
      problem: 'Users frequently abandoned cross-currency payment flows due to confusing fee disclosures, hidden steps, and cluttered confirmation modals.',
      goal: 'Streamline the money transfer funnel to under 3 taps with crystal-clear rate transparency and biometric security confirmation.',
      researchInsights: [
        'Users demanded immediate visibility of real-time exchange rates before entering pin authentication.',
        'Haptic feedback and micro-animations significantly increased user trust during high-value transfers.'
      ],
      uxProcessSteps: [
        'Comparative Benchmark of Revolut, Wise & Apple Cash',
        'User Flow Optimization for 3-Step Transfer',
        'Micro-interaction Prototyping in Principle',
        'Design System Creation with 60+ Reusable Components'
      ],
      wireframeNotes: 'Focused on single-hand reachability zone for thumb navigation on 6.7-inch mobile devices.',
      uiDesignHighlights: [
        'Fluid glassmorphic card stacks with real-time gradient reflections',
        'Swipe-to-confirm payment mechanics with instant sensory feedback',
        'Interactive spending insights with pinch-to-zoom timeline charts'
      ],
      screens: [
        {
          id: 'scr-4',
          title: 'Home Balance & Quick Actions',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
          caption: 'Main financial hub featuring physical card controls and one-touch send.'
        },
        {
          id: 'scr-5',
          title: 'Transfer & Exchange Flow',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
          caption: 'Zero-clutter currency conversion with transparent fee calculation.'
        }
      ],
      designDecisions: [
        'Positioned all primary action triggers within bottom 40% of the screen for ergonomics.',
        'Used high-contrast numeric typography to prevent error-prone transaction amounts.'
      ],
      outcome: 'Reduced simulated checkout time by 42% and achieved 100% positive feedback in usability testing sessions.'
    }
  },
  {
    id: 'proj-3',
    title: 'OmniCloud — B2B SaaS Enterprise Analytics',
    category: 'UI/UX Design',
    shortDescription: 'Enterprise cloud infrastructure monitoring dashboard designed for DevOps engineers managing multi-region deployments.',
    coverImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    tools: ['Figma', 'Design System', 'Data Visualization'],
    tags: ['Enterprise SaaS', 'Dashboard', 'Data Viz', 'Dark Mode'],
    year: '2025',
    featured: true,
    published: true,
    order: 3,
    caseStudy: {
      overview: 'OmniCloud provides real-time telemetry, server load diagnostics, and anomaly alerts for distributed Kubernetes cloud clusters.',
      clientOrContext: 'Enterprise SaaS Studio',
      timeline: '8 Weeks',
      role: 'Senior Product Designer',
      problem: 'Engineers suffered from alert fatigue due to unprioritized visual noise and confusing nested settings menus.',
      goal: 'Create an incident response console that highlights critical server anomalies in under 2 seconds.',
      researchInsights: [
        'Color-coding alerts by severity (P0 critical vs P3 warning) reduced incident diagnosis time by 60%.',
        'Customizable widget grid allowed engineers to tailor views to their specific regional nodes.'
      ],
      uxProcessSteps: [
        'Domain Expert Interviews with 10 DevOps Leads',
        'Information Architecture & Filter Logic Redesign',
        'Component Library & Accessible Color Palette (WCAG AAA)',
        'Comprehensive Interactive Prototype'
      ],
      wireframeNotes: 'Designed modular card system accommodating real-time streaming line graphs, sparklines, and status pills.',
      uiDesignHighlights: [
        'Dense yet clean typography scale utilizing JetBrains Mono for metrics and Inter for narrative logs',
        'Global search command palette (CMD+K) for instantaneous server lookups'
      ],
      screens: [
        {
          id: 'scr-6',
          title: 'Cluster Health Center',
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
          caption: 'Real-time multi-region health matrix with live CPU & memory usage.'
        }
      ],
      designDecisions: [
        'Strict dark theme palette engineered specifically to minimize eye fatigue during night shift operations.'
      ],
      outcome: 'Adopted by 40+ engineering teams, decreasing average Mean Time to Detect (MTTD) by 35%.'
    }
  },
  {
    id: 'proj-4',
    title: 'Aura Studio — Premium Brand Identity & Visual System',
    category: 'Branding',
    shortDescription: 'Complete brand architecture, typography guidelines, packaging, and digital design system for an avant-garde creative agency.',
    coverImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    tools: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
    tags: ['Brand Identity', 'Typography', 'Visual Design', 'Art Direction'],
    year: '2025',
    featured: true,
    published: true,
    order: 4,
    caseStudy: {
      overview: 'Brand identity system including logomark geometry, editorial typography hierarchy, color theory, social media kits, and brand books.',
      clientOrContext: 'Aura Creative Studio',
      timeline: '5 Weeks',
      role: 'Brand Identity & Visual Designer',
      problem: 'The agency lacked a cohesive visual language to pitch tier-1 international luxury and tech clientele.',
      goal: 'Establish an unforgettable, minimalist, and cinematic visual identity that exudes confidence and craft.',
      researchInsights: [
        'Top luxury clients respond strongly to deliberate negative space and disciplined monochrome palettes.'
      ],
      uxProcessSteps: [
        'Moodboard Curation & Archetype Strategy',
        'Custom Monogram & Typography Geometry',
        'Digital & Print Collateral Prototyping',
        'Comprehensive 80-Page Brand Guidelines Book'
      ],
      wireframeNotes: 'Defined strict golden-ratio grid systems for all digital, web, and physical touchpoints.',
      uiDesignHighlights: [
        'Architectural typography paired with stark editorial photography',
        'Custom SVG icon set and brand motion guidelines'
      ],
      screens: [
        {
          id: 'scr-7',
          title: 'Brand Book & Guidelines',
          image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
          caption: 'Custom grid systems, typography scales and stationery mockups.'
        }
      ],
      designDecisions: [
        'Opted for bespoke geometric logomark paired with high-impact editorial serifs and sans-serifs.'
      ],
      outcome: 'Propelled agency client conversions by 180% within the first quarter following brand rollout.'
    }
  }
];

export const initialDesigns: DesignItem[] = [
  {
    id: 'des-1',
    title: 'FinTech Mobile Banking Experience',
    category: 'UI/UX Designs',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    description: 'Dark-mode financial transaction flow with fluid micro-interactions and card balance telemetry.',
    tags: ['UI/UX', 'Mobile App', 'FinTech', 'Dark UI'],
    published: true,
    order: 1,
    createdAt: '2026-01-15'
  },
  {
    id: 'des-2',
    title: 'VentureLab OS — Hero Platform Concept',
    category: 'UI/UX Designs',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '16:9',
    description: 'Interactive node network and skill dashboard interface for startup talent incubation.',
    tags: ['UI/UX', 'Web App', 'SaaS', 'Startup'],
    published: true,
    order: 2,
    createdAt: '2026-02-01'
  },
  {
    id: 'des-3',
    title: 'Neon Cyberpunk Music Festival Poster',
    category: 'Graphic Designs',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    description: 'High-energy typography poster with chromatic aberration and glowing geometric accents.',
    tags: ['Graphic Design', 'Poster', 'Typography', 'Visual Art'],
    published: true,
    order: 3,
    createdAt: '2025-11-20'
  },
  {
    id: 'des-4',
    title: 'AI Startup Product Launch Campaign',
    category: 'Social Media Posts',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    description: 'Multi-slide Instagram carousel series introducing next-gen generative AI design workflows.',
    tags: ['Social Media', 'Carousel', 'Instagram', 'AI Brand'],
    published: true,
    order: 4,
    createdAt: '2025-12-05'
  },
  {
    id: 'des-5',
    title: 'Mastering Modern UI/UX Design in 2026',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '16:9',
    description: 'High-CTR YouTube thumbnail design with bold typography, 3D elements, and high contrast.',
    tags: ['Thumbnails', 'YouTube', 'High CTR', 'Design Tutorial'],
    published: true,
    order: 5,
    createdAt: '2026-01-28'
  },
  {
    id: 'des-6',
    title: 'Minimalist Monogram & Brand Guidelines',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    description: 'Brand identity system with golden ratio geometric construction and custom typography.',
    tags: ['Branding', 'Logomark', 'Identity', 'Minimalism'],
    published: true,
    order: 6,
    createdAt: '2025-10-12'
  },
  {
    id: 'des-7',
    title: 'How I Built an AI Startup at 22',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '16:9',
    description: 'Cinematic video thumbnail with dramatic rim lighting and punchy title typography.',
    tags: ['Thumbnails', 'YouTube', 'Startup', 'Storytelling'],
    published: true,
    order: 7,
    createdAt: '2026-02-10'
  },
  {
    id: 'des-8',
    title: 'SaaS Growth Marketing Social Pack',
    category: 'Social Media Posts',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    description: 'Conversion-driven LinkedIn & Twitter post templates for tech product announcements.',
    tags: ['Social Media', 'Marketing', 'LinkedIn', 'B2B'],
    published: true,
    order: 8,
    createdAt: '2025-09-18'
  },
  {
    id: 'des-9',
    title: 'E-Commerce Product Detail App Redesign',
    category: 'UI/UX Designs',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    description: 'Streamlined checkout and interactive 3D product view for luxury watch boutique.',
    tags: ['UI/UX', 'E-Commerce', 'Mobile Design', 'Luxury'],
    published: true,
    order: 9,
    createdAt: '2025-08-22'
  }
];

export const initialVideos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'VentureLab OS — Interactive Product Demo & Micro-Interactions',
    category: 'UI/UX & Motion',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    duration: '0:45',
    description: 'Smooth micro-interactions, dashboard telemetry animations, and node connection physics.',
    published: true,
    order: 1
  },
  {
    id: 'vid-2',
    title: 'ApexPay — 3D Payment Confirmation Animation',
    category: 'Motion Design',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
    duration: '0:30',
    description: 'Dynamic spring physics and haptic visual feedback for completed biometric payments.',
    published: true,
    order: 2
  }
];
