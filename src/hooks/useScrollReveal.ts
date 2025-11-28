import { MutableRefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type MotionPreset = "fade-up" | "fade-right" | "fade-left" | "scale-in";

interface ScrollRevealOptions {
  start?: string;
  once?: boolean;
  threshold?: number;
}

const motionPresets: Record<MotionPreset, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  "fade-up": {
    from: { opacity: 0, y: 56 },
    to: { opacity: 1, y: 0 },
  },
  "fade-right": {
    from: { opacity: 0, x: -40 },
    to: { opacity: 1, x: 0 },
  },
  "fade-left": {
    from: { opacity: 0, x: 40 },
    to: { opacity: 1, x: 0 },
  },
  "scale-in": {
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
  },
};

export const useScrollReveal = (
  scope: MutableRefObject<HTMLElement | null>,
  { start = "top 80%", once = true, threshold = 0 }: ScrollRevealOptions = {}
) => {
  useLayoutEffect(() => {
    if (!scope.current) return undefined;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-animate]");

      targets.forEach((target, index) => {
        const preset = (target.dataset.animate as MotionPreset) || "fade-up";
        const delay = Number(target.dataset.delay || 0);
        const duration = Number(target.dataset.duration || 1.1);
        const { from, to } = motionPresets[preset];

        gsap.fromTo(
          target,
          { ...from },
          {
            ...to,
            duration,
            ease: "power3.out",
            delay,
            stagger: target.hasAttribute("data-stagger") ? 0.08 : undefined,
            scrollTrigger: {
              trigger: target,
              start,
              toggleActions: once ? "play none none none" : "play none none reverse",
              once,
              scrub: false,
              markers: false,
              anticipatePin: 0.8,
              end: `+=${threshold}`,
            },
          }
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scope, start, once, threshold]);
};

export default useScrollReveal;
