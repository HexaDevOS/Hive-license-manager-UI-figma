import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Shield } from 'lucide-react';
import footerLogo from 'figma:asset/ee17049a1c0c6d929c94ffcf7bfda532a7c21943.png';

export function Footer() {
  const links = [
    { label: 'About', href: '#' },
    { label: 'Docs', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={footerLogo}
              alt="Hive-Net Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/60 hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Badges */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
            </a>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <Shield className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400">Solana Verified</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-white/40">
            © 2025 Hive-Net. Decentralized infrastructure for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}