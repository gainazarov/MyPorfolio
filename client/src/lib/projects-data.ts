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
    description: 'A comprehensive real estate platform for a construction company, featuring dynamic apartment filters, project showcase, PDF generation, and deep integration with Telegram and CRM.',
    image: '/projects/tojsokhtmon.png',
    techStack: [
      'Next.js',
      'React',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Swiper.js',
      'EmailJS',
      'html2canvas',
      'jsPDF',
      'Sass'
    ],
    features: [
      'Server-Side Rendering (SSR) for all main pages',
      'Multilingual support (RU / TJ)',
      'Real-time filtering for apartments, buildings, and commercial spaces',
      'Interactive chessboard (floor plan) with availability status',
      'Dynamic apartment detail page with PDF export',
      'Web Share API integration for mobile sharing',
      'Credit calculator with flexible down payment options',
      'Full integration with Telegram bot (leads, news, objects)',
      'Dynamic SEO metadata for Open Graph & search engines',
      'Client request form with EmailJS integration',
      'Admin-driven news and promotions with clickable links',
      'Customer key transfer calendar with filters',
      'Commercial units filtering by price, area, floor',
      'Lazy loading images and performance optimizations',
      'Responsive design with mobile-first approach',
      'Feedback forms tied to context (object / apartment)'
    ],
    role: 'FULL_STACK_DEVELOPER, PRODUCT_MANAGER, DATABASE_ARCHITECT, DEVOPS'
  },
  {
    id: 'salvador-shop',
    name: 'SALVADORISHOP.RU',
    description: 'A premium e-commerce platform for luxury apparel and footwear, offering a sleek user experience, dynamic product catalog, and a smooth checkout process with admin controls.',
    image: '/projects/salvadori.png',
    techStack: [
      'React',
      'Django REST Framework',
      'PostgreSQL',
      'Sass',
      'Swiper.js',
      'Formik',
      'Yup',
      'React Router',
      'Axios'
    ],
    features: [
      'Dynamic product catalog with filtering by category, size, and price',
      'Shopping cart with persistent state and quantity adjustments',
      'Step-by-step checkout process with form validation',
      'Responsive design with emphasis on mobile usability',
      'Admin interface for product, category, and order management',
      'SEO-friendly routing and metadata setup',
      'Integration with payment gateway (Stripe or YooMoney)',
      'Product image slider with zoom on hover',
      'Lazy loading for product images',
      'Email notifications for order confirmation and status updates',
      'Promo code support and discount calculations',
      '404 and empty state pages for better UX',
      'Performance-optimized rendering and asset loading'
    ],
    role: 'FULL_STACK_DEVELOPER, UI_UX_DESIGNER, DATABASE_ARCHITECT, DEVOPS'
  },
  {
    id: 'wellcom-spb',
    name: 'WELLCOMSPB.RU',
    description: 'A multilingual educational platform for an English language school, enabling course and teacher management with a structured CMS and responsive design for both learners and administrators.',
    image: '/projects/wellcom.png',
    techStack: [
      'React',
      'Django REST Framework',
      'PostgreSQL',
      'Sass',
      'React Router',
      'Formik',
      'Yup',
      'Axios',
      'TinyMCE'
    ],
    features: [
      'Course management with categorization and multilingual support',
      'Teacher profiles with bios, subjects, and availability',
      'CMS-like admin dashboard for managing pages and content',
      'Multilingual interface (RU / EN)',
      'Adaptive content editor using TinyMCE',
      'Responsive layout for desktop and mobile devices',
      'Authentication system for administrators and teachers',
      'SEO-friendly URLs and metadata setup',
      'Contact form with form validation and server submission',
      'Dynamic course cards with filtering by category and level',
      'Gallery and news modules for content marketing',
      'Email integration for contact and feedback forms'
    ],
    role: 'FULL_STACK_DEVELOPER, UI_UX_DESIGNER, DATABASE_ARCHITECT, DEVOPS'
  },
 {
    id: 'ziyominds',
    name: 'ZIYOMINDS',
    description: 'A next-gen modular learning platform tailored for Central Asia, combining structured roadmaps, real-time mentoring, and multilingual educational content within a scalable digital ecosystem.',
    image: '/projects/crm1.png',
    techStack: [
      'React',
      'Next.js',
      'Django REST Framework',
      'PostgreSQL',
      'WebRTC',
      'Socket.io',
      'Redis',
      'Tailwind CSS',
      'Formik',
      'Yup',
      'Docker'
    ],
    features: [
      'Role-based dashboards for teachers, students, and admins',
      'Interactive roadmaps with progress tracking',
      'Real-time 1:1 mentoring sessions via WebRTC',
      'Modular learning paths with dynamic course creation',
      'Multilingual content support (EN / RU / TJ)',
      'Student profiles with achievements and progress metrics',
      'Lesson scheduling with calendar integration',
      'Assignment uploads and feedback workflows',
      'Admin panel for course and user management',
      'Mobile-first design for accessibility across devices',
      'Gamification elements: badges, levels, points',
      'Notifications system for lessons and deadlines',
      'Secure authentication and role-based access control',
      'Data analytics for student performance and engagement'
    ],
    role: 'STARTUP_FOUNDER, FULL_STACK_DEVELOPER, UI_UX_DESIGNER, DATABASE_ARCHITECT, DEVOPS'
  }
];
