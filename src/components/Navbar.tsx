import { useState, useEffect } from 'react';
import { Send, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleTelegramRedirect = () => {
    window.open('https://t.me/databridgerobot', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-bold text-xl text-slate-900">DataBridge</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-slate-700 hover:text-yellow-600 font-medium transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-slate-700 hover:text-yellow-600 font-medium transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('requirements')} className="text-slate-700 hover:text-yellow-600 font-medium transition-colors">
              Requirements
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-700 hover:text-yellow-600 font-medium transition-colors">
              FAQ
            </button>
            <Button 
              onClick={handleTelegramRedirect}
              className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4 space-y-3">
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-yellow-50 rounded-lg font-medium transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-yellow-50 rounded-lg font-medium transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('requirements')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-yellow-50 rounded-lg font-medium transition-colors">
              Requirements
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-yellow-50 rounded-lg font-medium transition-colors">
              FAQ
            </button>
            <Button 
              onClick={handleTelegramRedirect}
              className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold"
            >
              <Send className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
