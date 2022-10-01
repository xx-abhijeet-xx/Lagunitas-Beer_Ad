function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init();


gsap.to("#bottle",{
    rotate:"-15deg",
    scrollTrigger:{
        trigger:"#bottle",
        scroller:"#main",
        start:"top 5%",
        end:"top -435%",
        scrub:3,
        pin:true
    }
})
gsap.to("#bottle",{
    scale:0.7,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 70%",
        scrub:3,
    }
})
gsap.from("#page1 h1",{
  y: "10%",
  duration: 2,
  ease : Expo.easeinOut,
  opacity: 0,
  stagger: 0.5,
  delay:1,
})
gsap.from("#bottle",{
  y: "10%",
  duration: 2,
  ease : Expo.easeinOut,
  opacity: 0,
  stagger: 0.5,
  delay:1,
})
gsap.from("#dog",{
  y: "-100%",
  duration: 2,
  ease : Expo.easeinOut,
  opacity: 0,
  stagger: 0.5,
  delay:1,
})
gsap.from("#left",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 40%",
        scrub:3,
    }
})
gsap.from("#right",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 40%",
        scrub:3,
    }
},'-=2')
gsap.from("#page3",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 0%",
        scrub:3,
    }
})
gsap.from("#center",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 0%",
        scrub:3,
    }
})
gsap.from("#page4",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 80%",
        scrub:3,
    }
})
gsap.from("#page5",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 0%",
        scrub:3,
    }
})
gsap.from("#page6",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 0%",
        scrub:3,
    }
})
