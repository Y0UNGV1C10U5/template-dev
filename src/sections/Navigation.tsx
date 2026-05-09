import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const links = menuRef.current.querySelectorAll('.menu-link');
      gsap.fromTo(links, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.1,
      });
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-midnight/80 backdrop-blur-md border-b border-midnight-border' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="font-headline text-xl md:text-2xl text-parchment hover:text-gold transition-colors">
            AJH
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-xs text-parchment-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold">
                {link.label}
              </a>
            ))}
            <Link to="/consulting" className="text-xs text-gold hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold inline-flex items-center gap-1">
              Consulting
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center text-parchment">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div ref={menuRef} className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="menu-link opacity-0 font-headline text-3xl text-parchment hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
          <Link to="/consulting" onClick={() => setIsMenuOpen(false)} className="menu-link opacity-0 font-headline text-3xl text-gold hover:text-parchment transition-colors inline-flex items-center gap-2">
            Consulting
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </>
  );
}
