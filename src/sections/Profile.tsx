import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=250',
    fadeStart: 'top 55%',
    fadeEnd: '+=150',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.p-word');
        words.forEach((word) => {
          gsap.fromTo(word, { opacity: 0.1, y: 10 }, {
            opacity: 1, y: 0, duration: 0.4, ease: 'power2.out',
            scrollTrigger: { trigger: word, start: 'top 85%', toggleActions: 'play none none none' },
          });
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const profileText = `Andrew Hawkins is an Australian entrepreneur, marketing and brand strategist, talent manager, and music executive whose career has moved between Sydney, London, and Los Angeles for the better part of two decades. His work sits at the intersection of brand-building, deal-making, and the kind of high-stakes commercial relationships that decide whether a business or a career actually goes somewhere. Best known for building Kyle Sandilands and The Kyle and Jackie O Show into the largest talent deal in Australian commercial radio history, Andrew has operated across music publishing, broadcast media, consumer products, and venture investment. He licensed the KIIS FM brand from the US, launched it in Australia, and took it from last place to number one in a single ratings book. He scaled a two hundred thousand dollar coconut water investment into a thirty five million dollar annual turnover brand and a multi-million dollar exit. He built a music publishing joint venture now tracking over five billion streams. Andrew advises founders and executives on brand licensing, deal negotiation, and capital raising. He holds a portfolio of investments across entertainment and consumer brands, and is actively building several ventures through his joint venture with Mushroom Group.`;
  const words = profileText.split(' ');

  return (
    <section id="profile" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Profile</span>
          </div>
        </div>

        <div className="section-content">
          <div ref={textRef} className="font-headline text-xl sm:text-2xl md:text-3xl lg:text-4xl text-parchment leading-[1.5] md:leading-[1.5] font-light">
            {words.map((word, i) => (
              <span key={i} className="p-word inline-block mr-[0.3em]" style={{ opacity: 0.1 }}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
