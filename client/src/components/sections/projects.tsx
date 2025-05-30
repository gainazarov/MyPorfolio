import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { projects } from "@/lib/projects-data";

export default function Projects() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const otherProjects = [
    'Wedding Landing Pages',
    'Telegram Bots + Admin',
    'Company CRMs',
    'Marketplace MVPs',
    'E-commerce Solutions'
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-primary-dark/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">{'>'}</span> {t.projects.title}
        </motion.h2>
        
        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="brutalist-card p-8 group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-mono font-bold text-accent mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm text-accent mb-2">{t.projects.techStack}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-mono text-sm text-accent mb-2">{t.projects.features}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-accent/30">
                  <span className="font-mono text-xs text-accent">{t.projects.role}: {project.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other Projects */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-mono text-xl font-bold text-accent mb-8">{t.projects.otherProjects}</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {otherProjects.map((project, index) => (
              <motion.div 
                key={project}
                className="brutalist-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {project}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
