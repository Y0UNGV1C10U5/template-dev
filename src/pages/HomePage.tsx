import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import Profile from '../sections/Profile';
import ResultsStrip from '../sections/ResultsStrip';
import CareerTimeline from '../sections/CareerTimeline';
import Highlights from '../sections/Highlights';
import FeaturedQuote from '../sections/FeaturedQuote';
import Recommendations from '../sections/Recommendations';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Andrew Hawkins | Executive, Dealmaker & Advisor — Full CV</title>
        <meta name="description" content="Founder, executive, and dealmaker with a track record across music, media, and brand-building. Built Kyle Sandilands into the largest talent deal in Australian radio. KIIS FM, H2coco, Young & Vicious. Advisory sessions available." />
        <link rel="canonical" href="https://andrewjameshawkins.com" />
        <meta property="og:url" content="https://andrewjameshawkins.com" />
        <meta property="og:title" content="Andrew Hawkins | Executive, Dealmaker & Advisor" />
        <meta property="og:description" content="Founder, executive, and dealmaker with a track record across music, media, and brand-building. $35M+ exits, $30M+ deals, 5B+ streams." />
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
        <Navigation />
        <main>
          <Hero />
          <Profile />
          <ResultsStrip />
          <CareerTimeline />
          <Highlights />
          <FeaturedQuote />
          <Recommendations />

          {/* Press Archive Link — moved after Recommendations */}
          <section id="press" className="relative px-6" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-parchment-dim" />
                <span className="text-parchment-muted text-[10px] tracking-[0.35em] uppercase font-body font-semibold">Press Archive</span>
                <div className="w-12 h-px bg-parchment-dim" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-parchment leading-[1.1] font-light mb-6">
                Two decades of press coverage
              </h2>
              <p className="text-parchment-muted text-base md:text-lg font-body leading-relaxed max-w-2xl mx-auto mb-10">
                From feature profiles in the Daily Telegraph and Radio Today to UK trade coverage in Music Week 
                and industry recognition — every mention, feature, and loose reference, archived in full. 
                The flattering and the unflattering alike.
              </p>
              <Link
                to="/press"
                className="inline-flex items-center gap-3 text-gold hover:text-parchment transition-colors font-body text-base md:text-lg font-semibold tracking-wide"
              >
                View complete press archive
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          <Skills />
          <Contact />
        </main>
      </div>
    </div>
    </>
  );
}
