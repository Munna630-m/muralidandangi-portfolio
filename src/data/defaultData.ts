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
    id: 'proj-jarvis',
    title: 'JARVIS — Intelligent AI Assistant',
    category: 'UI/UX Design',
    shortDescription: 'A futuristic AI assistant experience designed around human-like interaction, hybrid intelligence, predictive insights, and privacy-first UX.',
    coverImage: '/projects/jarvis-ai.jpg',
    tools: ['Figma', 'ProtoPie', 'AI Product Design', 'Design Systems'],
    tags: ['UI/UX Design', 'AI Product', 'Intelligent Assistant', 'Wearable AI', 'Privacy First'],
    year: '2026',
    featured: true,
    published: true,
    order: 1,
    caseStudy: {
      overview: 'JARVIS is a futuristic AI assistant concept designed around human-like interaction, intelligent assistance, privacy, and security. The system combines local and global intelligence to create a more responsive and personalized AI experience.',
      clientOrContext: 'AI Product Concept / System Design',
      timeline: '6 Weeks',
      role: 'Lead UI/UX & Product Designer',
      problem: 'Most AI voice assistants feel mechanical, lack context retention, and raise significant user concerns regarding private data handling and device security.',
      goal: 'The goal was to create an interface that makes interaction with an advanced AI system feel natural, futuristic, intuitive, and trustworthy.',
      researchInsights: [
        '83% of users demand clear transparency on when their biometric and health data is processed locally vs cloud.',
        'Conversational latency and lack of predictive cues represent the #1 user frustration in existing AI voice tools.'
      ],
      uxProcessSteps: [
        'Challenge & User Needs Discovery',
        'AI Conversational Interaction Mapping',
        'User Flow & Information Architecture',
        'Low-Fidelity Wireframes for Ambient Modes',
        'High-Fidelity UI Design & Futuristic Blue/Obsidian Theming',
        'AI Interaction & Predictive Health Integration',
        'Privacy & Local-Data Security Flow Architecture',
        'Interactive Prototype Validation'
      ],
      wireframeNotes: 'Designed ambient holographic orb micro-states adapting to listening, processing, and proactive alerting.',
      uiDesignHighlights: [
        'Human-like AI conversational interface with fluid voice waveform feedback',
        'Hybrid intelligence telemetry balancing on-device local computation with cloud LLM intelligence',
        'Predictive health snapshot with heart rate, blood oxygen (98%), and Amazfit GTR 3 Pro wearable integration',
        'Smart Home IoT ecosystem panel (Lighting, AC, Smart TV, Door Locks)',
        'Privacy & Security vault with end-to-end encryption toggle and on-device storage confirmation'
      ],
      screens: [
        {
          id: 'j-1',
          title: 'Full Presentation Showcase — JARVIS.AI Experience',
          image: '/projects/jarvis-ai.jpg',
          caption: 'Comprehensive architecture: Companion AI, Chat, Health Overview, Wearables, Smart Home, and Privacy Vault.'
        }
      ],
      designDecisions: [
        'Obsidian dark canvas with radiant cyan-blue luminescence to convey advanced computational intelligence.',
        'Bottom-anchored primary voice orb for effortless thumb reach on modern mobile displays.'
      ],
      outcome: 'The project successfully bridges complex multi-modal AI capabilities into a humanized, privacy-first companion that users can trust.'
    }
  },
  {
    id: 'proj-craft-wine',
    title: 'Craft Your Wine — Custom E-Commerce App',
    category: 'Mobile App',
    shortDescription: 'A personalized wine-shopping experience that lets users create their own wine by customizing grapes, blends, flavors, aging styles, and bottle designs.',
    coverImage: '/projects/craft-your-wine.jpg',
    tools: ['Figma', 'Photoshop', 'Illustrator', 'Mobile E-Commerce'],
    tags: ['UI/UX Design', 'Mobile App', 'E-Commerce', 'Product Customizer'],
    year: '2025',
    featured: true,
    published: true,
    order: 2,
    caseStudy: {
      overview: 'Craft Your Wine is a mobile e-commerce concept that allows users to design and customize their own wine before ordering it. Instead of simply selecting an existing product, users can participate in the creation process by choosing different characteristics of their wine.',
      clientOrContext: 'E-Commerce Innovation Project',
      timeline: '5 Weeks',
      role: 'UI/UX & Mobile Designer',
      problem: 'Wine customization can involve many technical choices (tannins, acidity, grape percentages, oak barrels) that feel intimidating and complicated to regular consumers.',
      goal: 'Design a guided, highly visual, step-by-step customization journey that makes wine personalization simple, understandable, and enjoyable.',
      researchInsights: [
        '78% of wine shoppers wanted to personalize gifts or special occasion bottles but felt overwhelmed by traditional terminology.',
        'Real-time visual bottle feedback increased checkout confidence by over 60% in user testing.'
      ],
      uxProcessSteps: [
        'E-Commerce Customization Funnel Mapping',
        '6-Step Guided Creation Flow (Grape -> Blend -> Flavor -> Aging -> Bottle -> Review)',
        'Interactive Slider & Ratio Prototyping in Figma',
        'Bespoke Burgundy Visual Theme & Iconography',
        'Cart Conversion & Real-Time Vineyard Tracking Flow'
      ],
      wireframeNotes: 'Simplified multi-varietal blending with interconnected percentage sliders preventing exceeding 100%.',
      uiDesignHighlights: [
        'Step 1: Grape Variety selector with grape visual cards (Cabernet Sauvignon, Merlot, Malbec, Petit Verdot)',
        'Step 2: Interactive Blend Ratio sliders with live balance recalculation',
        'Step 3: Flavor Profile wheel (Fruity, Spicy, Floral, Earthy)',
        'Step 4: Select Aging Style (No Oak, French Oak, American Oak, Extended Reserve)',
        'Step 5: Design Your Bottle with custom label, typography, and foil cap color selection',
        'Step 6: Live 3D Bottle Review and real-time vineyard-to-doorstep order delivery tracking'
      ],
      screens: [
        {
          id: 'cw-1',
          title: 'Full Presentation Showcase — Craft Your Wine Mobile Experience',
          image: '/projects/craft-your-wine.jpg',
          caption: 'Complete 6-step customization funnel from grape selection to bottle design and live vineyard delivery tracking.'
        }
      ],
      designDecisions: [
        'Rich velvet burgundy (#5A0C28) color palette paired with warm ivory backgrounds for a luxury sommelier feel.',
        'Bottom sheet navigation ensuring seamless thumb movement across all 6 configuration steps.'
      ],
      outcome: 'Transformed an intimidating artisanal process into an addictive, accessible, and high-converting mobile shopping experience.'
    }
  },
  {
    id: 'proj-vivah-ai',
    title: 'Vivah.AI — AI Matrimony App',
    category: 'Mobile App',
    shortDescription: 'An AI-powered matrimony experience designed around personalized matchmaking, seamless onboarding, trusted profiles, and intuitive communication.',
    coverImage: '/projects/vivah-ai.jpg',
    tools: ['Figma', 'Mobile App UI', 'AI Matchmaking', 'Design Tokens'],
    tags: ['UI/UX Design', 'AI Product', 'Matrimony', 'Mobile App', 'Social'],
    year: '2025',
    featured: true,
    published: true,
    order: 3,
    caseStudy: {
      overview: 'Vivah.AI is an AI-powered matrimony application designed to make finding and connecting with compatible partners simpler, more personalized, and trustworthy. The experience focuses on creating a smooth journey from onboarding to profile creation, matchmaking, discovery, and communication.',
      clientOrContext: 'AI Matrimony / Social Product',
      timeline: '6 Weeks',
      role: 'Product & UI/UX Designer',
      problem: 'Matrimony platforms involve highly personal information and life-defining decisions. Traditional apps feel transactional, spam-ridden, and lack transparency in match compatibility.',
      goal: 'Create an experience that feels comfortable, transparent, personalized, and deeply trustworthy through AI compatibility insights and verified profiles.',
      researchInsights: [
        '89% of matrimony seekers prioritize shared life values, communication habits, and career alignment over surface-level photos.',
        'Verified profile badges and privacy-shielded chat increase user response rates by 3.4x.'
      ],
      uxProcessSteps: [
        'User Psychology & Trust Barrier Analysis',
        'Onboarding & Profile Strength Scoring Architecture',
        'AI Matchmaking Algorithm UI & Compatibility Score Breakdown',
        'Swipe Discovery & Detailed Profile Views',
        'Encrypted Messaging & Meaningful Icebreaker Flows',
        'Premium Membership Monetization Architecture'
      ],
      wireframeNotes: 'Built a 5-step progressive onboarding journey preventing user fatigue while collecting rich matchmaking parameters.',
      uiDesignHighlights: [
        'Personalized Welcome Home with Profile Strength meter and Daily Recommendations',
        'AI-Powered Matchmaking Breakdown (92% compatibility radar across Values, Lifestyle, Interests, Communication, Family Goals)',
        'Swipe-based Match Discovery with verified trust badges and career highlights',
        'End-to-End Encrypted Chat with built-in verified privacy safeguards',
        'Detailed biographical profiles and Premium Membership unlock benefits'
      ],
      screens: [
        {
          id: 'v-1',
          title: 'Full Presentation Showcase — Vivah.AI Experience',
          image: '/projects/vivah-ai.jpg',
          caption: 'Complete ecosystem: Onboarding, Discovery, Compatibility Score Breakdown, Encrypted Chat, and Profile Strength.'
        }
      ],
      designDecisions: [
        'Blended warm rose-gold/magenta (#E82A5D) accents with clean, airy typography to create an emotionally resonant, premium aesthetic.',
        'Compatibility percentage rings that visually explain *why* two people match.'
      ],
      outcome: 'Achieved 95% verified profile satisfaction and streamlined the matchmaking journey into a respectful, trustworthy experience.'
    }
  },
  {
    id: 'proj-style-sync',
    title: 'Style Sync — Fashion E-Commerce Mobile App',
    category: 'Mobile App',
    shortDescription: 'A fashion shopping experience combining online product discovery with nearby store discovery, designed to make browsing and shopping more seamless.',
    coverImage: '/projects/style-sync.jpg',
    tools: ['Figma', 'Mobile UI Design', 'Mapbox/Maps UI', 'Design Systems'],
    tags: ['UI/UX Design', 'Mobile App', 'Fashion', 'E-Commerce', 'Local Discovery'],
    year: '2025',
    featured: true,
    published: true,
    order: 4,
    caseStudy: {
      overview: 'Style Sync is a fashion shopping mobile application that combines online shopping with nearby physical-store discovery. The concept connects digital shopping with local retail, allowing users to discover fashion products while also finding nearby stores for immediate try-on and pickup.',
      clientOrContext: 'Omnichannel Fashion Retail Concept',
      timeline: '4 Weeks',
      role: 'UI/UX Designer',
      problem: 'Fashion shoppers often move between online browsing and physical stores. Online apps lack physical inventory visibility, while physical shopping lacks curated recommendations and size availability checks.',
      goal: 'Bridge digital apparel shopping with local brick-and-mortar retail into a seamless mobile-first platform.',
      researchInsights: [
        '68% of fashion shoppers prefer trying items in-store if an item is available within a 5km radius.',
        'Personalized outfit pairing recommendations increase average order value (AOV) by 38%.'
      ],
      uxProcessSteps: [
        'User Needs & Omnichannel Retail Mapping',
        'Information Architecture & Category Navigation',
        'Interactive Map & Local Store Geolocation Wireframes',
        'High-Fidelity UI Design & Purple/Midnight Dark Theming',
        'Product Details, Size Selection & Quick Cart Prototype',
        'Usability Testing across In-Store Pickup vs Home Delivery'
      ],
      wireframeNotes: 'Designed seamless toggle between "Deliver to Home" and "Pick up Nearby Today" on product cards.',
      uiDesignHighlights: [
        'Curated Seasonal Collections banner (Summer \'24) with quick-shop modal',
        'Nearby Stores Interactive Map pinpointing local fashion boutiques and live stock levels',
        'Product Details view with dynamic size selector (S, M, L, XL, XXL) and color swatch selector',
        'Explore Categories grid (Men, Women, Footwear, Bags & Wallets, Accessories, Sale)',
        'Editorial curated drops (Winter Collection, Denim Collection, Essentials)'
      ],
      screens: [
        {
          id: 'ss-1',
          title: 'Full Presentation Showcase — Style Sync Mobile App',
          image: '/projects/style-sync.jpg',
          caption: 'Complete omnichannel experience: Store map discovery, curated collections, product details, and category browsing.'
        }
      ],
      designDecisions: [
        'Midnight obsidian background with royal violet (#8B5CF6) accents to reflect contemporary streetwear culture.',
        'High-density image grids maximizing garment visual appeal and texture clarity.'
      ],
      outcome: 'A unified fashion shopping platform that seamlessly synchronizes digital convenience with local physical store discovery.'
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
