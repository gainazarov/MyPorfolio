import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Hero() {
  const { t } = useLanguage();
  const [currentLine, setCurrentLine] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const codeLines = [
    'const developer = new Ardasher();',
    'developer.initialize();',
    'npm run build',
    'git push origin main',
    'docker-compose up',
    '✓ Build successful',
    'ssh production-server',
    'pm2 restart all',
    '> Application deployed',
    '> Status: Online ✓'
  ];

  useEffect(() => {
    let charIndex = 0;
    let lineIndex = 0;
    
    const typeWriter = () => {
      if (lineIndex < codeLines.length) {
        if (charIndex < codeLines[lineIndex].length) {
          setCurrentLine(codeLines[lineIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeWriter, 50 + Math.random() * 50);
        } else {
          setDisplayedLines(prev => [...prev, codeLines[lineIndex]]);
          setCurrentLine("");
          charIndex = 0;
          lineIndex++;
          setTimeout(typeWriter, 800);
        }
      } else {
        setTimeout(() => {
          setDisplayedLines([]);
          setCurrentLine("");
          charIndex = 0;
          lineIndex = 0;
          typeWriter();
        }, 3000);
      }
    };

    typeWriter();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Would be actual PDF URL
    link.download = 'Ardasher_Gainazarov_Resume.pdf';
    link.click();
  };

  // Development process background animation
  useEffect(() => {
    const codeSnippets = [
      'const app = express();',
      'npm install react',
      'git commit -m "init"',
      'docker build .',
      'import { useState }',
      'export default App',
      'npm run dev',
      'git push origin main',
      'SELECT * FROM users',
      'Redis connected ✓',
      'Build successful',
      'Deployment ready'
    ];
    
    const devContainer = document.querySelector('.dev-bg');
    if (!devContainer) return;

    const createFloatingCode = () => {
      const element = document.createElement('div');
      element.className = 'floating-code';
      element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      element.style.left = Math.random() * 100 + '%';
      element.style.animationDuration = (Math.random() * 15 + 10) + 's';
      element.style.fontSize = (Math.random() * 4 + 10) + 'px';
      element.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      devContainer.appendChild(element);

      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 25000);
    };

    const interval = setInterval(createFloatingCode, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Development Process Background */}
      <div className="dev-bg"></div>
      
      {/* Floating Development Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-accent/20 rounded"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-32 right-20 w-6 h-6 border border-accent/30 rounded"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-8 h-2 bg-accent/15 rounded"
          animate={{ x: [0, 30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-40 right-40 w-3 h-8 bg-accent/25 rounded"
          animate={{ y: [0, 25, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>
      
      {/* Terminal Window */}
      <motion.div 
        className="absolute top-20 right-8 w-96 h-64 bg-primary-dark border-2 border-accent rounded-lg overflow-hidden z-10 hidden lg:block terminal-glow"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="bg-accent text-primary-bg px-4 py-2 font-mono text-sm flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-2">terminal@ardasher:~$</span>
        </div>
        <div className="p-4 font-mono text-sm text-accent space-y-1">
          {displayedLines.map((line, index) => (
            <motion.div 
              key={index} 
              className="code-animation"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {line}
            </motion.div>
          ))}
          <div className="code-animation typing-cursor">{currentLine}</div>
        </div>
      </motion.div>
      
      <div className="text-center z-10 max-w-3xl mx-auto px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-accent">Ardasher</span>
            <br />
            <span className="text-foreground">Gainazarov</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground font-mono mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Fullstack Developer & Product Manager
          </motion.p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection('projects')} 
            className="brutalist-btn primary group"
          >
            <span className="relative z-10">{t.hero.viewProjects}</span>
          </button>
          <button 
            onClick={downloadResume} 
            className="brutalist-btn group"
          >
            <span className="relative z-10">{t.hero.downloadResume}</span>
            <Download className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}
