import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ArrowLeft, Radio, TrendingUp, Handshake, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router';
import NetworksPartners from '../sections/NetworksPartners';
import BookingForm from '../sections/BookingForm';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Radio,
    title: 'Brand Licensing & Market Entry',
    description: 'Take your brand into new markets with the same playbook that launched KIIS FM Australia and scaled H2coco to national retail. Licensing strategy, partner negotiation, and go-to-market execution.',
    result: 'Licensed KIIS FM from US to AU; #1 ratings in one book',
  },
  {
    icon: TrendingUp,
    title: 'High-Stakes Deal Negotiation',
    description: "Negotiate the deal that changes your trajectory. I've closed $30M+ media contracts, multi-million-dollar exits, and capital raises. Lateral thinking that breaks deadlocks.",
    result: '$30M+ Kyle & Jackie O contract — largest in Australian radio history',
  },
  {
    icon: Handshake,
    title: 'Capital Raising & Growth Advisory',
    description: "From seed to exit — I've raised $30M+ across ventures and shepherded a brand from $200K to a multi-million-dollar acquisition. Investor comms, board strategy, and the story that closes the round.",
    result: '$200K to $35M+; sold H2coco to Pharmacare Laboratories',
  },
];

interface CaseStudy {
  company: string;
  context: string;
  category: string;
  categoryColor: string;
  problem: string;
  move: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: 'KIIS FM / King Kyle Investments',
    context: 'Media Investment & Talent Management',
    category: 'BRAND LICENSING',
    categoryColor: '#C9A96E',
    problem: "The #1 radio show in Australia was stuck on a dying network. Moving frequencies meant starting from zero audience. Kyle Sandilands needed a manager who could think in deals, not just contracts.",
    move: 'Licensed the KIIS FM brand from Clear Channel US and architected the parallel transition of The Kyle and Jackie O Show from Austereo. Negotiated the record-breaking contract with ARN using performance-based equity structures — a fundamentally different approach to talent management in Australian radio.',
    result: '#1 in Sydney in a single ratings book. The $30M+ contract with Kyle Sandilands was the largest in Australian commercial radio history. Named one of Australia\'s Top 10 Radio Talent Managers by Radio Today (2018).',
  },
  {
    company: 'H2coco',
    context: 'Health & Wellness Beverage',
    category: 'CAPITAL RAISING & GROWTH',
    categoryColor: '#00A8E1',
    problem: 'A $200K seed investment and a coconut water brand in a market that barely knew the category existed. No budget for celebrity endorsements. No retail distribution. No brand recognition.',
    move: 'Pioneered the "Celebrity Wrangler" equity-for-endorsement model — trading equity for high-profile talent partnerships when cash was not an option. Orchestrated 360-degree campaigns across TV, radio, print, and digital. Personally spearheaded $30M+ in investment capital raises.',
    result: '$35M+ annual turnover at peak. Multi-million-dollar exit to Pharmacare Laboratories in 2019. Product in every major Australian supermarket chain (Coles, Woolworths, ALDI, IGA, 7-Eleven). Telstra Business Awards — Young Entrepreneurs Finalist.',
  },
  {
    company: 'Young & Vicious',
    context: 'Music Publishing',
    category: 'MARKET ENTRY & JV',
    categoryColor: '#FF6B35',
    problem: 'The music publishing world is dominated by major labels with deep catalogues and deeper pockets. A boutique operation needs exceptional taste and strategic partnerships to compete — and a founder who can raise capital while signing the right writers.',
    move: 'Founded as a joint venture with Mushroom Music Publishing. Built a global writer-producer roster from scratch, securing credits with ZAYN, Marshmello, Kygo, Charli XCX, Rita Ora, and DJ Snake. Drove sync placements across television, film, advertising, and live events.',
    result: '5 billion+ streams across the catalogue. Raised AUD$3M+ in initial funding. Signed Twice As Nice (credits with Rihanna, Post Malone, Bebe Rexha) to an international JV — covered by Music Week (UK) and The Music Network (AU).',
  },
];

const stats = [
  { value: '$35M+', label: 'Peak Annual Turnover Built' },
  { value: '$30M+', label: 'Largest Deal Negotiated' },
  { value: '5B+', label: 'Catalogue Streams' },
  { value: '20+', label: 'Years in Industry' },
];

