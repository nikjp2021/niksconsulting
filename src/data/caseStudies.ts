import { images } from './images';

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
    image: images.caseStudies.yodaPizza,
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
    image: images.caseStudies.ozynicDress,
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
    image: images.caseStudies.donaGi,
    tags: ['SEO', 'WhatsApp Automation', 'Local Marketing'],
  },
  {
    id: 'health-tech-japan',
    title: 'MediConnect Japan: AI-Powered Patient Triage',
    client: 'MediConnect',
    location: 'Japan',
    category: 'Health Tech AI',
    challenge:
      'A telehealth startup in Japan struggled with long patient wait times and inefficient triage. Manual assessment of symptoms was creating bottlenecks, causing patients to wait hours for initial consultations.',
    solution:
      'Deployed an AI-powered triage agent that assesses patient symptoms in real-time, prioritizes cases by urgency, and routes patients to the appropriate specialist. Integrated with existing EHR systems and added multilingual support for international patients.',
    results: [
      '70% reduction in patient wait times',
      'AI triage accuracy rate of 94%',
      'Expanded to serve 3 additional prefectures within 6 months',
      'Patient satisfaction score increased from 3.2 to 4.7/5',
    ],
    image: images.caseStudies.case4,
    tags: ['Health Tech', 'Agentic AI', 'Japan'],
  },
  {
    id: 'ecommerce-brazil',
    title: 'ModaExpress: End-to-End E-Commerce Automation',
    client: 'ModaExpress',
    location: 'Brazil',
    category: 'E-Commerce Automation',
    challenge:
      "A fast-growing Brazilian fashion e-commerce brand was drowning in manual operations — inventory management, customer support, order processing, and social media posting consumed 80% of the team's time.",
    solution:
      'Built an integrated AI automation pipeline: smart inventory forecasting, AI chatbot for customer support in Portuguese, automated order processing with fraud detection, and AI-powered social media scheduling with trend analysis.',
    results: [
      '80% reduction in manual operational tasks',
      'Customer response time dropped from 4 hours to 2 minutes',
      'AI-driven inventory forecasting reduced overstock by 35%',
      'Social media engagement increased 250% with AI content',
    ],
    image: images.caseStudies.case5,
    tags: ['E-Commerce', 'AI Automation', 'Brazil'],
  },
  {
    id: 'saas-usa',
    title: 'DataFlow Analytics: Building an AI-Native SaaS Platform',
    client: 'DataFlow Analytics',
    location: 'USA',
    category: 'SaaS Development',
    challenge:
      'A US-based analytics startup needed to build a minimum viable product (MVP) for their AI-powered business intelligence platform. They had the vision but lacked the technical team to execute within their 4-month runway.',
    solution:
      'Assembled a dedicated team and built the entire SaaS platform from scratch: AI-powered data ingestion, natural language query interface, automated report generation, and a stunning dashboard UI. Delivered MVP in 12 weeks using agile sprints.',
    results: [
      'MVP delivered 2 weeks ahead of schedule',
      'Secured $1.5M seed funding within 2 months of launch',
      'Onboarded 50+ enterprise beta users in first month',
      'Platform processes 10M+ data points daily',
    ],
    image: images.caseStudies.case6,
    tags: ['SaaS', 'AI Development', 'USA'],
  },
];
