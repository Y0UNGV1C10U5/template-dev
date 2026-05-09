import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageSquare, Send, Check, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BookingForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, open email with details pre-filled
    const subject = encodeURIComponent(`Advisory Session Booking — ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Andrew,\n\nI'd like to book a 90-minute advisory session ($1,000).\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Email: ${formData.email}\n\n` +
      `What I'm facing:\n${formData.challenge}\n\n` +
      `Please send me the invoice and available time slots.\n\n` +
      `Thanks!`
    );

    window.location.href = `mailto:andrewjames.hawkins@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div ref={sectionRef} className="relative px-6 py-20 md:py-28">
        <div ref={contentRef} className="max-w-2xl mx-auto text-center opacity-0">
          <div className="bg-midnight-elevated rounded-lg border border-gold/30 p-10 md:p-14">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-headline text-2xl md:text-3xl text-parchment font-light mb-4">
              Request sent
            </h3>
            <p className="text-parchment-muted text-base font-body leading-relaxed mb-6">
              Your email client should have opened with a pre-filled booking request.
              <br /><br />
              Andrew will review your details, confirm availability, and send an invoice.
              Once payment is received, your 90-minute session is locked in.
            </p>
            <p className="text-gold text-sm font-body">
              You'll receive detailed follow-up notes within 24 hours of the session.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="book" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div ref={contentRef} className="max-w-3xl mx-auto opacity-0">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-parchment-dim" />
            <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">
              Book a Session
            </span>
            <div className="w-12 h-px bg-parchment-dim" />
          </div>

          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-parchment leading-[1.1] font-light mb-6">
            Two slots per month.<br />Here's how it works.
          </h2>

          <p className="text-parchment-muted text-lg md:text-xl max-w-xl mx-auto font-body leading-relaxed mb-6">
            I keep advisory work intentionally limited so every session gets proper preparation and follow-through.
            If you're facing a high-stakes decision — a deal, a launch, a pivot — here's the process:
          </p>
        </div>

        {/* Process steps */}
        <div className="flex flex-col items-center gap-4 mb-12 max-w-lg mx-auto">
          <div className="flex items-start gap-4 text-left w-full">
            <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-body font-bold shrink-0">1</span>
            <div>
              <p className="text-parchment font-body font-semibold text-sm">Reach out via LinkedIn or email</p>
              <p className="text-parchment-dim text-sm font-body">Brief overview of what you're facing — no lengthy pitch needed.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left w-full">
            <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-body font-bold shrink-0">2</span>
            <div>
              <p className="text-parchment font-body font-semibold text-sm">Pre-session call (15 min, free)</p>
              <p className="text-parchment-dim text-sm font-body">We establish if it's a fit and what you need from the session.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left w-full">
            <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-body font-bold shrink-0">3</span>
            <div>
              <p className="text-parchment font-body font-semibold text-sm">Payment · $1,000</p>
              <p className="text-parchment-dim text-sm font-body">Invoice issued via Stripe. Once paid, your session is locked in.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left w-full">
            <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-body font-bold shrink-0">4</span>
            <div>
              <p className="text-parchment font-body font-semibold text-sm">90-minute advisory session via Zoom</p>
              <p className="text-parchment-dim text-sm font-body">Lateral thinking, deal strategy, and actionable next steps. Sessions regularly run longer.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-left w-full">
            <span className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-body font-bold shrink-0">5</span>
            <div>
              <p className="text-parchment font-body font-semibold text-sm">Detailed follow-up within 24 hours</p>
              <p className="text-parchment-dim text-sm font-body">Written summary of key insights, frameworks discussed, and 3–5 specific action items.</p>
            </div>
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-midnight-elevated rounded-lg border border-midnight-border p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-5 h-5 text-gold" />
            <h3 className="font-headline text-xl text-parchment font-light">
              Start the booking process
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-parchment-muted text-xs font-body tracking-wide mb-2 block">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-midnight border border-midnight-border rounded-md px-4 py-3 text-parchment text-sm font-body focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-parchment-muted text-xs font-body tracking-wide mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-midnight border border-midnight-border rounded-md px-4 py-3 text-parchment text-sm font-body focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-parchment-muted text-xs font-body tracking-wide mb-2 block">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-midnight border border-midnight-border rounded-md px-4 py-3 text-parchment text-sm font-body focus:border-gold/50 focus:outline-none transition-colors"
                placeholder="Your company (optional)"
              />
            </div>

            <div>
              <label className="text-parchment-muted text-xs font-body tracking-wide mb-2 block">
                What are you facing? *
              </label>
              <textarea
                required
                rows={4}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full bg-midnight border border-midnight-border rounded-md px-4 py-3 text-parchment text-sm font-body focus:border-gold/50 focus:outline-none transition-colors resize-none"
                placeholder="Brief overview — the deal, the pivot, the launch. What do you need help with?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-3 bg-parchment text-midnight px-8 py-4 rounded-sm font-body font-semibold text-sm tracking-wide hover:bg-gold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Processing... <Send className="w-4 h-4 animate-pulse" /></>
              ) : (
                <>Send booking request <Send className="w-4 h-4" /></>
              )}
            </button>

            <p className="text-parchment-dim text-xs font-body text-center">
              $1,000 per 90-minute session · Detailed follow-up notes within 24 hours · Limited to 2 engagements per month
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-midnight-border" />
            <span className="text-parchment-dim text-xs font-body">or</span>
            <div className="flex-1 h-px bg-midnight-border" />
          </div>

          {/* Direct contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/andrewjameshawkins"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-parchment-muted hover:text-parchment transition-colors font-body text-sm"
            >
              <MessageSquare className="w-4 h-4" />Reach out via LinkedIn
            </a>
            <a
              href="mailto:andrewjames.hawkins@gmail.com"
              className="inline-flex items-center gap-2 text-parchment-muted hover:text-parchment transition-colors font-body text-sm"
            >
              <Mail className="w-4 h-4" />or email directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
