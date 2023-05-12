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

// let treeTimeLine = gsap.timeline({
//     scrollTrigger: {
//         trigger : ".treeDiv",
//         markers: true,
//         start: "20px",
//         // end: "500px"
//     }
    
// });

// // treeTimeLine.to(".treeImg" ,{y: 100, opacity: 0, duration: 2})
// treeTimeLine.to(".treeImg", {y: 50, opacity: 0})
// .addLabel("btnin")

// treeTimeLine.to(".treeImg", {y: -50, opacity: 1});



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






