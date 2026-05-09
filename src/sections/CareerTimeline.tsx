import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';

gsap.registerPlugin(ScrollTrigger);

interface CareerItem {
  id: string;
  role: string;
  company: string;
  industry: string;
  period: string;
  location: string;
  description: string[];
  highlights: string[];
  media: { type: 'image' | 'video'; src: string };
  mediaPosition: 'left' | 'right';
}

const careerData: CareerItem[] = [
  {
    id: 'young-vicious',
    role: 'Creative Director & Co-Founder',
    company: 'Young & Vicious',
    industry: 'Music Publishing Company',
    period: '2016 – Present',
    location: 'Los Angeles',
    description: [
      'Boutique rights management and music publishing company I founded — focused on the curation and development of extraordinary talent. The publishing arm operates as a joint venture with Mushroom Music Publishing.',
      "Founded and lead the company's A&R and creative direction across a global writer-producer roster with credits on releases for ZAYN, Marshmello, Kygo, Charli XCX, Rita Ora, DJ Snake and others. Drive sync placements across television, film, advertising, and live events, and lead all brand collaboration deals.",
      "Set the company's overall commercial strategy, signing decisions, and long-term roster development.",
    ],
    highlights: [
      'Signed production duo Twice As Nice (credits with Rihanna, Post Malone, Bebe Rexha, and Nelly) to a 2021 joint venture deal with Mushroom Music Publishing — covered internationally by Music Week (UK) and The Music Network (AU)',
      'Raised AUD$3M+ in initial funding and built a publishing catalogue that has now exceeded 5 billion streams',
      'Drive sync placements across television, film, advertising, and live events, and lead all brand collaboration deals',
    ],
    media: { type: 'video', src: '/videos/young-vicious.mp4' },
    mediaPosition: 'right',
  },
  {
    id: 'mushroom',
    role: 'Executive Director (XXYV Rights)',
    company: 'Mushroom Group',
    industry: 'Entertainment Rights & Investment',
    period: '2019 – Present',
    location: 'Los Angeles',
    description: [
      'XXYV is a Los Angeles-based joint venture I co-founded with Matt Gudinski, and a member of the Mushroom Group. We operate a diverse portfolio of music and entertainment rights, investments, and consulting arrangements.',
      'Lead all US-based deal-making, rights acquisitions, and consulting engagements for the venture. Direct the strategic alignment between XXYV\'s portfolio and Mushroom Group\'s broader Australian operations. Previously served as Managing Director from 2019 – 2021, building the venture from inception.',
    ],
    highlights: [
      'Lead all US-based deal-making, rights acquisitions, and consulting engagements for the venture',
      'Direct the strategic alignment between XXYV\'s portfolio and Mushroom Group\'s broader Australian operations',
      'Previously served as Managing Director (XXYV Rights), Jan 2019 – Oct 2021, building the venture from inception',
    ],
    media: { type: 'video', src: '/videos/mushroom-group.mp4' },
    mediaPosition: 'left',
  },
  {
    id: 'h2coco',
    role: 'Chief Marketing Officer & Executive Director',
    company: 'H2coco',
    industry: 'Health & Wellness Beverage',
    period: '2011 – 2019',
    location: 'Sydney',
    description: [
      'Co-founded this health and wellness beverage brand alongside an initial $200,000 seed investment. Owned all marketing functions end-to-end — brand architecture, positioning, creative direction, omnichannel media, PR, and sponsorship.',
      'Pioneered the "Celebrity Wrangler" equity-for-endorsement model: trading equity for high-profile talent partnerships when cash wasn\'t an option. Orchestrated 360-degree campaigns across TV, radio, print, and digital to build brand authority and secure national retail distribution.',
      'Personally spearheaded $30M+ in investment capital raises. Scaled the brand to $35M+ in annual turnover and led the multi-million-dollar exit to Pharmacare Laboratories in 2019.',
    ],
    highlights: [
      '$200K seed to $35M+ annual turnover; multi-million-dollar exit to Pharmacare Laboratories',
      'Pioneered "Celebrity Wrangler" equity-for-endorsement model — cornerstone of brand authority',
      'Spearheaded $30M+ in investment capital raises through to exit',
      'Telstra Business Awards — Young Entrepreneurs Finalist',
    ],
    media: { type: 'video', src: '/videos/h2coco-video.mp4' },
    mediaPosition: 'right',
  },
  {
    id: 'king-kyle',
    role: 'Chief Executive & Executive Director',
    company: 'King Kyle Investments',
    industry: 'Media Investment & Talent Management',
    period: '2007 – 2018',
    location: 'Sydney',
    description: [
      "Management company and investment vehicle for Kyle Sandilands and The Kyle & Jackie O Show — Australia's #1 radio program. Licensed the KIIS FM brand from Clear Channel US and launched it as a full brand introduction into Australia.",
      "Architected the parallel transition of The Kyle and Jackie O Show from Austereo. Negotiated the record-breaking 2016 contract with ARN using performance-based equity structures rather than conventional fee models — the largest talent deal in Australian commercial radio history at the time.",
      "Named one of Australia's Top 10 Radio Talent Managers by Radio Today (2018). Directed multi-year defamation suits, securing multi-million-dollar settlements prior to judgment.",
    ],
    highlights: [
      'Licensed KIIS FM brand; took Sydney ratings from bottom to #1 in a single book',
      'Negotiated record-breaking $30M+ Kyle & Jackie O deal — largest in Australian commercial radio history',
      'Named Top 10 Radio Talent Manager by Radio Today (2018)',
      'Directed multi-year defamation suits, securing multi-million-dollar settlements prior to judgment',
    ],
    media: { type: 'video', src: '/videos/king-kyle.mp4' },
    mediaPosition: 'left',
  },
  {
    id: 'arena',
    role: 'Online Producer',
    company: 'ARENA / XYZnetworks (Foxtel)',
    industry: 'Australian Subscription TV Channel',
    period: '2005 – 2006',
    location: 'Sydney',
    description: [
      'Part of the team that rebranded and relaunched the entire ARENA channel — one of Australia\'s flagship subscription television brands. Managed digital assets and strategy across the XYZnetworks portfolio.',
      'Led the Australian digital launch of Sex and the City and other cornerstone international drama titles. Built cross-platform digital marketing across Foxtel, Austar, and the wider subscription TV environment, driving measurable subscriber engagement and viewership uplift.',
    ],
    highlights: [
      'Part of the team that rebranded and relaunched the entire ARENA channel',
      'Led Australian digital launch of Sex and the City and other tentpole international drama',
      'Built cross-platform digital marketing across Foxtel, Austar, and subscription TV',
    ],
    media: { type: 'video', src: '/videos/arena-video.mp4' },
    mediaPosition: 'right',
  },
  {
    id: 'jive',
    role: 'Intern',
    company: 'Jive Records (Zomba Music)',
    industry: 'Record Company',
    period: '1999 – 2002',
    location: 'Brisbane',
    description: [
      "Interned at Jive Records during the peak of the teen-pop and hip-hop era — Britney Spears, NSYNC, Backstreet Boys, R. Kelly, Justin Timberlake. Learned the mechanics of record production, marketing, and sales by being in the room where it happened.",
      'The foundation for two decades in music, media, and brand-building across three continents. The education that no business school could have provided.',
    ],
    highlights: [
      'Interned during peak Britney Spears / NSYNC / Backstreet Boys era — learned from the ground up',
      'Foundation for 20+ years in music and entertainment across Brisbane, Sydney, London, and Los Angeles',
    ],
    media: { type: 'video', src: '/videos/jive-records.mp4' },
    mediaPosition: 'left',
  },
];

