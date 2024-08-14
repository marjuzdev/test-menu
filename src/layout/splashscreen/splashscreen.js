
import { gsap } from 'gsap';

const run = () => {

    // document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    body.classList.add('loading');
    const animationTimeline = gsap.timeline();
    const svg = document.querySelector("#splashscreen svg path");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    document.addEventListener("DOMContentLoaded", () => {
        animationTimeline.to(["#splashscreen h3", "#splashscreen .line-frame"], {
            ease: "power4.inOut",
            duration: 1,
            opacity: 0,
            y: "100%",
            delay: 1,
        });

        animationTimeline.to(svg, {
            ease: "power4.easeOut",
            duration: 0.5,
            attr: { d: curve },
        })
        animationTimeline.to(svg, {
            ease: "power4.easeOut",
            duration: 0.5,
            attr: { d: flat },
            onComplete: () => {
                body.classList.remove('loading');
            }
        });

        animationTimeline.to("#splashscreen", {
            ease: "power4.easeOut",
            y: "-100%",
            // y: -1500,
            zIndex: -1
        });
    })
}

export default {
    run
}
