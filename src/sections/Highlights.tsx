import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  { value: '#6', label: 'Top 10 Radio Talent Managers', sublabel: 'Radio Today, 2018' },
  { value: '$30M+', label: 'Record Deal Negotiated', sublabel: 'KIIS FM, 2016' },
  { value: '5B+', label: 'Catalogue Streams', sublabel: 'Young & Vicious' },
  { value: '$35M', label: 'Peak Annual Turnover', sublabel: 'H2coco' },
  { value: '20+', label: 'Years in Industry', sublabel: '1999–Present' },
  { value: '3', label: 'Global Offices', sublabel: 'LA, Sydney, London' },
];

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const trigger = ScrollTrigger.create({
      trigger: cardRef.current,
      start: 'top 90%',
      onEnter: () => setIsVisible(true),
    });
    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-midnight-elevated rounded-lg p-6 md:p-8 text-center border border-midnight-border hover:border-gold/40 hover:shadow-[0_0_30px_rgba(196,167,125,0.15)] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-headline text-4xl md:text-5xl text-gold mb-3 font-light">{stat.value}</div>
      <p className="text-parchment text-sm md:text-base font-body font-medium mb-1">{stat.label}</p>
      <p className="text-parchment-dim text-xs font-body">{stat.sublabel}</p>
    </div>
  );
}

const highlights = [
  'Co-founded H2coco; scaled from $200K to $35M+ annual turnover, exited to Pharmacare Laboratories in 2019',
  'Licensed KIIS FM brand from Clear Channel US; launched in Australia with Kyle Sandilands, took Sydney ratings from bottom to #1 in a single book',
  'Negotiated record-breaking $30M+ Kyle Sandilands and Jackie O deal with ARN in 2016 — largest contract in Australian commercial radio history',
  "Named one of Australia's Top 10 Radio Talent Managers by Radio Today (2018)",
  'Built Young & Vicious Music Publishing to 5B+ streams; signed Twice As Nice to Mushroom Music Publishing JV',
  'Pioneered "Celebrity Wrangler" equity-for-endorsement model for early-stage brands',
  'Personally directed multi-year defamation suits, securing multi-million-dollar settlements prior to judgment',
  'Telstra Business Awards — Young Entrepreneurs Finalist (H2coco)',
  'APRA One Billion Streams milestone (Young & Vicious)',
];

export default function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=500',
    fadeStart: 'top 55%',
    fadeEnd: '+=250',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.hl-item');
        gsap.fromTo(items, { opacity: 0, x: -40, scale: 0.98 }, {
          opacity: 1, x: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="highlights" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Achievements</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] max-w-3xl font-light">Recognition & Milestones</h2>
        </div>

        <div className="section-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-28">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>

          <div ref={listRef} className="max-w-4xl">
            <h3 className="font-headline text-xl md:text-2xl text-parchment mb-8 font-light">Selected Career Highlights</h3>
            <div className="space-y-0">
              {highlights.map((item, i) => (
                <div key={i} className="hl-item flex items-start gap-4 opacity-0 group border-b border-midnight-border py-5 first:pt-0 transition-all duration-500 hover:scale-[1.02] hover:pl-2">
                  <span className="text-parchment-dim text-xs font-body font-medium mt-1 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed group-hover:text-parchment transition-colors duration-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
