import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'scenarios' | 'multimodal' | 'usage' | 'download') => void;
  currentPage: 'home' | 'scenarios' | 'multimodal' | 'usage' | 'download';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    
    if (target === 'home' || target === 'scenarios' || target === 'multimodal' || target === 'usage' || target === 'download') {
      onNavigate(target as 'home' | 'scenarios' | 'multimodal' | 'usage' | 'download');
      window.scrollTo({ top: 0, behavior: 'auto' });
      setIsOpen(false);
      return;
    }

    // Handle scroll on home page
    if (currentPage !== 'home') {
      onNavigate('home');
      // Timeout to allow render before scrolling
      setTimeout(() => {
        const element = document.getElementById(target.replace('#', ''));
        if (element) {
          const headerOffset = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(target.replace('#', ''));
      if (element) {
        const headerOffset = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Overview', href: '#', type: 'page', target: 'home' },
    { name: 'Scene Visualization', href: '#', type: 'page', target: 'scenarios' },
    { name: 'Multimodal Visualization', href: '#', type: 'page', target: 'multimodal' },
    { name: 'Paper', href: '#', type: 'link' },
    { name: 'Code', href: 'https://github.com/Lmyxxn/XL-MIMO-LAE.git', type: 'link' },
    { name: 'Data Usage', href: '#', type: 'page', target: 'usage' },
    { name: 'Download Dataset', href: '#', type: 'page', target: 'download' },
  ];

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo clicks reset to home */}
            <div 
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
              onClick={(e) => handleNavigation(e, 'home')}
            >
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Multimodal-LAE-XLMIMO
              </span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (isExternal(link.href)) return;
                  
                  link.type === 'page' 
                  ? handleNavigation(e, link.target!) 
                  : handleNavigation(e, link.href)
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  (link.type === 'page' && link.target === currentPage) 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={isExternal(link.href) ? "_blank" : undefined}
                rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   (link.type === 'page' && link.target === currentPage) 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                }`}
                onClick={(e) => {
                  if (isExternal(link.href)) {
                    setIsOpen(false);
                    return;
                  }
                  
                  link.type === 'page' 
                  ? handleNavigation(e, link.target!) 
                  : handleNavigation(e, link.href)
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;