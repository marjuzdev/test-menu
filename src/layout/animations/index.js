import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const animationParallax = (params) => {
    
    const { selector, y, ease } = params;
    gsap.to(selector, {
      y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
      ease,
      scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0
      }
    });
}

const animationHeadline = (params) => {
    const { selector, y, batchMax, duration, ease } = params;

    ScrollTrigger.batch(selector, {
        interval: 0.1,
        batchMax,
        duration,
        onEnter: batch => {
            gsap.set(selector, { y: 0, opacity: 1 });
            gsap.from(batch, {
                ease,
                opacity: 0,
                y: y,
                stagger: { each: 0.15, grid: [1, batchMax] },
                overwrite: true
            })
        },
        onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
        onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: y, overwrite: true })
    });
    
    // ScrollTrigger.addEventListener("refreshInit", () => gsap.set(selector, { y: 0, opacity: 1 }));
}

const animationStack = (params) => {

    // configs
    //   selector: '.animate-card-2', y: 100,  batchMax: 2, ease: 'sine', duration: 6 })
    //   selector: '.animate-card-3', y: 50, batchMax: 3, ease: 'sine', duration: 3 })
    //   selector: '.animate-card-5', y: 50, batchMax: 5, ease: 'sine', delay: 1000})

    const { selector, y, ease, batchMax, duration, delay } = params;

    ScrollTrigger.batch(selector, {
        interval: 0.1,
        batchMax,
        duration: duration || null,
        delay: delay || null,
        onEnter: batch => {
            gsap.set(batch, { y: 0, opacity: 1 });
            gsap.from(batch, {
                delay: 0.5,
                opacity: 0,
                y: y,
                ease: ease || 'sine',
                stagger: { each: 0.15, grid: [1, batchMax] },
                overwrite: true,
            },)
        },

        onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
        onLeaveBack: batch => gsap.set(batch, { opacity: 0, y, overwrite: true })
    });
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(selector, { y: 0, opacity: 1 }));
}

const animationRotation = (params) => {
    const { selector, ease, rotate } = params;

    ScrollTrigger.batch(selector, {
        onEnter: batch => {
            gsap.fromTo(batch, {
                ease,
                rotate: -30,
            }, {
                rotate,
                scrollTrigger: {
                    trigger: batch,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        }
    });
    // ScrollTrigger.addEventListener("refreshInit", () => gsap.set(selector, { y: 0, opacity: 1 }));
}

const animationUp = (params) => {
    const { selector, y, ease, batchMax, duration, delay } = params;
    
  
    ScrollTrigger.batch(selector, {
      onEnter: batch => {
        gsap.set(batch, { opacity: 0});
        gsap.from(batch, {
          delay: 0.5,
          duration: duration || 1.2,
          opacity: 0,
          y,
          ease: ease || 'sine',
          overwrite: true
        });
      }
    });
    // ScrollTrigger.addEventListener("refreshInit", () => gsap.set(selector, { y: 0, opacity: 1 }));
};

const animationGeneric = ( animation ) => {

    const animations = {
        '.fade-from-bottom': { y: 180, opacity: 0 },
        '.fade-from-top': { y: -180, opacity: 0 },
        '.fade-from-left': { x: -180, opacity: 0 },
        '.fade-from-right': { x: 180, opacity: 0 },
        '.fade-in': { opacity: 0, ease: "power4.in", duration: 1 },
        '.rotate-up': { y: 180, rotation: 10, opacity: 0 },
    };
    ScrollTrigger.batch(animation, {
        onEnter: batch => {
                // gsap.set(batch, { opacity: 0});
                gsap.from(batch,{
                    ...animations[animation],
                    // ease: "power4.inOut",
                    // duration: 1.5,
                    delay: 0.3
                });
        }
    });
    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(animation, { y: 0, opacity: 0 }));
};

export default {
    animationParallax,
    animationHeadline,
    animationStack,
    animationUp,
    animationRotation,
    animationGeneric
}