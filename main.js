import { gsap } from "gsap"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  console.log("Hello");
    sleep(4000).then(() => { 
        gsap.to('svg',{
            scale: 0
    })
    gsap.to(".blinder",{
        scaleY: 0,
        stagger: 0.1,
        ease: 'power3.out'
    })
   });

