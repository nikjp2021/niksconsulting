export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'OzynicDress',
    content:
      'Niks Consulting transformed our online presence completely. Their AI-powered social media strategy doubled our sales within the first quarter. The team truly understands how to leverage technology for business growth.',
    rating: 5,
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Minh Nguyen',
    role: 'Operations Manager',
    company: 'Yoda Pizza Vietnam',
    content:
      'The digital transformation strategy they delivered was exceptional. Our online orders tripled and we now dominate local search results. Their AI-driven approach to SEO and customer engagement is game-changing.',
    rating: 5,
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Giuliana Costa',
    role: 'Owner',
    company: 'Dona Gi Bolos',
    content:
      'From zero digital presence to a thriving online business. The AI automation for our WhatsApp orders alone transformed how we operate. Nikhil and his team guided us through every step of our digital transformation.',
    rating: 5,
    avatar: '/images/avatar-3.jpg',
  },
];
