import type {
  Profile,
  VentureLabStartup,
  Project,
  DesignItem,
  VideoItem,
  SkillCategory
} from '../types/portfolio';

export const initialProfile: Profile = {
  name: 'Murali Dandangi',
  titles: [
    'UI/UX Designer',
    'Graphic Designer',
    'Founder @ VentureLab OS',
    'Product Thinker'
  ],
  tagline: 'Designing digital experiences, visual identities and products that turn ideas into meaningful experiences.',
  bioParagraphs: [
    'I am Murali Dandangi, a multi-disciplinary UI/UX Designer, Graphic Designer, and Founder with a relentless drive for building intuitive, high-converting digital products and brand identities.',
    'My approach bridges the gap between clean human-centered usability and bold visual aesthetics. As the Founder of VentureLab OS, I build ecosystems that empower emerging creators and startups to turn raw skills into real-world industry impact.'
  ],
  heroImage: '/assets/portrait-hero.jpg',
  aboutImage: '/assets/portrait-about.jpg',
  email: 'muralidandangi8@gmail.com',
  location: 'Visakhapatnam, India • Available Globally',
  availability: 'Open for high-impact roles & venture collaborations',
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
    }
  ],
  stats: {
    experienceYears: '3+',
    projectsCompleted: '65+',
    startupsFounded: '1',
    clientSatisfaction: '100%'
  },
  designPhilosophy: 'I design digital experiences, visual identities and products that turn ideas into meaningful experiences.',
  careerFocus: 'Available for full-time roles, strategic UI/UX contracts & product design leadership.'
};

export const initialStartup: VentureLabStartup = {
  name: 'VentureLab OS',
  subtitle: 'AI-Powered Skill-to-Opportunity Ecosystem',
  role: 'Founder & Product Architect',
  founderName: 'Murali Dandangi',
  vision: 'Build a connected ecosystem where skills can become real-world opportunities.',
  description:
    'VentureLab OS bridges the gap between learning and real-world execution. By leveraging AI-powered skill analysis, project-based validation, and direct founder collaboration, it enables ambitious designers, engineers, and creators to convert raw talent into tangible industry outcomes.',
  pillars: [
    {
      title: 'Skill Development',
      description: 'Hands-on practical roadmaps and structured mentorship that accelerate applied knowledge.',
      badge: 'Core Engine',
      icon: 'Layers'
    },
    {
      title: 'Real-World Projects',
      description: 'Live challenge briefs submitted by real startups needing production-grade design and code.',
      badge: 'Applied Work',
      icon: 'FolderGit2'
    },
    {
      title: 'AI-Powered Skill Profiles',
      description: 'Dynamic intelligence engine validating designer proficiencies with verifiable portfolio proof.',
      badge: 'AI Validation',
      icon: 'Sparkles'
    },
    {
      title: 'Startup Collaboration',
      description: 'Direct pipeline connecting emerging ventures with top-tier product and design talent.',
      badge: 'Ecosystem',
      icon: 'Users'
    },
    {
      title: 'Industry Problem Solving',
      description: 'Cross-functional hackathons and sprints solving high-impact enterprise bottlenecks.',
      badge: 'High Impact',
      icon: 'Target'
    },
    {
      title: 'Career & Venture Opportunities',
      description: 'Direct talent matching, founder matchmaking, and equity project onboarding.',
      badge: 'Outcomes',
      icon: 'Rocket'
    }
  ],
  projectUrl: '#',
  status: 'In Active Development • Alpha Release 2026'
};

