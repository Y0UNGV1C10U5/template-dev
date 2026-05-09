import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

const pressQuotes = [
  {
    quote: 'An accomplished music and entertainment executive with extensive experience in rights management, talent development, and digital strategy.',
    source: 'The Org',
    context: 'Executive profile, Mushroom Group',
  },
  {
    quote: 'Australian entrepreneur Andrew Hawkins... Young & Vicious is a boutique rights management and music publishing business, founded by Hawkins and backed by Mushroom Publishing through a joint venture.',
    source: 'The Music Network',
    context: 'May 2021',
  },
  {
    quote: 'Storied industry pioneers... a forward-thinking platform focused on developing artists and building business, brands and careers for talented creatives. With offices in Los Angeles, Sydney and London.',
    source: 'Discogs',
    context: 'Young & Vicious label profile',
  },
  {
    quote: '#6 on Australia\'s Top 10 Talent Managers in Radio.',
    source: 'Radio Today',
    context: 'August 2018',
  },
];

export default function PressQuotes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=400',
    fadeStart: 'top 55%',
    fadeEnd: '+=200',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
      if (quotesRef.current) {
        const items = quotesRef.current.querySelectorAll('.pq-item');
        gsap.fromTo(items, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: quotesRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="press-quotes" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0 text-center">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-semibold mb-6 block">What the Press Says</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] font-light">In their own words</h2>
        </div>

        <div className="section-content">
          <div ref={quotesRef} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-midnight-border">
            {pressQuotes.map((item, i) => (
              <div key={i} className="pq-item opacity-0 bg-midnight-surface p-8 md:p-10 hover:bg-midnight-elevated transition-colors duration-500 group">
                <div className="mb-6">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-gold/30 group-hover:text-gold/50 transition-colors">
                    <path d="M0 24V14.4C0 9.6 2.4 5.6 7.2 2.4L9.6 5.6C6.4 7.6 4.8 10 4.8 13.2H9.6V24H0ZM17.6 24V14.4C17.6 9.6 20 5.6 24.8 2.4L27.2 5.6C24 7.6 22.4 10 22.4 13.2H27.2V24H17.6Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="font-headline text-xl md:text-2xl text-parchment leading-[1.4] mb-8 font-light">"{item.quote}"</p>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-sm font-body font-medium">{item.source}</span>
                  <span className="text-midnight-border">—</span>
                  <span className="text-parchment-dim text-sm font-body">{item.context}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
