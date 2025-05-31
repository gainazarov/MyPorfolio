import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";

export default function About() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const frontendSkills = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'GSAP',
    'Redux',
    'TypeScript',
    'Zustand',
    'React Hook Form',
    'Formik',
    'Yup',
    'React Router',
    'Axios',
    'Sass/SCSS',
    'Swiper.js',
    'Lazy Loading',
    'Web Share API',
    'Responsive Design',
    'SEO Optimization',
    'SSR / SSG',
    'Client-Side Routing'
  ];

  const backendSkills = [
    'Django',
    'Django REST Framework',
    'FastAPI',
    'PostgreSQL',
    'Redis',
    'REST API',
    'WebSockets',
    'Celery',
    'Python',
    'Authentication (JWT, OAuth2)',
    'Role-Based Access Control',
    'API Throttling & Rate Limiting',
    'File Uploads & Storage (S3-compatible)',
    'Admin Panel Customization',
    'Database Optimization',
    'Task Scheduling',
    'CORS / CSRF Protection'
  ];

  const devopsSkills = [
    'Linux',
    'Docker',
    'Docker Compose',
    'Git / GitHub',
    'GitHub Actions',
    'Nginx',
    'Gunicorn',
    'Certbot (SSL)',
    'OVH Servers',
    'Netlify',
    'Vercel',
    'PM2',
    'Systemd Services',
    'CI/CD Pipelines',
    'Domain & DNS Management',
    'Environment Variables'
  ];

  const docSkills = [
    'jsPDF',
    'html2canvas',
    'API-based PDF Generation',
    'PDF Layout Design',
    'PDF with Base64 Images',
    'Dynamic Table & Grid in PDF',
    'Custom Fonts & QR Codes in PDF',
    'PDF Export from React Components',
    'PDF Orientation Handling (Portrait / Landscape)'
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold mb-10 sm:mb-16 text-center break-words max-w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">{'>'}</span> {t.about.title}
        </motion.h2>

        <div className="flex flex-col gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            className="brutalist-card p-8 w-full"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-2xl font-bold text-accent mb-6">{t.about.whoAmI}</h3>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p className="font-mono text-accent italic">"{t.about.motto}"</p>
            </div>

            {/* Tech Stack Sections */}
            <div className="mt-8 space-y-6">
              <div>
                <h4 className="font-mono text-sm font-bold text-accent mb-3">FRONTEND:</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold text-accent mb-3">BACKEND:</h4>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold text-accent mb-3">DEVOPS:</h4>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold text-accent mb-3">DOCUMENTS:</h4>
                <div className="flex flex-wrap gap-2">
                  {docSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.3 + index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo & Stats */}
          <div className="space-y-6 w-full">
            {/* Developer workspace photo */}
            <motion.div
              className="brutalist-card p-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Developer workspace"
                className="w-full h-64 object-cover"
              />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="brutalist-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-3xl font-mono font-bold text-accent">50+</div>
                <div className="text-sm font-mono">{t.about.projects}</div>
              </motion.div>
              <motion.div
                className="brutalist-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-3xl font-mono font-bold text-accent">3+</div>
                <div className="text-sm font-mono">{t.about.experience}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
