import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/hooks/use-language";
import { Code, Database, Globe, Zap, CheckCircle } from "lucide-react";

interface BuildStep {
  id: string;
  command: string;
  description: string;
  icon: React.ReactNode;
  duration: number;
}

export default function DevelopmentSimulation() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [currentStep, setCurrentStep] = useState(-1);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [typedText, setTypedText] = useState("");

  const buildSteps: BuildStep[] = [
    {
      id: "init",
      command: "npm create next-app@latest",
      description: "Initializing project structure...",
      icon: <Code className="w-5 h-5" />,
      duration: 1500
    },
    {
      id: "backend",
      command: "django-admin startproject api",
      description: "Setting up backend (Django + PostgreSQL)...",
      icon: <Database className="w-5 h-5" />,
      duration: 2000
    },
    {
      id: "frontend",
      command: "npm install tailwindcss framer-motion",
      description: "Configuring frontend (Next.js + TailwindCSS)...",
      icon: <Globe className="w-5 h-5" />,
      duration: 1800
    },
    {
      id: "cache",
      command: "docker run -d redis:alpine",
      description: "Connecting to Redis cache...",
      icon: <Zap className="w-5 h-5" />,
      duration: 1200
    },
    {
      id: "deploy",
      command: "npm run build && npm run deploy",
      description: "Deploying to production...",
      icon: <CheckCircle className="w-5 h-5" />,
      duration: 2500
    }
  ];

  const componentBlocks = [
    { name: "Header", delay: 0 },
    { name: "Navigation", delay: 300 },
    { name: "Hero Section", delay: 600 },
    { name: "About", delay: 900 },
    { name: "Projects", delay: 1200 },
    { name: "Contact", delay: 1500 },
    { name: "Footer", delay: 1800 }
  ];

  useEffect(() => {
    if (!isVisible || animationComplete) return;

    let stepIndex = 0;
    const runBuildSequence = () => {
      if (stepIndex < buildSteps.length) {
        setCurrentStep(stepIndex);
        
        // Type animation for current command
        const currentCommand = buildSteps[stepIndex].command;
        let charIndex = 0;
        const typeCommand = () => {
          if (charIndex < currentCommand.length) {
            setTypedText(currentCommand.substring(0, charIndex + 1));
            charIndex++;
            setTimeout(typeCommand, 50);
          }
        };
        typeCommand();

        setTimeout(() => {
          stepIndex++;
          runBuildSequence();
        }, buildSteps[stepIndex].duration);
      } else {
        setAnimationComplete(true);
      }
    };

    const timer = setTimeout(runBuildSequence, 500);
    return () => clearTimeout(timer);
  }, [isVisible, animationComplete, buildSteps]);

  return (
    <section ref={ref} className="py-20 px-4 bg-primary-dark/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-mono font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">{'>'}</span> DEVELOPMENT_PROCESS
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Window */}
          <motion.div 
            className="bg-primary-dark border-2 border-accent rounded-lg overflow-hidden terminal-glow"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal Header */}
            <div className="bg-accent text-primary-bg px-4 py-3 font-mono text-sm flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4">terminal@ardasher-dev</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[400px]">
              <AnimatePresence>
                {buildSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={currentStep >= index ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    {currentStep > index && (
                      <>
                        <div className="flex items-center gap-2 text-accent mb-1">
                          {step.icon}
                          <span>$ {step.command}</span>
                        </div>
                        <div className="text-muted-foreground mb-2 pl-7">
                          {step.description}
                        </div>
                        <div className="text-green-400 pl-7 mb-3">✓ Complete</div>
                      </>
                    )}
                    
                    {currentStep === index && (
                      <>
                        <div className="flex items-center gap-2 text-accent mb-1">
                          {step.icon}
                          <span>$ {typedText}<span className="animate-pulse">|</span></span>
                        </div>
                        <div className="text-muted-foreground mb-2 pl-7">
                          {step.description}
                        </div>
                        <div className="pl-7 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                            <span className="text-accent">Processing...</span>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {animationComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 p-4 bg-accent/10 border border-accent rounded text-accent"
                >
                  <div className="flex items-center gap-2 font-bold">
                    <CheckCircle className="w-5 h-5" />
                    Build successful! Application ready for deployment ✨
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Visual Component Building */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-mono text-xl font-bold text-accent mb-6">
              Building Components:
            </h3>
            
            <div className="space-y-3">
              {componentBlocks.map((block, index) => (
                <motion.div
                  key={block.name}
                  className="brutalist-card p-4 border-l-4 border-accent"
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={
                    currentStep >= 1 ? 
                    { opacity: 1, x: 0, scale: 1 } : 
                    { opacity: 0, x: 20, scale: 0.95 }
                  }
                  transition={{ 
                    duration: 0.4, 
                    delay: currentStep >= 1 ? block.delay / 1000 : 0 
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">{block.name}</span>
                    {currentStep >= 2 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: (block.delay + 500) / 1000 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </motion.div>
                    )}
                  </div>
                  
                  {currentStep >= 2 && (
                    <motion.div
                      className="mt-2 h-1 bg-accent/20 rounded overflow-hidden build-progress"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ 
                        duration: 1, 
                        delay: (block.delay + 200) / 1000 
                      }}
                    >
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ 
                          duration: 0.8, 
                          delay: (block.delay + 400) / 1000 
                        }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {animationComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 text-center"
              >
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="brutalist-btn primary"
                >
                  Build Your Idea
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}