export const initialSkillCategories: SkillCategory[] = [
  {
    title: 'UI/UX Design',
    subtitle: 'User research, wireframing, interactive prototyping & design systems.',
    icon: 'Layout',
    skills: [
      'User Research & Interviews',
      'Wireframing & IA',
      'Design Systems & Tokens',
      'Interactive Prototyping',
      'Mobile App UI (iOS/Android)',
      'Web Application Design',
      'Usability & Heuristic Audits'
    ]
  },
  {
    title: 'Graphic & Visual Design',
    subtitle: 'High-CTR social creatives, thumbnails, posters & marketing design.',
    icon: 'Palette',
    skills: [
      'High-CTR YouTube Thumbnails',
      'Social Media Creatives',
      'Promotional Posters',
      'Visual Composition',
      'Photo Retouching & Compositing',
      'Vector Graphics & Icons'
    ]
  },
  {
    title: 'Digital & Brand Design',
    subtitle: 'Brand identity systems, logo design, typography & collateral.',
    icon: 'Sparkles',
    skills: [
      'Logo & Brand Identity',
      'Typography Hierarchy',
      'Brand Style Guides',
      'Pitch Deck Design',
      'Print & Merchandise Collateral',
      'Vector Iconography'
    ]
  },
  {
    title: 'Startup & Product Thinking',
    subtitle: 'Product strategy, MVP roadmapping & founder execution.',
    icon: 'Rocket',
    skills: [
      'Ecosystem Architecture',
      'Problem-to-Solution Mapping',
      'MVP Scoping & Roadmapping',
      'Conversion Optimization',
      'Design Leadership',
      'Founder Collaboration'
    ]
  }
];

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'VentureLab OS — Ecosystem Platform',
    category: 'Product Design',
    shortDescription: 'AI-Powered Skill-to-Opportunity Ecosystem connecting designers and builders with real-world startups.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Design System'],
    tags: ['UI/UX', 'SaaS', 'Ecosystem', 'Startup'],
    year: '2026',
    featured: true,
    published: true,
    order: 1,
    caseStudy: {
      overview: 'VentureLab OS is a platform created to eliminate the friction between acquiring creative skills and landing high-impact opportunities.',
      clientOrContext: 'Founder Initiative',
      timeline: '12 Weeks',
      role: 'Founder & Lead Product Designer',
      problem: 'Talented designers and developers struggle to prove their abilities with theoretical tutorials, while early-stage founders lack access to validated talent.',
      goal: 'Design an intuitive, gamified, yet professional workspace that analyzes skills, assigns real projects, and facilitates transparent founder collaborations.',
      researchInsights: [
        '74% of design graduates felt traditional portfolios failed to demonstrate real collaboration ability.',
        'Early-stage founders spend over 40 hours vetting candidates without standardized evaluation metrics.'
      ],
      uxProcessSteps: [
        'Ecosystem Mapping & Value Proposition Canvas',
        'Information Architecture & Navigation Flow',
        'Low-Fidelity Wireframes for Project Sprint Dashboards',
        'Component Library & Design Tokens in Figma',
        'Interactive Prototyping & Usability Sessions'
      ],
      wireframeNotes: 'Initial flows focused on the dual onboarding path: Talent vs. Venture Builder.',
      uiDesignHighlights: [
        'Deep obsidian dark theme with luminous orange (#FF5436) accents',
        'High-density dashboard cards with collapsible telemetry panels',
        'Interactive skill graph visualizations'
      ],
      screens: [
        {
          id: 's1',
          title: 'Founder & Talent Onboarding Matrix',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
          caption: 'Dynamic path selection tailoring the dashboard experience.'
        },
        {
          id: 's2',
          title: 'Live Project Collaboration Workspace',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          caption: 'Real-time kanban and asset delivery pipeline with feedback threads.'
        },
        {
          id: 's3',
          title: 'AI Skill Graph & Proof of Work Card',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          caption: 'Cryptographic skill badge verifying production deliverables.'
        }
      ],
      designDecisions: [
        'Used an 8px grid with modular spacing tokens for rapid scalability.',
        'Prioritized dark-mode first design to minimize eye fatigue during extended deep-work sprints.'
      ],
      outcome: 'Validated with 150+ beta testers with an 88% task completion rate on project milestone submission.'
    }
  },
  {
    id: 'proj-2',
    title: 'FinTech Mobile Banking & Wealth Suite',
    category: 'Mobile App',
    shortDescription: 'Next-generation banking experience with fluid card balance micro-interactions and biometric vault.',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tools: ['Figma', 'Protopie', 'iOS Guidelines', 'Typography'],
    tags: ['FinTech', 'iOS', 'Mobile App', 'Micro-Interactions'],
    year: '2025',
    featured: true,
    published: true,
    order: 2,
    caseStudy: {
      overview: 'A complete redesign of a mobile banking suite focusing on clarity, wealth tracking, and instantaneous P2P transfers.',
      clientOrContext: 'FinTech Client',
      timeline: '6 Weeks',
      role: 'Senior UI/UX Designer',
      problem: 'Complex multi-level menus led to high drop-off during fund allocations and recurring investment setup.',
      goal: 'Streamline the transaction funnel into one-thumb reachable bottom sheets with haptic micro-interactions.',
      researchInsights: [
        '65% of mobile banking interactions happen in one-handed usage on the go.',
        'Users demanded clear categorization of discretionary vs. recurring expenses.'
      ],
      uxProcessSteps: [
        'Heuristic Evaluation of Existing Flow',
        'User Journey Mapping for Split-Second Transfers',
        'Figma Component Architecture & Dark Mode Theming',
        'Micro-Interaction Testing in ProtoPie'
      ],
      wireframeNotes: 'Bottom drawer navigation validated with 1-thumb accessibility tests.',
      uiDesignHighlights: [
        'High-contrast telemetry graphs and card gesture interactions',
        'Biometric authentication feedback loops'
      ],
      screens: [
        {
          id: 's4',
          title: 'Home Balance & Quick Actions',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
          caption: 'Fluid glanceable balance with customizable quick-action pills.'
        },
        {
          id: 's5',
          title: 'Wealth Portfolio Telemetry',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
          caption: 'Interactive asset breakdown with predictive growth projections.'
        }
      ],
      designDecisions: [
        'Placed primary payment actions inside bottom reach zone.',
        'Implemented progressive disclosure for fee breakdowns.'
      ],
      outcome: '42% reduction in transfer completion time and 4.8/5 user satisfaction score.'
    }
  },
  {
    id: 'proj-3',
    title: 'Cyberpunk Soundstage — Visual Identity & Brand System',
    category: 'Branding',
    shortDescription: 'High-impact visual identity, typography system, and promotional collateral for an international electronic music festival.',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    tools: ['Photoshop', 'Illustrator', 'Figma', 'After Effects'],
    tags: ['Graphic Design', 'Branding', 'Typography', 'Visual Identity'],
    year: '2025',
    featured: true,
    published: true,
    order: 3,
    caseStudy: {
      overview: 'A complete graphic design and brand system created for a flagship futuristic music and digital art festival.',
      clientOrContext: 'Soundstage Festival Group',
      timeline: '4 Weeks',
      role: 'Brand & Graphic Designer',
      problem: 'The festival lacked a cohesive visual language across digital social channels and physical stage wayfinding.',
      goal: 'Craft an aggressive, futuristic typographic system that commands attention across billboards, wristbands, and social reels.',
      researchInsights: [
        'Audience responded 3x more to high-contrast neon compositions with experimental typography.'
      ],
      uxProcessSteps: [
        'Moodboard & Visual Direction Exploration',
        'Custom Kinetic Logotype Design',
        'Social Media Grid & Carousel Templates',
        'Merchandise & Environmental Graphics'
      ],
      wireframeNotes: 'Layout grids designed for multiple physical and digital aspect ratios.',
      uiDesignHighlights: [
        'Vibrant neon cyberpunk aesthetics',
        'Custom acid typography and glitch textures'
      ],
      screens: [
        {
          id: 's6',
          title: 'Hero Festival Poster & Key Visual',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
          caption: 'Flagship key visual featuring custom acid-graphics typography.'
        }
      ],
      designDecisions: [
        'Combined bold display font headers with monospace technical badges.'
      ],
      outcome: 'Over 500,000 impressions across promotional launch campaign.'
    }
  }
];

