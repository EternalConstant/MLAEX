import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Lab / Organization Name. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;