import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const results = [
  { value: '$35M+', label: 'Peak Annual Turnover' },
  { value: '$30M+', label: 'Largest Media Deal' },
  { value: '5B+', label: 'Streams Generated' },
  { value: '6', label: ' Ventures Built' },
  { value: '3', label: 'Continents' },
  { value: '20+', label: 'Years Experience' },
];

export default function ResultsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current) {
        const items = itemsRef.current.querySelectorAll('.result-item');
        gsap.fromTo(items, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 border-y border-midnight-border">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={itemsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {results.map((item, i) => (
            <div key={i} className="result-item opacity-0 text-center">
              <div className="font-headline text-3xl md:text-4xl text-gold font-light mb-1">{item.value}</div>
              <div className="text-parchment-dim text-[10px] tracking-[0.15em] uppercase font-body">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
