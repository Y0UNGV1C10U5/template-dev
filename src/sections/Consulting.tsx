import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Radio, TrendingUp, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Radio,
    title: 'Brand Licensing & Market Entry',
    description: 'Take your brand into new markets with the same playbook that launched KIIS FM Australia and scaled H2coco to national retail. Full licensing strategy, partner negotiation, and go-to-market execution.',
    result: 'Example: Licensed KIIS FM from US to AU; #1 ratings in one book',
  },
  {
    icon: TrendingUp,
    title: 'High-Stakes Deal Negotiation',
    description: 'Negotiate the deal that changes your trajectory. I\'ve closed $30M+ media contracts, multi-million-dollar exits, and capital raises. I bring the lateral thinking that breaks deadlocks.',
    result: 'Example: $30M+ Kyle & Jackie O contract — largest in Australian radio history',
  },
  {
    icon: Handshake,
    title: 'Capital Raising & Growth Advisory',
    description: 'From seed to exit — I\'ve raised $30M+ across multiple ventures and shepherded a brand from $200K to a multi-million-dollar acquisition. Investor comms, board strategy, and the story that closes the round.',
    result: 'Example: $200K to $35M+; sold H2coco to Pharmacare Laboratories',
  },
];

export default function Consulting() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll('.consult-card');
        gsap.fromTo(cards, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="consulting" ref={sectionRef} className="relative px-6" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16 md:mb-20 opacity-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Consulting</span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-parchment leading-[1.1] max-w-3xl font-light mb-6">
            I take on 3–4 advisory engagements per quarter
          </h2>
          <p className="text-parchment-muted text-lg md:text-xl max-w-2xl font-body leading-relaxed">
            With founders and executives who need to make the deal that changes their trajectory. If that sounds like you, let's talk.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {services.map((service, i) => (
            <div key={i} className="consult-card opacity-0 bg-midnight-elevated rounded-lg p-8 md:p-10 border border-midnight-border hover:border-gold/30 transition-all duration-500 group">
              <div className="w-12 h-12 border border-midnight-border rounded-full flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors">
                <service.icon className="w-5 h-5 text-parchment-dim group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-headline text-xl md:text-2xl text-parchment mb-4 font-light">{service.title}</h3>
              <p className="text-parchment-muted text-sm md:text-base font-body leading-relaxed mb-6">{service.description}</p>
              <p className="text-gold text-xs font-body font-medium italic">{service.result}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/andrewjameshawkins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-parchment text-midnight px-8 py-4 rounded-sm font-body font-semibold text-sm tracking-wide hover:bg-gold transition-colors duration-300"
          >
            Book a discovery call via LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-parchment-dim text-xs font-body mt-4">
            Or email: andrewjames.hawkins@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
