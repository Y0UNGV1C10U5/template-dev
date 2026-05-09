import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePinnedHeader } from '../hooks/usePinnedHeader';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface PressItem {
  category: string;
  image: string;
  source: string;
  date: string;
  headline: string;
  quote: string;
  link: string;
}

const pressData: PressItem[] = [
  {
    category: 'Recognition',
    image: '/images/press-radiotoday.jpg',
    source: 'Radio Today',
    date: 'August 21, 2018',
    headline: 'Revealed: The Top 10 radio talent managers right now',
    quote: 'Andy Hawkins is the business partner and manager of the one and only Kyle Sandilands. Together they own King Kyle Investments alongside a spattering of other ventures. The two met at the 2004 ACRAs when Kyle was in need of a manager and Andy was a 20-year-old record producer... and the rest is history.',
    link: 'https://radiotoday.com.au',
  },
  {
    category: 'Music Publishing',
    image: '/images/press-tmn.jpg',
    source: 'The Music Network',
    date: 'May 19, 2021',
    headline: 'Twice as Nice sign with Mushroom Music Publishing, Young & Vicious',
    quote: 'Young & Vicious is a boutique rights management and music publishing business, founded in 2012 by Australian entrepreneur Andrew Hawkins and backed by Mushroom Publishing through a joint venture.',
    link: 'https://themusicnetwork.com',
  },
  {
    category: 'UK Press',
    image: '/images/press-musicweek.jpg',
    source: 'Music Week (UK)',
    date: 'May 19, 2021',
    headline: 'Mushroom Music Publishing and Young & Vicious sign production duo Twice As Nice',
    quote: "Andrew Hawkins, founder of Young & Vicious, said he was pleased to have inked the deal as he has a close relationship with the duo. 'As their friend and fellow ex-pat Aussie, I've been fortunate enough to collaborate with them throughout the years.'",
    link: 'https://musicweek.com',
  },
  {
    category: 'Label Profile',
    image: '/images/press-discogs.jpg',
    source: 'Discogs',
    date: 'Ongoing',
    headline: 'Young & Vicious — Label Profile',
    quote: 'Storied industry pioneers... a forward-thinking platform focused on developing artists and building business, brands and careers for talented creatives. With offices in Los Angeles, Sydney and London.',
    link: 'https://discogs.com',
  },
];

export default function Press() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  usePinnedHeader(sectionRef, headerRef, {
    pinEnd: '+=450',
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
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.press-card');
        gsap.fromTo(cards, { opacity: 0, y: 60, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 78%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="press" ref={sectionRef} className="relative px-6" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0 text-center">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-semibold mb-6 block">Featured Coverage</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] font-light">Press Clippings & Mentions</h2>
        </div>

        <div className="section-content">
          <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {pressData.map((item, i) => (
              <div key={i} className="press-card opacity-0 bg-midnight-elevated rounded-lg overflow-hidden border border-midnight-border hover:border-gold/30 transition-all duration-500 group">
                <div className="px-6 pt-5 pb-3">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] tracking-[0.2em] uppercase font-body font-semibold rounded-sm">
                    {item.category}
                  </span>
                </div>

                <div className="relative aspect-[16/10] mx-6 rounded overflow-hidden bg-midnight-surface">
                  <img src={item.image} alt={item.headline} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                </div>

                <div className="px-6 pt-4 pb-2 flex items-center justify-between">
                  <span className="text-parchment text-sm font-body font-medium">{item.source}</span>
                  <span className="text-parchment-dim text-xs font-body">{item.date}</span>
                </div>

                <h3 className="px-6 text-parchment text-lg md:text-xl font-headline leading-snug mb-4 font-light">{item.headline}</h3>

                <div className="px-6 pb-5">
                  <blockquote className="border-l-2 border-gold/40 pl-4 py-1">
                    <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed italic">"{item.quote}"</p>
                  </blockquote>
                </div>

                <div className="px-6 pb-6">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold text-sm font-body font-medium hover:text-parchment transition-colors group/link">
                    Read original article
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
