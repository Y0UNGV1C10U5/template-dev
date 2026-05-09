import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'Marketing strategy and leadership',
  'Brand architecture and positioning',
  'Brand licensing and market entry',
  'Creative direction',
  'Celebrity talent acquisition',
  'Endorsements and partnerships',
  'Sponsorship integrations',
  'A&R and music publishing',
  'Crisis communications',
  'Litigation strategy',
  'Capital raising',
  'Investor relations',
  'Omnichannel campaign direction',
  'Strategic advisory',
  'Chief of Staff',
  'Board-level governance',
  'International market entry',
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=450',
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
      if (tagsRef.current) {
        const tags = tagsRef.current.querySelectorAll('.skill-tag');
        gsap.fromTo(tags, { opacity: 0, y: 20, scale: 0.95 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
          scrollTrigger: { trigger: tagsRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-20 text-center opacity-0">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Core Skills</span>
            <div className="w-12 h-px bg-parchment-dim" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] font-light">Areas of Expertise</h2>
        </div>

        <div className="section-content">
          <div ref={tagsRef} className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag opacity-0 px-5 py-2.5 bg-parchment text-midnight text-sm font-body font-medium hover:bg-gold hover:text-midnight transition-all duration-300 cursor-default rounded-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
