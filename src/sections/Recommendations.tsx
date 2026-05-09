import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

const recommendations = [
  {
    quote: 'Andrew is incredibly outcome focused while knowing how to navigate team structures to get the best long-term results for sustained success. There is a strong balance of entrepreneurial insight with Andrew\'s passion for people, enabling him to show composure and respect even during moments of high pressure.',
    author: 'Adam Lang',
    title: 'CEO, Founder, Director and C-Suite Coach',
  },
  {
    quote: 'Andrew is one of Australia\'s great exports. A true deal maker, strategist and entrepreneur — he knows how to build and back a winner. We have worked together on some unique projects.',
    author: 'Jo Walker',
    title: 'Founder / Head of Brand, Alsahwa Estate',
  },
  {
    quote: 'Andrew is a dynamic and flexible executive able to produce fantastic results far beyond what would ever be expected. He has first class communication skills, and is able to manage many competing priorities at once.',
    author: 'Troy Kelly',
    title: 'Film, Television, Live Production, Machine Learning, Virtual Production',
  },
];

export default function Recommendations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=500',
    fadeStart: 'top 35%',
    fadeEnd: '+=350',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.rec-card');
        gsap.fromTo(cards, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="recommendations" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Recommendations</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] max-w-3xl font-light">What people say</h2>
        </div>

        <div className="section-content">
          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {recommendations.map((item, i) => (
              <div key={i} className="rec-card opacity-0 bg-midnight-elevated rounded-lg p-8 md:p-10 border border-midnight-border hover:border-gold/30 transition-all duration-500">
                <blockquote className="border-l-2 border-gold/40 pl-5 mb-8">
                  <p className="text-parchment-muted text-base md:text-lg font-body leading-[1.7] italic">"{item.quote}"</p>
                </blockquote>
                <div className="pt-6 border-t border-midnight-border">
                  <p className="text-parchment text-sm font-body font-medium">{item.author}</p>
                  <p className="text-parchment-dim text-sm font-body mt-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
