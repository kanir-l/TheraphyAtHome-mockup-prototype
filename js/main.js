gsap.registerPlugin(ScrollTrigger)


gsap.from(".about-content", {
    duration: 1, y:"2vw", opacity:0, ease: "power3.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".about-content",
        start:"top 80%", 
        end:"bottom 80%", 

        toggleActions:"restart complete reverse reset"
      }
})

gsap.from(".about-topic", {
  duration: 1, y:"2vw", opacity:0, ease: "power2.outout", ease:"linear", 
    scrollTrigger: {
      trigger:".about-topic",
      start:"top 80%", 
      end:"bottom 80%", 

      toggleActions:"restart complete reverse reset"
    }
}) 

gsap.from(".about-content p", {
    duration: 1, y:"3vw", opacity:0, ease: "power2.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".about-content p",
        start:"top 80%", 
        end:"bottom 80%", 

        toggleActions:"restart complete reverse reset"
      }
})

gsap.from(".content-left", {
    duration: 0.5, opacity:0, scale: 0.9, ease: "expo.out", ease:"linear", 
      scrollTrigger: {
        trigger:".content-left",
        start:"top 90%", 
        end:"bottom 90%", 

        toggleActions:"restart complete reverse reset"
      }
})
gsap.to(".content-left", {duration: 1, scale: 1, ease: "expoScale(1, 1)"});

gsap.from(".content-left .content-topic", {
    duration: 1, y:"3vw", opacity:0, ease: "power2.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".content-left .content-topic",
        start:"top 80%", 
        end:"bottom 80%", 

        toggleActions:"restart complete reverse reset"
      }
})

gsap.from(".content-left p", {
    duration: 1, y:"3vw", opacity:0, ease: "power2.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".content-left p",
        start:"top 70%", 
        end:"bottom 70%", 

        toggleActions:"restart complete reverse reset"
      }
})

gsap.from(".content-right", {
    duration: 0.5, opacity:0, scale: 0.9, ease: "power3.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".content-right",
        start:"top 80%", 
        end:"bottom 80%", 

        toggleActions:"restart complete reverse reset"
      }
})
gsap.to(".content-right", {duration: 1, scale: 1, ease: "expoScale(1, 1)"});

gsap.from(".content-right .content-topic", {
    duration: 1, y:"3vw", opacity:0, ease: "power2.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".content-right .content-topic",
        start:"top 70%", 
        end:"bottom 70%", 

        toggleActions:"restart complete reverse reset"
      }
})

gsap.from(".content-right p", {
    duration: 1, y:"3vw", opacity:0, ease: "power2.outout", ease:"linear", 
      scrollTrigger: {
        trigger:".content-right p",
        start:"top 60%", 
        end:"bottom 60%", 

        toggleActions:"restart complete reverse reset"
      }
})


