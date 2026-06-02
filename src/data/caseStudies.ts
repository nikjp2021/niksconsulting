export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'vietnam-pizza-house',
    title: 'Yoda Pizza Vietnam: Dominating Online Recommendations',
    client: 'Yoda Pizza',
    location: 'Vietnam',
    category: 'Digital Transformation',
    challenge:
      'A growing pizza chain in Vietnam needed to dominate local search results and online food delivery platforms to compete in a saturated market.',
    solution:
      'Implemented a full digital transformation including SEO optimization, Google Business Listing management, AI-powered review monitoring, and a responsive online ordering platform with intelligent recommendations.',
    results: [
      'Top 3 Google ranking for local pizza searches',
      '300% increase in online orders within 3 months',
      'AI-powered recommendations increased average order value by 25%',
    ],
    image: '/images/case-pizza.jpg',
    tags: ['SEO', 'Digital Transformation', 'AI'],
  },
  {
    id: 'african-fashion-usa',
    title: 'OzynicDress: Building an Exclusive Brand Around African Culture',
    client: 'OzynicDress',
    location: 'USA',
    category: 'Brand & E-commerce',
    challenge:
      'An African fashion designer based in the USA needed a distinctive online brand identity and e-commerce platform to showcase unique cultural fashion designs to a global audience.',
    solution:
      'Created a visually stunning e-commerce website celebrating African aesthetics, integrated AI-powered product recommendations, social media automation for Instagram/TikTok, and personalized email marketing campaigns.',
    results: [
      '200% increase in online sales',
      'Expanded customer base to 15+ countries',
      'AI-driven social media strategy drove 40% of total traffic',
    ],
    image: '/images/case-fashion.jpg',
    tags: ['E-commerce', 'Branding', 'AI Social Media'],
  },
  {
    id: 'brazil-bakery',
    title: 'Dona Gi Bolos: Achieving Success Through SEO & Digital Marketing',
    client: 'Dona Gi Bolos',
    location: 'Brazil',
    category: 'SEO & Digital Marketing',
    challenge:
      'A traditional Brazilian bakery wanted to modernize their business and reach more customers through digital channels, moving beyond their local walk-in customer base.',
    solution:
      'Implemented comprehensive SEO strategy, Google Business optimization, WhatsApp Business automation for orders, AI-powered social media content creation, and local digital marketing campaigns.',
    results: [
      '150% increase in new customer acquisition',
      'WhatsApp automated ordering became 60% of total orders',
      'Local search visibility increased 4x',
    ],
    image: '/images/case-bakery.jpg',
    tags: ['SEO', 'WhatsApp Automation', 'Local Marketing'],
  },
];