export default function ConsultingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      if (heroContentRef.current) {
        gsap.fromTo(heroContentRef.current.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
        );
      }

      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll('.service-card');
        gsap.fromTo(cards, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: servicesRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }

      if (caseStudiesRef.current) {
        const items = caseStudiesRef.current.querySelectorAll('.case-study-card');
        gsap.fromTo(items, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: caseStudiesRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Consulting | Andrew Hawkins — Advisory & Deal Strategy</title>
        <meta name="description" content="Advisory sessions with Andrew Hawkins — dealmaker behind Kyle Sandilands and KIIS FM. Brand licensing, deal negotiation & capital raising. $1,000/90-min session." />
        <link rel="canonical" href="https://andrewjameshawkins.com/#/consulting" />
        <meta property="og:url" content="https://andrewjameshawkins.com/#/consulting" />
        <meta property="og:title" content="Consulting | Andrew Hawkins — Advisory & Deal Strategy" />
        <meta property="og:description" content="Advisory sessions for founders and executives. Brand licensing, deal negotiation, capital raising. Deal architect behind Kyle Sandilands and KIIS FM. $1,000/90-min session." />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="relative min-h-screen bg-midnight">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#0c0e12',
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              transparent,
              transparent 20px,
              rgba(196,167,125,0.015) 20px,
              rgba(196,167,125,0.015) 21px,
              transparent 21px,
              transparent 40px
            ),
            repeating-linear-gradient(
              -135deg,
              transparent,
              transparent 20px,
              rgba(196,167,125,0.015) 20px,
              rgba(196,167,125,0.015) 21px,
              transparent 21px,
              transparent 40px
            )
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-md border-b border-midnight-border">
          <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="font-headline text-xl md:text-2xl text-parchment hover:text-gold transition-colors">
              AJH
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-xs text-parchment-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold cursor-pointer">Consultation</a>
              <a href="#case-studies" onClick={(e) => { e.preventDefault(); document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-xs text-parchment-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold cursor-pointer">Case Studies</a>
              <a href="#book" onClick={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-xs text-parchment-muted hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold cursor-pointer">Book</a>
              <Link to="/" className="text-xs text-gold hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold">Full CV</Link>
            </div>
            <Link to="/" className="md:hidden text-xs text-gold hover:text-parchment transition-colors tracking-[0.15em] uppercase font-body font-semibold flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" />CV
            </Link>
          </div>
        </nav>

        <main>
          <section ref={heroRef} className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-20">
            <div ref={heroContentRef} className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-8 h-px bg-gold/60" />
                <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Advisory & Consulting</span>
                <div className="w-8 h-px bg-gold/60" />
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment leading-[1.1] tracking-tight font-light mb-8">
                I take on 2 advisory<br />sessions per month
              </h1>

              <p className="text-parchment-muted text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-10">
                For founders and executives who need to work backward from the outcome — not forward from the problem. 
                Brand licensing, high-stakes negotiation, and capital raising — 
                with the track record to back it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#/consulting#book" onClick={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-3 bg-parchment text-midnight px-8 py-4 rounded-sm font-body font-semibold text-sm tracking-wide hover:bg-gold transition-colors duration-300 cursor-pointer">
                  <Calendar className="w-4 h-4" />Book a session
                </a>
                <Link to="/" className="inline-flex items-center gap-2 text-parchment-muted hover:text-parchment transition-colors font-body text-sm">
                  View full career history<ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="font-headline text-2xl md:text-3xl text-gold font-light">{stat.value}</p>
                    <p className="text-parchment-dim text-[10px] tracking-[0.2em] uppercase font-body mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="relative px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 md:mb-20">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-parchment-dim" />
                  <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Areas of Consultation</span>
                  <div className="w-12 h-px bg-parchment-dim" />
                </div>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-parchment leading-[1.1] max-w-2xl mx-auto font-light">Three ways I can help</h2>
              </div>

              <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {services.map((service, i) => (
                  <div key={i} className="service-card opacity-0 bg-midnight-elevated rounded-lg p-8 md:p-10 border border-midnight-border hover:border-gold/30 transition-all duration-500 group">
                    <div className="w-12 h-12 border border-midnight-border rounded-full flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors">
                      <service.icon className="w-5 h-5 text-parchment-dim group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-headline text-xl md:text-2xl text-parchment mb-4 font-light">{service.title}</h3>
                    <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed mb-6">{service.description}</p>
                    <p className="text-gold text-xs font-body font-medium italic mb-6">{service.result}</p>
                    <div className="pt-4 border-t border-midnight-border">
                      <p className="text-parchment text-sm font-body font-semibold">$1,000 <span className="text-parchment-dim font-normal">/ 90-minute session</span></p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-parchment-dim text-sm font-body max-w-xl mx-auto">
                Sessions are conducted via video call. I limit advisory work to two sessions per month to ensure each engagement gets full attention.
                If your situation is larger in scope, we can discuss a tailored retainer after the initial session.
              </p>
            </div>
          </section>

          <NetworksPartners />

          <section id="case-studies" className="relative px-6" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 md:mb-20 bg-midnight-elevated rounded-lg border border-midnight-border py-12 md:py-16 px-6">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-px bg-parchment-dim" />
                  <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Proof of Work</span>
                  <div className="w-12 h-px bg-parchment-dim" />
                </div>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-parchment leading-[1.1] max-w-2xl mx-auto font-light">Selected case studies</h2>
              </div>

              <div ref={caseStudiesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {caseStudies.map((study, i) => (
                  <div key={i} className="case-study-card opacity-0 bg-midnight-elevated rounded-lg border border-midnight-border hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col">
                    {/* Category tag */}
                    <div className="px-6 pt-5 pb-3 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5" style={{ color: study.categoryColor }} />
                      <span className="text-[10px] tracking-[0.2em] uppercase font-body font-semibold" style={{ color: study.categoryColor }}>
                        {study.category}
                      </span>
                    </div>

                    {/* Company header */}
                    <div className="px-6 pb-4 border-b border-midnight-border">
                      <h3 className="font-headline text-xl md:text-2xl text-parchment font-light">{study.company}</h3>
                      <p className="text-parchment-dim text-xs font-body tracking-wide mt-1">{study.context}</p>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-5 space-y-4 flex-1">
                      <div>
                        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-semibold mb-1.5">The Problem</p>
                        <p className="text-parchment-muted text-sm font-body leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-semibold mb-1.5">The Move</p>
                        <p className="text-parchment-muted text-sm font-body leading-relaxed">{study.move}</p>
                      </div>
                      <div>
                        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-body font-semibold mb-1.5">The Result</p>
                        <p className="text-parchment text-sm font-body leading-relaxed">{study.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <BookingForm />
        </main>
      </div>
    </div>
    </>
  );
}
