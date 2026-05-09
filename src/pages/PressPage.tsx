import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

interface PressItem {
  source: string;
  date: string;
  headline: string;
  quote: string;
  context: string;
  link?: string;
}

const pressMentions: PressItem[] = [
  // Feature articles
  {
    source: 'Daily Telegraph',
    date: 'October 18, 2014',
    headline: 'From King Kyle to coconut oil baron — inside the Sandilands empire',
    quote: "I thought, 'how do I get this guy? I woo him. I romance him, Bachelor-style — not this Bachelor, because he screwed her over in the end.' Hawkins and Sandilands met at the 2004 ARIA awards. A year later, Sandilands took Hawkins to America — a fortnight at Snoop Dogg's house, time with Mariah Carey's people, and a meet-up with Jay-Z.",
    context: 'Feature profile on Kyle Sandilands and Andrew Hawkins',
    link: '#',
  },
  {
    source: 'Radio Today',
    date: 'August 21, 2018',
    headline: 'Revealed: The Top 10 radio talent managers right now',
    quote: "Andy Hawkins is the business partner and manager of the one and only Kyle Sandilands. Together they own King Kyle Investments alongside a spattering of other ventures. The two met at the 2004 ACRAs when Kyle was in need of a manager and Andy was a 20-year-old record producer... and the rest is history. Named #6 on Australia's Top 10 Talent Managers in Radio.",
    context: 'Industry recognition — #6 on Top 10 list',
    link: '#',
  },
  {
    source: 'Music Week (UK)',
    date: 'May 19, 2021',
    headline: 'Mushroom Music Publishing and Young & Vicious sign production duo Twice As Nice',
    quote: "Andrew Hawkins, founder of Young & Vicious, said he was pleased to have inked the deal as he has a close relationship with the duo. 'As their friend and fellow ex-pat Aussie, I've been fortunate enough to collaborate with them throughout the years.'",
    context: 'UK music industry trade coverage of Twice As Nice signing',
    link: '#',
  },
  {
    source: 'The Music Network (AU)',
    date: 'May 19, 2021',
    headline: 'Twice as Nice sign with Mushroom Music Publishing, Young & Vicious',
    quote: "Young & Vicious is a boutique rights management and music publishing business, founded in 2012 by Australian entrepreneur Andrew Hawkins and backed by Mushroom Publishing through a joint venture.",
    context: 'Australian music industry coverage of Twice As Nice signing',
    link: '#',
  },
  // Discogs / database entries
  {
    source: 'Discogs',
    date: 'Ongoing',
    headline: 'Young & Vicious — Label Profile',
    quote: 'Storied industry pioneers... a forward-thinking platform focused on developing artists and building business, brands and careers for talented creatives. With offices in Los Angeles, Sydney and London.',
    context: 'Label profile on the music database',
    link: '#',
  },
  {
    source: 'The Org',
    date: 'Ongoing',
    headline: 'Andrew Hawkins — Executive Profile',
    quote: 'An accomplished music and entertainment executive with extensive experience in rights management, talent development, and digital strategy. Executive Director at Mushroom Group (XXYV Rights).',
    context: 'Executive profile and organisational chart entry',
    link: '#',
  },
  // Loose mentions and tabloid coverage
  {
    source: 'Daily Mail Australia',
    date: 'Various',
    headline: 'Coverage of Kyle Sandilands, King Kyle Investments, and associated ventures',
    quote: 'Ongoing tabloid coverage referencing Hawkins as Sandilands\' manager and business partner across various stories about The Kyle & Jackie O Show, King Kyle Investments, and related commercial dealings.',
    context: 'Ongoing tabloid mentions in celebrity and entertainment coverage',
    link: '#',
  },
  {
    source: 'The Australian',
    date: 'Various',
    headline: 'Commercial radio coverage — ARN, KIIS FM, and industry deals',
    quote: 'Referenced in coverage of ARN network strategy, KIIS FM brand positioning, and the broader commercial radio landscape in Australia during the 2007–2018 period.',
    context: 'National newspaper coverage of media industry deals',
    link: '#',
  },
  {
    source: 'Sydney Morning Herald',
    date: 'Various',
    headline: 'Media coverage — radio ratings, talent deals, and industry commentary',
    quote: 'Mentioned in coverage of radio ratings wars, talent contract negotiations, and the competitive dynamics between ARN, Southern Cross Austereo, and other networks during the Kyle & Jackie O era.',
    context: 'Sydney-focused media coverage of radio industry dynamics',
    link: '#',
  },
  {
    source: 'Mumbrella',
    date: 'Various',
    headline: 'Media and marketing industry coverage',
    quote: 'Referenced in industry trade coverage of brand partnerships, sponsorship deals, and commercial arrangements associated with The Kyle & Jackie O Show and related ventures.',
    context: 'Australian media and marketing trade publication mentions',
    link: '#',
  },
  {
    source: 'ARN / KIIS FM',
    date: 'Various',
    headline: 'Corporate press releases and announcements',
    quote: 'Featured in ARN corporate communications regarding the launch of KIIS FM, the signing of Kyle & Jackie O, and subsequent ratings achievements and contract renewals.',
    context: 'Corporate press and internal communications',
    link: '#',
  },
];

