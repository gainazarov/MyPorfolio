export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  role: string;
}

export const projects: Project[] = [
  {
    id: 'toj-sokhtmon',
    name: 'TOJSOKHTMON.TJ',
    description: 'A robust real estate ecosystem for a construction company.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Django', 'PostgreSQL', 'Redis'],
    features: [
      'Real-time filtering',
      'Multilingual support',
      'PDF generation',
      'CRM sync',
      'Telegram bot',
      'SSR'
    ],
    role: 'FULL_STACK_DEVELOPER'
  },
  {
    id: 'salvador-shop',
    name: 'SALVADORISHOP.RU',
    description: 'A premium online store for luxury apparel & footwear.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Django'],
    features: [
      'Full catalog system',
      'Shopping cart',
      'Checkout flow',
      'Admin interface',
      'Mobile-first UI'
    ],
    role: 'FRONTEND_LEAD'
  },
  {
    id: 'wellcom-spb',
    name: 'WELLCOMSPB.RU',
    description: 'Educational platform for an English language school.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Django'],
    features: [
      'Course management',
      'Teacher management',
      'Multilingual pages',
      'CMS structure'
    ],
    role: 'FULL_STACK_DEVELOPER'
  },
  {
    id: 'ziyominds',
    name: 'ZIYOMINDS',
    description: 'Next-gen learning platform for Central Asia.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
    features: [
      'Roadmaps',
      'Mentoring',
      'Modular education',
      'Teacher dashboards'
    ],
    role: 'PRODUCT_MANAGER'
  },
  {
    id: 'nomus',
    name: 'NOMUS',
    description: 'Digital government services platform (GovTech).',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Docker'],
    features: [
      'Secure document handling',
      'Online applications',
      'Legal services',
      'Digital signatures'
    ],
    role: 'FULL_STACK_DEVELOPER'
  }
];
