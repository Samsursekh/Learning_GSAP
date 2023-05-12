let tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".dark",
        start: "center bottom"
    }
});

tl.from(".image2" ,{x: 200, opacity:0, duration: 1.5})
tl.from(".content", {y: 300, opacity:0, duration:1}, "-=1")

let tl2 = gsap.timeline({
    default: {
        opacity: 0,
        ease: "bounce.out",
        duration:1
    }
})



tl2.fromTo(".sidebar", {width: 0}, {
    opacity: 1,
    width: "30%",
    duration: 3
})

tl2.fromTo(".heroImg", {x:0}, {
 opacity: 1
})

tl2.fromTo(".content1", {x: 100}, {
    opacity: 1,
    x: 0
})

const showAnim = gsap.from('.treeImg', { 
    yPercent: 10,
    opacity: 0,
    duration: 0.1
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: 200,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });

//   animation of all four divs

gsap.to('#firstDiv', {
    scrollTrigger: {
        trigger: "#firstDiv",
        toggleActions: "restart pause resume none",
        // markers: true,
        start: "100px center",
    },
    opacity: 1,
    // rotation: 360,
    duration: 2
})

gsap.to('#secondDiv', {
    scrollTrigger: {
        trigger: "#secondDiv",
        toggleActions: "restart pause resume none",
        start: "100px center",
    },
    opacity: 1,
    // rotation: 360,
    duration: 2
})

gsap.to('#thirdDiv', {
    scrollTrigger: {
        trigger: "#thirdDiv",
        toggleActions: "restart pause resume none",
        start: "100px center",
    },
    opacity: 1,
    // rotation: 360,
    duration: 2
})
gsap.to('#fourthDiv', {
    scrollTrigger: {
        trigger: "#fourthDiv",
        toggleActions: "restart pause resume none",
        start: "100px center",
    },
    opacity: 1,
    // rotation: 360,
    duration: 2
})

// making design for mask

const mask = document.querySelector('.mask');
gsap.to(mask, {
    width: "120%",
    scrollTrigger : {
       trigger: "svg",
       start: "100px bottom",
       scrub: 1,
    //    markers: true
    }
})

