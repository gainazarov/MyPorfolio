import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import DevelopmentSimulation from "@/components/sections/development-simulation";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import { Github, Linkedin, MessageCircle, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-bg text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <DevelopmentSimulation />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-accent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Ardasher Gainazarov | ZIYO
          </div>
          
          <div className="font-mono text-sm text-accent">
            <span className="animate-blink">{'>'}</span> Built with React & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}
