export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Agentic AI',
    shortDesc: 'AI-powered solutions that automate, optimize, and transform your business operations.',
    description:
      'We design and deploy intelligent AI agents and agentic workflows that handle complex tasks autonomously — from customer support and lead qualification to data analysis and content generation. Our AI solutions integrate seamlessly with your existing tools and processes.',
    icon: 'brain',
    features: [
      'Custom AI agent development',
      'Agentic workflow automation',
      'AI-powered chatbots & virtual assistants',
      'Intelligent document processing',
      'AI-driven analytics & insights',
      'LLM integration & fine-tuning',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    shortDesc: 'Streamline operations with intelligent automation that learns and adapts.',
    description:
      'Transform manual, repetitive processes into intelligent automated workflows. We combine RPA, AI, and machine learning to build automation pipelines that reduce costs, eliminate errors, and free your team to focus on high-value work.',
    icon: 'bot',
    features: [
      'Business process automation',
      'Intelligent workflow orchestration',
      'AI-powered email & communication automation',
      'Automated data entry & processing',
      'Smart scheduling & resource allocation',
      'Integration with existing CRM & tools',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    shortDesc: 'Strategic DX initiatives that drive measurable growth for startups and SMEs.',
    description:
      'We guide businesses through digital evolution with pragmatic, lean strategies. From UX optimization to full-stack digital transformation, we help you modernize operations, reach new customers, and stay ahead of the competition.',
    icon: 'zap',
    features: [
      'DX strategy & roadmap development',
      'UX research & optimization',
      'Digital maturity assessment',
      'Cloud migration & modernization',
      'Data-driven growth strategies',
      'Change management & training',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'website-development',
    title: 'Website & App Development',
    shortDesc: 'Stunning, high-performance websites and apps built for the AI era.',
    description:
      'We create modern, responsive websites and applications with AI-first features — from intelligent search and personalization to AI-powered content delivery. Built with cutting-edge technology for speed, SEO, and conversion.',
    icon: 'globe',
    features: [
      'Modern web application development',
      'Mobile app development (iOS & Android)',
      'AI-enhanced UX (personalization, smart search)',
      'E-commerce & marketplace platforms',
      'Progressive Web Apps (PWA)',
      'Performance optimization & SEO',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ai-social-media',
    title: 'AI-Powered Social Media',
    shortDesc: 'Lean, AI-powered social media strategies for explosive growth and engagement.',
    description:
      'Leverage AI to create, schedule, and optimize social media content at scale. Our AI-driven approach analyzes trends, automates posting, generates engaging content, and provides actionable insights to maximize your social media ROI.',
    icon: 'share-2',
    features: [
      'AI content generation & curation',
      'Automated scheduling & publishing',
      'AI-powered audience analytics',
      'Sentiment analysis & trend detection',
      'Influencer identification & outreach',
      'Performance dashboards & reporting',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'agile-management',
    title: 'Agile Project Management',
    shortDesc: 'Proven agile methodologies to deliver projects faster with better outcomes.',
    description:
      'Our Agile Project Management services empower teams to deliver exceptional results using Scrum, Kanban, and Lean methodologies. We improve project visibility, flexibility, and collaboration — now enhanced with AI-powered project insights.',
    icon: 'kanban',
    features: [
      'Scrum & Kanban implementation',
      'Sprint planning & execution',
      'AI-powered project analytics',
      'Team coaching & training',
      'Process optimization',
      'Certified Scrum Master guidance',
    ],
    color: 'from-brand-500 to-cyan-500',
  },
];
