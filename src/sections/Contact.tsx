import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, MapPin, ArrowUpRight, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.contact-card');
        gsap.fromTo(cards, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-20 md:mb-24 opacity-0">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Get in Touch</span>
            <div className="w-12 h-px bg-parchment-dim" />
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment leading-[1.05] mb-8 font-light">
            Let's build<br /><span className="text-gold">something big</span>
          </h2>
          <p className="text-parchment-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-body mb-8">
            Andrew consults across various industries, holds a portfolio of investments, and is actively building several brands. Open to collaboration.
          </p>
          <Link to="/consulting" className="inline-flex items-center gap-2 text-gold hover:text-parchment transition-colors font-body text-sm font-semibold tracking-wide mb-12">
            CONSULTING ENQUIRIES
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight-border">
          <a href="mailto:andrewjames.hawkins@gmail.com" className="contact-card opacity-0 bg-midnight-surface p-8 md:p-10 hover:bg-midnight-elevated transition-colors duration-500 text-center group">
            <div className="w-12 h-12 border border-midnight-border rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors">
              <Mail className="w-5 h-5 text-parchment-dim group-hover:text-parchment transition-colors" />
            </div>
            <p className="text-parchment text-sm font-body font-medium mb-1">Email</p>
            <p className="text-parchment-dim text-sm font-body group-hover:text-parchment-muted transition-colors">andrewjames.hawkins@gmail.com</p>
          </a>

          <a href="https://www.linkedin.com/in/andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="contact-card opacity-0 bg-midnight-surface p-8 md:p-10 hover:bg-midnight-elevated transition-colors duration-500 text-center group">
            <div className="w-12 h-12 border border-midnight-border rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors">
              <Linkedin className="w-5 h-5 text-parchment-dim group-hover:text-parchment transition-colors" />
            </div>
            <p className="text-parchment text-sm font-body font-medium mb-1">LinkedIn</p>
            <p className="text-parchment-dim text-sm font-body group-hover:text-parchment-muted transition-colors">/in/andrewjameshawkins</p>
          </a>

          <div className="contact-card opacity-0 bg-midnight-surface p-8 md:p-10 hover:bg-midnight-elevated transition-colors duration-500 text-center group">
            <div className="w-12 h-12 border border-midnight-border rounded-full flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors">
              <MapPin className="w-5 h-5 text-parchment-dim group-hover:text-parchment transition-colors" />
            </div>
            <p className="text-parchment text-sm font-body font-medium mb-1">Based in</p>
            <p className="text-parchment-dim text-sm font-body">Brisbane · Sydney · Los Angeles</p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-parchment-muted hover:text-gold transition-colors font-body text-sm font-medium tracking-wide min-h-[44px] px-3">
            <Linkedin className="w-4 h-4" />LinkedIn
          </a>
          <a href="https://twitter.com/andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-parchment-muted hover:text-gold transition-colors font-body text-sm font-medium tracking-wide min-h-[44px] px-3">
            <Twitter className="w-4 h-4" />X
          </a>
          <a href="https://www.instagram.com/andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-parchment-muted hover:text-gold transition-colors font-body text-sm font-medium tracking-wide min-h-[44px] px-3">
            <Instagram className="w-4 h-4" />Instagram
          </a>
          <a href="https://www.youtube.com/@andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-parchment-muted hover:text-gold transition-colors font-body text-sm font-medium tracking-wide min-h-[44px] px-3">
            <Youtube className="w-4 h-4" />YouTube
          </a>
          <a href="https://www.facebook.com/andrewjameshawkins" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-parchment-muted hover:text-gold transition-colors font-body text-sm font-medium tracking-wide min-h-[44px] px-3">
            <Facebook className="w-4 h-4" />Facebook
          </a>
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <p className="text-parchment-dim text-sm font-body">References, portfolio links, and detailed deal sheets available on request.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 md:mt-32 pt-8 border-t border-midnight-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-parchment-dim text-xs font-body">© {new Date().getFullYear()} Andrew Hawkins. All rights reserved.</p>
          <p className="text-midnight-border text-[10px] tracking-[0.2em] uppercase font-body font-semibold">Marketing · Music & Entertainment · Entrepreneur</p>
        </div>
      </div>
    </section>
  );
}
