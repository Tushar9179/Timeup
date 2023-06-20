import { gsap } from "gsap"
import imagesLoaded from "imagesloaded"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
await sleep(4000);

gsap.to('svg',{
        scale: 0
})
gsap.to(".blinder",{
    scaleY: 0,
    stagger: 0.1,
    ease: 'power3.out'
})