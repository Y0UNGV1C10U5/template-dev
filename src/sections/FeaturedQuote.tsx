import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedQuote() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div ref={quoteRef} className="opacity-0 border-l-2 border-gold/40 pl-8 md:pl-12">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-gold/30 mb-6">
            <path d="M0 24V14.4C0 9.6 2.4 5.6 7.2 2.4L9.6 5.6C6.4 7.6 4.8 10 4.8 13.2H9.6V24H0ZM17.6 24V14.4C17.6 9.6 20 5.6 24.8 2.4L27.2 5.6C24 7.6 22.4 10 22.4 13.2H27.2V24H17.6Z" fill="currentColor"/>
          </svg>

          <blockquote>
            <p className="font-headline text-2xl sm:text-3xl md:text-4xl text-parchment leading-[1.3] font-light italic mb-8">
              "I thought, 'how do I get this guy? I woo him. I romance him, Bachelor-style — not this Bachelor, because he screwed her over in the end.'"
            </p>
          </blockquote>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-gold text-sm font-body font-semibold">Kyle Sandilands</span>
            <span className="text-midnight-border">—</span>
            <span className="text-parchment-dim text-sm font-body">on recruiting Andrew as his manager, 2004</span>
          </div>

          <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed max-w-2xl mb-4">
            Hawkins and Sandilands met at the 2004 ARIA awards. A year later, Sandilands took Hawkins to America — a fortnight at Snoop Dogg's house, time with Mariah Carey's people, and a meet-up with Jay-Z. Hawkins sold his recording business and became Sandilands' manager. The rest is Australian radio history.
          </p>

          <p className="text-parchment-dim text-xs font-body italic">
            Daily Telegraph — "From King Kyle to coconut oil baron" (October 18, 2014)
          </p>
        </div>
      </div>
    </section>
  );
}
