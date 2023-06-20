import { gsap } from "gsap"


await new Promise(resolve => setTimeout(resolve, 4000));


gsap.to('svg',{
        scale: 0
})
gsap.to(".blinder",{
    scaleY: 0,
    stagger: 0.1,
    ease: 'power3.out'
})