export const initialDesigns: DesignItem[] = [
  {
    id: 'des-1787631590556',
    title: 'Nike Jordan Red Energy Poster',
    category: 'Branding',
    imageUrl: '/uploads/design-0-1787640790087-g5bag0.jpg',
    aspectRatio: 'portrait',
    description: 'High-impact visual advertising creative featuring dynamic typography and bold color contrast.',
    tags: ['Branding', 'Poster', 'Nike', 'Visual Identity'],
    published: true,
    order: 48,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631568788',
    title: 'BMW M4 Competition Visual Post',
    category: 'Branding',
    imageUrl: '/uploads/design-1-1787640790094-0flkqi.jpg',
    aspectRatio: 'square',
    description: 'Automotive luxury social media creative with sleek metallic textures and typography.',
    tags: ['Branding', 'BMW', 'Automotive', 'Luxury'],
    published: true,
    order: 47,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631541079',
    title: 'Nike Air Max Streetwear Edition',
    category: 'Branding',
    imageUrl: '/uploads/design-2-1787640790098-k0hwrr.jpg',
    aspectRatio: 'portrait',
    description: 'Streetwear sneaker poster with brush stroke typography and energetic composition.',
    tags: ['Branding', 'Sneakers', 'Nike', 'Graphic Design'],
    published: true,
    order: 46,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631506850',
    title: 'Sneaker Culture Brand Post',
    category: 'Branding',
    imageUrl: '/uploads/design-3-1787640790101-o72ti7.jpg',
    aspectRatio: 'portrait',
    description: 'Brand aesthetic visual poster showcasing lifestyle product identity.',
    tags: ['Branding', 'Sneakers', 'Lifestyle'],
    published: true,
    order: 45,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631472141',
    title: 'Fashion & Apparel Brand Visual',
    category: 'Branding',
    imageUrl: '/uploads/design-4-1787640790105-nvzlku.jpg',
    aspectRatio: 'portrait',
    description: 'Clean layout design for premium apparel and lifestyle brands.',
    tags: ['Branding', 'Fashion', 'Apparel'],
    published: true,
    order: 44,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631437000',
    title: 'Brand Campaign Showcase',
    category: 'Branding',
    imageUrl: '/uploads/design-5-1787640790109-giecxr.jpg',
    aspectRatio: 'portrait',
    description: 'Creative visual concept for multi-channel product rollout.',
    tags: ['Branding', 'Campaign', 'Identity'],
    published: true,
    order: 43,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631367673',
    title: 'High CTR YouTube Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-6-1787640790113-djn35a.jpg',
    aspectRatio: '16:9',
    description: 'Conversion-focused YouTube thumbnail with expressive contrast.',
    tags: ['Thumbnails', 'YouTube', 'High CTR'],
    published: true,
    order: 43,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631348871',
    title: 'Podcast / Tech Video Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-7-1787640790116-2ed11h.jpg',
    aspectRatio: '16:9',
    description: 'Bold storytelling thumbnail designed for maximum click-through.',
    tags: ['Thumbnails', 'YouTube', 'Tech'],
    published: true,
    order: 42,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631312922',
    title: 'Product Review Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-8-1787640790120-bb6y14.jpg',
    aspectRatio: '16:9',
    description: 'High-CTR gaming and tech product review thumbnail.',
    tags: ['Thumbnails', 'High CTR'],
    published: true,
    order: 41,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631245747',
    title: 'tech.co Landing Page UI',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-9-1787640790123-wp2yb1.jpg',
    aspectRatio: 'square',
    description: 'tech.co landing page with modern dark layout and product highlights.',
    tags: ['UI/UX', 'Landing Page', 'SaaS'],
    published: true,
    order: 40,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631183925',
    title: 'Sign In & Login Screen Flow',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-10-1787640790126-n0mc8m.jpg',
    aspectRatio: 'square',
    description: 'Clean auth screens with frictionless input validation.',
    tags: ['UI/UX', 'Mobile', 'Auth'],
    published: true,
    order: 39,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631111856',
    title: 'Creative Brand Poster',
    category: 'Branding',
    imageUrl: '/uploads/design-11-1787640790130-nts3ma.jpg',
    aspectRatio: 'square',
    description: 'Visual identity poster with custom typography and brand elements.',
    tags: ['Branding', 'Poster', 'Design'],
    published: true,
    order: 38,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631094966',
    title: 'Graphic Concept Art',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-12-1787640790134-4jcpes.jpg',
    aspectRatio: 'square',
    description: 'Creative design exploration with crisp visual hierarchy.',
    tags: ['Design', 'Creative'],
    published: true,
    order: 37,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631057369',
    title: 'Editorial Typography Layout',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-13-1787640790138-4lzuru.jpg',
    aspectRatio: 'square',
    description: 'Editorial layout exploring modern Swiss typography rhythm.',
    tags: ['Typography', 'Layout'],
    published: true,
    order: 36,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787631020503',
    title: 'Promotional Brand Series',
    category: 'Branding',
    imageUrl: '/uploads/design-14-1787640790143-tcitb8.jpg',
    aspectRatio: 'square',
    description: 'Promotional creative with sharp visual impact and brand styling.',
    tags: ['Branding', 'Poster', 'Creative'],
    published: true,
    order: 35,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630984227',
    title: 'Modern Brand Identity Visual',
    category: 'Branding',
    imageUrl: '/uploads/design-15-1787640790147-q9xoyj.jpg',
    aspectRatio: 'square',
    description: 'High-contrast visual design for brand awareness.',
    tags: ['Branding', 'Identity', 'Creative'],
    published: true,
    order: 34,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630959652',
    title: 'Digital Art Creative',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-16-1787640790151-3gy0iw.jpg',
    aspectRatio: 'square',
    description: 'Digital illustration and graphic treatment.',
    tags: ['Art', 'Design'],
    published: true,
    order: 33,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630942427',
    title: 'Experimental Poster',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-17-1787640790154-v5ua4k.jpg',
    aspectRatio: 'square',
    description: 'Experimental graphic composition.',
    tags: ['Experimental', 'Design'],
    published: true,
    order: 32,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630924713',
    title: 'Brand Identity & Logomark Design',
    category: 'Branding',
    imageUrl: '/uploads/design-18-1787640790158-m01ntq.jpg',
    aspectRatio: 'square',
    description: 'Identity system and logo execution.',
    tags: ['Branding', 'Identity', 'Logo'],
    published: true,
    order: 31,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630904887',
    title: 'Urban Poster Art',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-19-1787640790162-ixlo9t.jpg',
    aspectRatio: 'square',
    description: 'Urban culture graphic poster.',
    tags: ['Poster', 'Urban'],
    published: true,
    order: 30,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630888591',
    title: 'Visual Brand Identity System',
    category: 'Branding',
    imageUrl: '/uploads/design-20-1787640790167-lbuswn.jpg',
    aspectRatio: 'square',
    description: 'Geometric brand identity concept and collateral design.',
    tags: ['Branding', 'Identity', 'System'],
    published: true,
    order: 29,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630864238',
    title: 'Creative Campaign Asset',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-21-1787640790171-f2hxa2.jpg',
    aspectRatio: 'square',
    description: 'Multi-format creative asset.',
    tags: ['Campaign', 'Asset'],
    published: true,
    order: 28,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630845090',
    title: 'Graphic Identity Mockup',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-22-1787640790175-kuif4j.jpg',
    aspectRatio: 'square',
    description: 'Graphic showcase with high detail.',
    tags: ['Mockup', 'Graphic'],
    published: true,
    order: 27,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630781539',
    title: 'Creator Video Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-23-1787640790178-c8kxji.jpg',
    aspectRatio: '16:9',
    description: 'Creator thumbnail with vibrant gradient lighting.',
    tags: ['Thumbnails', 'YouTube'],
    published: true,
    order: 26,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630758761',
    title: 'Podcast Cover Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-24-1787640790182-ftf49z.jpg',
    aspectRatio: '16:9',
    description: 'Podcast episode thumbnail design.',
    tags: ['Thumbnails', 'Podcast'],
    published: true,
    order: 25,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630738859',
    title: 'Gaming Stream Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-25-1787640790187-9v43r8.jpg',
    aspectRatio: '16:9',
    description: 'High-intensity gaming stream banner.',
    tags: ['Thumbnails', 'Gaming'],
    published: true,
    order: 24,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630719315',
    title: 'Tech Review Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-26-1787640790192-suioff.jpg',
    aspectRatio: '16:9',
    description: 'Tech hardware review thumbnail.',
    tags: ['Thumbnails', 'Tech'],
    published: true,
    order: 23,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630696612',
    title: 'Tutorial Video Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-27-1787640790195-4psoj2.jpg',
    aspectRatio: '16:9',
    description: 'Step-by-step tutorial thumbnail.',
    tags: ['Thumbnails', 'Tutorial'],
    published: true,
    order: 22,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630669600',
    title: 'Reaction & Review Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-28-1787640790198-2dwj5x.jpg',
    aspectRatio: '16:9',
    description: 'Engaging reaction video thumbnail.',
    tags: ['Thumbnails', 'YouTube'],
    published: true,
    order: 21,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630607225',
    title: 'Business & Finance Thumbnail',
    category: 'Thumbnails',
    imageUrl: '/uploads/design-29-1787640790202-s3l422.jpg',
    aspectRatio: '16:9',
    description: 'Financial education thumbnail.',
    tags: ['Thumbnails', 'Finance'],
    published: true,
    order: 20,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630535788',
    title: 'Instagram Carousel Slide 1',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-30-1787640790205-amfxjs.jpg',
    aspectRatio: 'square',
    description: 'Carousel slide for social engagement.',
    tags: ['Social Media', 'Carousel'],
    published: true,
    order: 18,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630519132',
    title: 'Brand Story Post',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-31-1787640790214-4q83k3.jpg',
    aspectRatio: 'square',
    description: 'Brand narrative social media post.',
    tags: ['Social Media', 'Branding'],
    published: true,
    order: 17,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630500568',
    title: 'Product Launch Post',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-32-1787640790218-xldpou.jpg',
    aspectRatio: 'square',
    description: 'Launch announcement creative.',
    tags: ['Social Media', 'Launch'],
    published: true,
    order: 16,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630369281',
    title: 'Festival / Event Social Post',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-33-1787640790222-iwkva2.jpg',
    aspectRatio: 'square',
    description: 'Event announcement poster.',
    tags: ['Social Media', 'Event'],
    published: true,
    order: 15,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630353087',
    title: 'Promotional Deal Post',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-34-1787640790228-ahse91.jpg',
    aspectRatio: 'square',
    description: 'Offer campaign visual.',
    tags: ['Social Media', 'Promo'],
    published: true,
    order: 14,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630340967',
    title: 'Creative Story Graphic',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-35-1787640790232-p4ik1y.jpg',
    aspectRatio: 'square',
    description: 'Social story visual asset.',
    tags: ['Social Media', 'Story'],
    published: true,
    order: 13,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630278285',
    title: 'Social Engagement Creative',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-36-1787640790236-n5z7is.jpg',
    aspectRatio: 'square',
    description: 'Audience poll and engagement post.',
    tags: ['Social Media', 'Creative'],
    published: true,
    order: 12,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630235838',
    title: 'Modern Art Poster',
    category: 'Graphic Designs',
    imageUrl: '/uploads/design-37-1787640790239-8cwd9n.jpg',
    aspectRatio: 'square',
    description: 'Contemporary poster artwork.',
    tags: ['Graphic Design', 'Art'],
    published: true,
    order: 11,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1787630167116',
    title: 'Typography Quote Post',
    category: 'Social Media Posts',
    imageUrl: '/uploads/design-38-1787640790243-f6jc2v.jpg',
    aspectRatio: 'square',
    description: 'Inspiring typographic social quote.',
    tags: ['Typography', 'Social Media'],
    published: true,
    order: 10,
    createdAt: '2026-08-25'
  },
  {
    id: 'des-1',
    title: 'Coffee Website Landing Page',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-39-1787640790246-bad06u.jpg',
    aspectRatio: 'landscape',
    description: 'Coffee Landing Page with artisanal aesthetic and fluid e-commerce cart.',
    tags: ['UI/UX', 'Landing Page', 'Coffee', 'Web Design'],
    published: true,
    order: 1,
    createdAt: '2026-01-15'
  },
  {
    id: 'des-2',
    title: 'GreenPlant Botanicals Website',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-40-1787640790255-fi2a04.jpg',
    aspectRatio: 'landscape',
    description: 'Green Plant Landing Page with clean typography and organic color palette.',
    tags: ['UI/UX', 'Web Design', 'E-Commerce', 'Branding'],
    published: true,
    order: 2,
    createdAt: '2026-02-01'
  },
  {
    id: 'des-3',
    title: 'CarUp Automotive & Travels Platform',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-41-1787640790274-k7rcxc.jpg',
    aspectRatio: 'landscape',
    description: 'CarUp Landing Page for modern automotive rentals and fleet booking.',
    tags: ['UI/UX', 'Automotive', 'Web App'],
    published: true,
    order: 3,
    createdAt: '2025-11-20'
  },
  {
    id: 'des-4',
    title: 'StyleSync E-Commerce Mobile App',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-42-1787640790278-armwjy.jpg',
    aspectRatio: 'square',
    description: 'StyleSync E-Commerce Mobile App with personalized curation.',
    tags: ['UI/UX', 'Mobile App', 'E-Commerce'],
    published: true,
    order: 4,
    createdAt: '2025-12-05'
  },
  {
    id: 'des-5',
    title: 'Mastering Action Bars — UI/UX Guide',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-43-1787640790280-8bt0ff.jpg',
    aspectRatio: 'square',
    description: 'Action Bar Guide illustrating best practices for navigation bars.',
    tags: ['UI/UX', 'Design System', 'Guidelines'],
    published: true,
    order: 5,
    createdAt: '2026-01-28'
  },
  {
    id: 'des-6',
    title: 'Login Form Guidelines & Brand Heuristics',
    category: 'Branding',
    imageUrl: '/uploads/design-44-1787640790281-0ecogy.jpg',
    aspectRatio: 'square',
    description: 'Comprehensive login form guide detailing accessibility and brand design guidelines.',
    tags: ['Branding', 'Form Design', 'Guidelines'],
    published: true,
    order: 6,
    createdAt: '2025-10-12'
  },
  {
    id: 'des-7',
    title: 'IRCTC Rail Connect App (Re-Design)',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-45-1787640790285-krkoa7.jpg',
    aspectRatio: '16:9',
    description: 'IRCTC Rail Connect App redesign simplifying ticket booking.',
    tags: ['UI/UX', 'Redesign', 'Mobile App'],
    published: true,
    order: 7,
    createdAt: '2026-02-10'
  },
  {
    id: 'des-8',
    title: 'Campus Portal & College Login Screen',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-46-1787640790288-3h2uqm.jpg',
    aspectRatio: 'portrait',
    description: 'Sleek academic portal login interface.',
    tags: ['UI/UX', 'Portal', 'Login'],
    published: true,
    order: 8,
    createdAt: '2025-09-18'
  },
  {
    id: 'des-9',
    title: 'Jarvis AI Assistant Interface',
    category: 'UI/UX Designs',
    imageUrl: '/uploads/design-47-1787640790290-0fqnbb.jpg',
    aspectRatio: 'portrait',
    description: 'Jarvis Home Screen with neural voice graph and AI automation cards.',
    tags: ['UI/UX', 'AI', 'Futuristic UI'],
    published: true,
    order: 9,
    createdAt: '2025-08-22'
  }
];

export const initialVideos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'VentureLab OS — Interactive Prototype',
    category: 'UI/UX & Motion',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    duration: '0:45',
    description: 'High-fidelity Figma & ProtoPie interaction recording showing fluid state changes.',
    published: true,
    order: 1
  }
];
