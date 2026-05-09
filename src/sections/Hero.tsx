import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      if (taglineRef.current) {
        tl.fromTo(taglineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      }

      if (line1Ref.current) {
        const chars = line1Ref.current.querySelectorAll('.hero-char');
        tl.fromTo(chars, { opacity: 0, y: 60, rotateX: -60 }, {
          opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'power4.out',
        }, '-=0.4');
      }

      if (line2Ref.current) {
        const chars = line2Ref.current.querySelectorAll('.hero-char');
        tl.fromTo(chars, { opacity: 0, y: 60, rotateX: -60 }, {
          opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'power4.out',
        }, '-=0.6');
      }

      if (line3Ref.current) {
        const chars = line3Ref.current.querySelectorAll('.hero-char');
        tl.fromTo(chars, { opacity: 0, y: 60, rotateX: -60 }, {
          opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'power4.out',
        }, '-=0.6');
      }

      if (citiesRef.current) {
        const items = citiesRef.current.querySelectorAll('.city-item');
        tl.fromTo(items, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, '-=0.3');
      }

      if (scrollRef.current) {
        tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2');
        gsap.to(scrollRef.current.querySelector('.scroll-pulse'), {
          y: 24, opacity: 0, duration: 1.8, repeat: -1, ease: 'power2.in',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderChars = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="hero-char inline-block opacity-0" style={{ marginRight: char === ' ' ? '0.25em' : '0', transformOrigin: 'center bottom' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center px-6" style={{ perspective: '1200px' }}>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <p ref={taglineRef} className="text-parchment-muted text-[11px] md:text-xs tracking-[0.35em] uppercase mb-8 md:mb-10 opacity-0 font-body font-semibold">
          Marketing · Music & Entertainment · Entrepreneur
        </p>

        <h1 className="mb-8 md:mb-10">
          <div ref={line1Ref} className="font-headline text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] text-parchment leading-[0.85] tracking-[-0.02em] font-light">
            {renderChars('ANDREW')}
          </div>
          <div ref={line2Ref} className="font-headline text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] text-parchment leading-[0.85] tracking-[-0.02em] font-light">
            {renderChars('JAMES')}
          </div>
          <div ref={line3Ref} className="font-headline text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] text-parchment leading-[0.85] tracking-[-0.02em] font-light">
            {renderChars('HAWKINS')}
          </div>
        </h1>

        <div ref={citiesRef} className="flex items-center justify-center gap-3 md:gap-4 text-parchment-muted text-sm md:text-base font-body flex-wrap">
          <span className="city-item opacity-0 px-4 py-2 border border-midnight-border rounded-full text-xs tracking-[0.15em] uppercase font-body font-semibold text-parchment-muted hover:border-parchment-dim hover:text-parchment transition-all duration-300">Brisbane</span>
          <span className="city-item opacity-0 px-4 py-2 border border-midnight-border rounded-full text-xs tracking-[0.15em] uppercase font-body font-semibold text-parchment-muted hover:border-parchment-dim hover:text-parchment transition-all duration-300">Sydney</span>
          <span className="city-item opacity-0 px-4 py-2 border border-midnight-border rounded-full text-xs tracking-[0.15em] uppercase font-body font-semibold text-parchment-muted hover:border-parchment-dim hover:text-parchment transition-all duration-300">Los Angeles</span>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-0">
        <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-body font-semibold">Scroll</span>
        <div className="relative w-7 h-20 border-2 border-gold/50 rounded-full flex justify-center pt-2 bg-midnight-elevated/50 backdrop-blur-sm">
          <div className="scroll-pulse w-2 h-4 bg-gold rounded-full shadow-[0_0_10px_rgba(201,169,110,0.6)]" />
        </div>
      </div>
    </section>
  );
}