export default function PressPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        });
      }
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.press-item');
        gsap.fromTo(items, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 80%' },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Press Archive | Andrew Hawkins — Media Coverage & Mentions</title>
        <meta name="description" content="Complete press archive: Daily Telegraph, Radio Today, Music Week (UK), The Music Network and more. Every mention, feature, and reference across two decades in music and media." />
        <link rel="canonical" href="https://andrewjameshawkins.com/#/press" />
        <meta property="og:url" content="https://andrewjameshawkins.com/#/press" />
        <meta property="og:title" content="Press Archive | Andrew Hawkins" />
        <meta property="og:description" content="Complete press archive across two decades in music and media." />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="relative min-h-screen bg-midnight">
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundColor: '#0c0e12',
        backgroundImage: `
          repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(196,167,125,0.015) 20px, rgba(196,167,125,0.015) 21px, transparent 21px, transparent 40px),
          repeating-linear-gradient(-135deg, transparent, transparent 20px, rgba(196,167,125,0.015) 20px, rgba(196,167,125,0.015) 21px, transparent 21px, transparent 40px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-midnight-border">
          <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="font-headline text-xl md:text-2xl text-parchment hover:text-gold transition-colors">AH</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-xs text-parchment-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold">Full CV</Link>
              <Link to="/consulting" className="text-xs text-gold hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold">Consulting</Link>
            </div>
            <Link to="/" className="md:hidden text-xs text-gold hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" />Back
            </Link>
          </div>
        </nav>

        <main className="pt-32 md:pt-40 pb-20 md:pb-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div ref={headerRef} className="mb-16 md:mb-20 opacity-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-parchment-dim" />
                <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Press Archive</span>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] font-light mb-6">
                Press clippings & mentions
              </h1>
              <p className="text-parchment-muted text-base md:text-lg font-body leading-relaxed max-w-2xl">
                Every mention, feature, and loose reference across two decades in music, media, and entertainment — 
                the flattering and the unflattering alike. A complete record.
              </p>
            </div>

            <div ref={listRef} className="space-y-0">
              {pressMentions.map((item, i) => (
                <div key={i} className="press-item opacity-0 border-b border-midnight-border py-8 md:py-10 group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-gold text-sm font-body font-semibold">{item.source}</span>
                    <span className="text-midnight-border">·</span>
                    <span className="text-parchment-dim text-xs font-body">{item.date}</span>
                    <span className="text-parchment-dim text-xs font-body tracking-wide ml-auto opacity-50 italic">{item.context}</span>
                  </div>

                  <h3 className="font-headline text-xl md:text-2xl text-parchment font-light mb-4 group-hover:text-gold transition-colors">
                    {item.headline}
                  </h3>

                  <blockquote className="border-l-2 border-gold/40 pl-4 py-1 mb-4">
                    <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-midnight-border text-center">
              <p className="text-parchment-dim text-xs font-body mb-6">
                This is a living archive. Additional mentions from industry coverage, 
                trade publications, and broadcast features will be added as they surface.
              </p>
              <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-parchment transition-colors font-body text-sm font-semibold">
                <ArrowLeft className="w-4 h-4" />Back to full CV
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
