import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Partner {
  name: string;
  category: string;
  color: string;
  logo?: string;
}

const partners: Partner[] = [
  // Broadcast & TV Networks
  { name: 'BBC', category: 'International Broadcast', color: '#BB1919' },
  { name: 'NBC', category: 'US Broadcast', color: '#E03C31' },
  { name: 'Channel Seven', category: 'Australian Broadcast', color: '#E20000' },
  { name: 'Channel Nine', category: 'Australian Broadcast', color: '#0099CC' },
  { name: 'Network 10', category: 'Australian Broadcast', color: '#00A8E1' },
  { name: 'Foxtel', category: 'Subscription TV', color: '#FF3300' },
  { name: 'ARN', category: 'Australian Radio', color: '#E2001A' },
  { name: 'Clear Channel', category: 'US Media', color: '#0055A4' },
  // Music Labels & Publishing
  { name: 'Sony Music', category: 'Music Label', color: '#C8C8C8' },
  { name: 'BMG / Jive', category: 'Music Label', color: '#CC0000' },
  { name: 'Universal Music', category: 'Music Label', color: '#00A651' },
  { name: 'Warner Music', category: 'Music Label', color: '#1A1A1A' },
  { name: 'Atlantic Records', category: 'Music Label', color: '#C9A96E' },
  { name: 'Kobalt Music', category: 'Music Publishing', color: '#FF6B35' },
  { name: 'Mushroom Group', category: 'Entertainment', color: '#1A1A1A' },
  // Production & Rights
  { name: 'FremantleMedia', category: 'Production', color: '#00ADEF' },
  { name: 'Banijay', category: 'Production', color: '#FF0080' },
  { name: 'Syco (Simon Cowell)', category: 'Production', color: '#000000' },
  { name: 'Freehand TV', category: 'Production', color: '#C9A96E' },
  { name: 'News Ltd', category: 'Media', color: '#1C1C1C' },
  // Entertainment Franchises
  { name: 'Big Brother', category: 'TV Franchise', color: '#00B4D8' },
  { name: 'Australian Idol', category: 'TV Franchise', color: '#C9A96E' },
  { name: 'The X Factor', category: 'TV Franchise', color: '#E20000' },
  { name: "Got Talent", category: 'TV Franchise', color: '#FFD700' },
  // Retail & FMCG
  { name: 'Coles', category: 'Retail', color: '#DC0000' },
  { name: 'Woolworths', category: 'Retail', color: '#00843D' },
  { name: 'ALDI', category: 'Retail', color: '#00005F' },
  { name: 'IGA', category: 'Retail', color: '#E20000' },
  { name: '7-Eleven', category: 'Retail', color: '#00857C' },
  { name: 'Boost Juice', category: 'Retail', color: '#FF6600' },
];

export default function NetworksPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      }

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.partner-item');
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-20 md:py-28" style={{ background: 'rgba(12,14,18,0.6)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-14 md:mb-20 opacity-0">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">
              Networks, Labels & Partners
            </span>
            <div className="w-12 h-px bg-parchment-dim" />
          </div>
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl text-parchment leading-[1.1] max-w-3xl mx-auto font-light mb-6">
            I have personally negotiated and successfully put in place commercial arrangements with the following companies — and more
          </h2>
          <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed max-w-2xl mx-auto">
            Two decades of deal-making across broadcast, music, retail, and production. 
            From licensing the KIIS FM brand from the US to placing products in every major Australian supermarket chain — 
            these are the relationships that define the work.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="partner-item opacity-0 bg-midnight-elevated rounded-lg border border-midnight-border hover:border-gold/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Colored accent bar */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: partner.color }}
              />
              <div className="p-5 md:p-6 flex flex-col items-center text-center">
                <span className="text-parchment group-hover:text-gold text-sm md:text-base font-body font-semibold tracking-wide transition-colors duration-300 leading-tight">
                  {partner.name}
                </span>
                <span className="text-parchment-dim text-[10px] font-body tracking-[0.15em] uppercase mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
