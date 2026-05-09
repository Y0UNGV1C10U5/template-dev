import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PinnedHeaderOptions {
  pinEnd?: string;
  fadeStart?: string;
  fadeEnd?: string;
  pinnedTop?: string;
}

export function usePinnedHeader(
  sectionRef: React.RefObject<HTMLDivElement | null>,
  headerRef: React.RefObject<HTMLDivElement | null>,
  options: PinnedHeaderOptions = {}
) {
  const {
    pinEnd = '+=400',
    fadeStart = 'top 50%',
    fadeEnd = '+=200',
    pinnedTop = '10px',
  } = options;

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

    // Content needs solid background so pinned heading behind doesn't show through
    const contentWrapper = sectionRef.current.querySelector('.section-content');
    if (contentWrapper && contentWrapper instanceof HTMLElement) {
      contentWrapper.style.position = 'relative';
      contentWrapper.style.zIndex = '20';
    }

    // PIN: hold header in place near top
    const pinTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: `top ${pinnedTop}`,
      end: pinEnd,
      pin: headerRef.current,
      pinSpacing: false,
    });

    // FADE: dissolve header quickly as content approaches
    const fadeTrigger = gsap.fromTo(
      headerRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: fadeStart,
          end: fadeEnd,
          scrub: 0.5,
        },
      }
    );

    return () => {
      pinTrigger.kill();
      fadeTrigger.scrollTrigger?.kill();
      fadeTrigger.kill();
    };
  }, [sectionRef, headerRef, pinEnd, fadeStart, fadeEnd, pinnedTop]);
}
