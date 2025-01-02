import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const smoothScroll = (target, duration = 1) => {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      autoKill: false,
      ease: "power2.inOut"
    }
  });
}; 