function CareerCard({ item, index }: { item: CareerItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const romanNumeral = String(index + 1).padStart(2, '0');

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        const fromX = item.mediaPosition === 'right' ? 80 : -80;
        gsap.fromTo(
          mediaRef.current,
          { opacity: 0, x: fromX, rotateY: item.mediaPosition === 'right' ? 25 : -25, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
          {
            opacity: 1, x: 0, rotateY: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: cardRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
          }
        );
      }
      if (contentRef.current) {
        gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 72%', toggleActions: 'play none none reverse' },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [item.mediaPosition]);

  const isMediaLeft = item.mediaPosition === 'left';

  return (
    <>
      <div ref={cardRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-28 md:mb-36 last:mb-0" style={{ perspective: '1000px' }}>
        <div
          ref={mediaRef}
          className={`relative aspect-[3/4] overflow-hidden opacity-0 ${isMediaLeft ? 'lg:order-1' : 'lg:order-2'}`}
          style={{ transformOrigin: isMediaLeft ? 'right center' : 'left center' }}
        >
          {item.media.type === 'video' ? (
            <video src={item.media.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={item.media.src} alt={item.company} className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent" />
          {/* Roman numeral overlay */}
          <div className="absolute top-6 left-6">
            <span className="font-headline text-6xl md:text-7xl text-parchment/10 font-light">{romanNumeral}</span>
          </div>
          <div className="absolute bottom-6 left-6">
            <span className="text-parchment/30 text-xs font-body tracking-wide">{item.industry}</span>
          </div>
        </div>

        <div ref={contentRef} className={`pt-4 opacity-0 ${isMediaLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-parchment-muted text-[10px] tracking-[0.25em] uppercase font-body font-semibold">{item.period}</span>
            <span className="text-midnight-border">/</span>
            <span className="text-parchment-dim text-[10px] tracking-[0.2em] uppercase font-body">{item.location}</span>
          </div>

          <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl text-parchment mb-1 leading-[1.1] font-light">{item.company}</h3>
          <p className="text-gold text-sm md:text-base mb-1 font-body font-medium tracking-wide">{item.role}</p>
          <p className="text-parchment-dim text-xs tracking-[0.15em] uppercase font-body font-semibold mb-8">{item.industry}</p>

          <div className="space-y-4 mb-6">
            {item.description.map((paragraph, i) => (
              <p key={i} className="text-parchment-muted text-sm md:text-base font-body leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <ul className="space-y-2">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-parchment-muted/80 text-sm md:text-base font-body leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {index < careerData.length - 1 && (
        <div className="max-w-xs mx-auto py-16 md:py-20">
          <div className="h-px bg-midnight-border" />
        </div>
      )}
    </>
  );
}

export default function CareerTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=600',
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-24 md:mb-32 opacity-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Experience</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] max-w-3xl font-light">
            Two decades across music, media, and brand-building
          </h2>
        </div>

        <div className="section-content">
          {careerData.map((item, index) => (
            <CareerCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
