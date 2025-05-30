import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/hooks/use-language";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-bg/90 backdrop-blur-sm border-b-2 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-mono text-accent font-bold text-lg">
            <span className="animate-blink">{'>'}</span> ARDASHER.DEV
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-mono">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
            >
              {t.nav.projects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-accent transition-colors duration-200 border-b-2 border-transparent hover:border-accent"
            >
              {t.nav.contact}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 font-mono">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left hover:text-accent transition-colors duration-200"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left hover:text-accent transition-colors duration-200"
            >
              {t.nav.about}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left hover:text-accent transition-colors duration-200"
            >
              {t.nav.projects}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left hover:text-accent transition-colors duration-200"
            >
              {t.nav.contact}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
