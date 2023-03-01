{/* <script> */}
$(".slider-test").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slideToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
});
$(".slider-test-card").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slideToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slideToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slideToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//GSAP ScrollTrigger Initialization
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(CSSRulePlugin);
gsap.config({ trialWarn: false });

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) {
    return layoutChangedCallback(e.matches);
  });
  layoutChangedCallback(mql.matches);
}

// Header Animation
const navLinkAnimation = gsap.timeline();
navLinkAnimation.staggerFrom(
  ".header .navbar-nav .nav-link",
  0.8,
  {
    opacity: 0,
    y: 40,
    ease: Expo.easeOut,
  },
  0.2
);
navLinkAnimation.from(
  ".header .btn-primary",
  {
    opacity: 0,
    y: 40,
    ease: Expo.easeOut,
  },
  "-=1"
);

// Hero Animation
const heroMockupAnimation = gsap.timeline();
heroMockupAnimation.fromTo(
  ".hero-mockup-block .hero-mockup",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: Power1.easeOut,
  }
);
heroMockupAnimation.fromTo(
  ".shape-wrapper .alert-notification",
  {
    opacity: 0,
    maxWidth: 300,
    right: 105,
    top: 176,
    height: 5,
  },
  {
    opacity: 1,
    y: 40,
    height: "auto",
    ease: Expo.easeOut,
  }
);
heroMockupAnimation.to(".shape-wrapper .alert-notification", {
  top: 405,
  right: 338,
  maxWidth: 208,
  delay: 0.8,
});
heroMockupAnimation.from(".shape-wrapper .bell-icon", {
  opacity: 0,
  ease: Power3.easeOut,
});
heroMockupAnimation.fromTo(
  ".shape-wrapper .properties-notification",
  {
    opacity: 0,
    maxWidth: 300,
    right: 105,
    top: 176,
    height: 5,
  },
  {
    opacity: 1,
    y: 40,
    height: "auto",
    ease: Expo.easeOut,
  }
);
heroMockupAnimation.to(".shape-wrapper .properties-notification", {
  top: 182,
  right: 0,
  maxWidth: 206,
  delay: 0.8,
});
heroMockupAnimation.from(".shape-wrapper .properties-icon", {
  opacity: 0,
});

var path = document.querySelector(".path");
var length = path.getTotalLength();
console.log(length);

//Text Animation
const heroTextAnimation = gsap.timeline();
heroTextAnimation.from(".hero-content h2", {
  opacity: 0,
  duration: 0.8,
  x: -350,
  ease: Power2.easeOut,
});
heroTextAnimation.from(
  ".hero-content h4",
  {
    opacity: 0,
    x: 350,
    duration: 0.8,
    ease: Power2.easeOut,
  },
  "-=0.8"
);
heroTextAnimation.from(
  ".hero-content p",
  {
    opacity: 0,
    x: -350,
    duration: 0.8,
    ease: Power2.easeOut,
  },
  "-=1"
);
heroTextAnimation.from(
  ".hero-content .btn-primary",
  {
    opacity: 0,
    y: 40,
    duration: 1,
  },
  "-=1.2"
);
var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, delay:1 });
tl.to(".hero-content .path", {
  strokeDashoffset: 0,
  duration: 1,
}).to(".hero-content .path", {
  opacity: 0,
  delay: 3,        
});

// Lost Type Animations
const lostTypeAnimation = gsap.timeline({
  scrollTrigger: ".lost-types",
  opacity: 0,
  start: "center center",
  end: "+=500",
  markers: true,
});
lostTypeAnimation.staggerFrom(
  ".lost-types .col-sm-6",
  0.5,
  {
    opacity: 0,
    y: 40,
    ease: Expo.Power2,
  },
  0.3
);

// How It Works Animations
const howItWorksMobileAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-works",
    start: "top 70%",
    end: "+=500",
  },
});
howItWorksMobileAnimation.from(
  ".how-it-works .mockup-block .mobile-mockup",
  {
    opacity: 0,
    scale: 0,
    duration: 1.5,
    delay: 0.8,
    ease: Elastic.easeOut,
  }
);
howItWorksMobileAnimation.fromTo(
  ".how-it-works .mockup-block .map-mockup-outer",
  {
    opacity: 0,
    scale: 0,
    left: 56,
    top: 132,
  },
  {
    opacity: 1,
    scale: 1,
    left: -100,
    ease: Power1.easeOut,
  },
  "-=0.9"
);

const howItWorksAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".how-it-works",
    start: "top 70%",
    end: "+=500",
  },
});
howItWorksAnimation.from(".how-it-works .page-title", {
  opacity: 0,
  y: 100,
  ease: Expo.Power2,
});
howItWorksAnimation.from(
  ".how-it-works .title-info",
  {
    opacity: 0,
    y: 100,
    ease: Expo.Power2,
  },
  "-=0.1"
);
howItWorksAnimation.staggerFrom(
  ".how-it-works .gsap-ltr",
  0.4,
  {
    opacity: 0,
    x: -100,
    ease: Expo.Power2,
  },
  0.2
);
howItWorksAnimation.staggerFrom(
  ".how-it-works .gsap-rtl",
  0.4,
  {
    opacity: 0,
    x: 100,
    ease: Expo.Power2,
  },
  0.2
);
howItWorksAnimation.from(".how-it-works .btn-primary", {
  opacity: 0,
  ease: Expo.Power2,
});

//Pick Solution Animation
const pickSolutionAnimation = gsap.timeline({
  scrollTrigger: ".pick-solution .page-title",
  opacity: 0,
  start: "center center",
  end: "+=500",
  markers: true,
});
pickSolutionAnimation.from(".pick-solution .page-title", {
  opacity: 0,
  x: -100,
  ease: Expo.Power2,
});
pickSolutionAnimation.staggerFrom(
  ".pick-solution .nav-pills .nav-item",
  0.6,
  {
    opacity: 0,
    y: 40,
    ease: Expo.Power2,
  },
  0.2,
  "-=0.3"
);
pickSolutionAnimation.fromTo(
  ".homeowner-tab .bg-wrapper",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    ease: Power2.easeOut,
  },
  "-=1"
);
pickSolutionAnimation.from(
  ".homeowner-tab .tab-keypoints",
  {
    opacity: 0,
    x: -100,
    ease: Expo.Power2,
  },
  "-=0.3"
);
pickSolutionAnimation.from(
  ".homeowner-tab .text-block",
  {
    opacity: 0,
    y: -100,
    ease: Expo.Power2,
  },
  "-=0.2"
);

//Testimonial Animation 1
const testimonialAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonials .page-title",
    start: "top 70%",
    end: "bottom bottom",
  },
});
testimonialAnimation.from(".testimonials .page-title", {
  opacity: 0,
  x: -100,
  ease: Power2.easeOut,
});
testimonialAnimation.from(
  ".testimonials .video-outer",
  {
    opacity: 0,
    x: -100,
    duration: 0.5,
    ease: Power2.easeOut,
  },
  "-=0.2"
);
testimonialAnimation.from(
  ".with-side-slider .slider-test",
  {
    opacity: 0,
    x: 250,
    duration: 0.5,
    ease: Power2.easeOut,
  },
  "-=0.5"
);

//Testimonial Animation 2
const testimonialTwoAnimation = gsap.timeline({
  scrollTrigger: ".with-card-slider .page-title",
  opacity: 0,
  start: "center center",
  end: "+=500",
  markers: true,
});
testimonialTwoAnimation.staggerFrom(
  ".with-card-slider .card",
  0.6,
  {
    opacity: 0,
    y: 60,
    ease: Expo.Power2,
  },
  0.2
);

//Latest Update Animation
const latestUpdateAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".latest-update",
    opacity: 0,
    start: "top 70%",
    end: "+=500",
  },
});
latestUpdateAnimation.from(".latest-update h4", {
  opacity: 0,
  y: 40,
  ease: Expo.Power2,
});
latestUpdateAnimation.from(
  ".latest-update .slider-block",
  {
    opacity: 0,
    y: 40,
    ease: Expo.Power2,
  },
  "-=0.4"
);
latestUpdateAnimation.from(".latest-update .page-title", {
  opacity: 0,
  x: -100,
  ease: Expo.Power2,
});
latestUpdateAnimation.from(
  ".latest-update .gsap-rtl",
  {
    opacity: 0,
    x: 100,
    ease: Expo.Power2,
  },
  "-=0.2"
);
latestUpdateAnimation.from(
  ".latest-update .overline",
  {
    opacity: 0,
    y: 40,
    ease: Expo.Power2,
  },
  "-=0.2"
);
latestUpdateAnimation.from(".latest-update .btn-primary", {
  opacity: 0,
  ease: Expo.Power2,
});

//Pricing Card Animation
const pricingCardAnimation = gsap.timeline({
  scrollTrigger: ".pricing-wrapper .page-title",
  opacity: 0,
  start: "center center",
  end: "+=500",
  markers: true,
});
pricingCardAnimation.from(".pricing-wrapper .page-title", {
  opacity: 0,
  x: -100,
  ease: Expo.Power2,
});
pricingCardAnimation.staggerFrom(
  ".pricing-wrapper .col-md-4",
  0.6,
  {
    opacity: 0,
    y: 50,
    ease: Expo.Power2,
  },
  0.2
);
pricingCardAnimation.from(".pricing-wrapper .text-with-link", {
  opacity: 0,
  y: 40,
  ease: Expo.Power2,
});

//About Us Animation
const aboutUsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-us",
    start: "top 70%",
  },
});
aboutUsAnimation.from(".about-us .page-title", {
  opacity: 0,
  y: 60,
  ease: Expo.Power2,
});
aboutUsAnimation.from(".about-us .title-info", {
  opacity: 0,
  y: 30,
  ease: Expo.Power2,
});
aboutUsAnimation.staggerFrom(
  ".about-us .about-us-content p",
  0.6,
  {
    opacity: 0,
    y: 30,
    ease: Expo.Power2,
  },
  0.1
);
aboutUsAnimation.from(
  ".about-us .link-wrapper",
  {
    opacity: 0,
    y: 30,
    ease: Expo.Power2,
  },
  "<"
);

//Get property info Animation
const getPropertyInfoAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".get-property-info",
    start: "top 80%",
  },
});
getPropertyInfoAnimation.from(
  ".get-property-info .page-title",
  {
    opacity: 0,
    x: -100,
    ease: Expo.Power2,
  },
  0.1
);
getPropertyInfoAnimation.from(
  ".get-property-info .helper-text",
  {
    opacity: 0,
    x: 100,
    ease: Expo.Power2,
  },
  0.1
);
getPropertyInfoAnimation.from(
  ".get-property-info .input-group",
  {
    opacity: 0,
    y: 100,
    ease: Expo.Power2,
  },
  0.1
);
getPropertyInfoAnimation.fromTo(
  ".swing-notification",
  {
    opacity: 0,
    transform: "rotate(90deg)",
    transformOrigin: "50% 0",
  },
  {
    opacity: 1,
    transform: "rotate(-10deg)",
    ease: Power1.easeOut,
  }
);
getPropertyInfoAnimation.fromTo(
  ".swing-notification",
  {
    transform: "rotate(-10deg)",
    transformOrigin: "50% 0",
  },
  {
    transform: "rotate(8deg)",
    ease: Power1.easeOut,
  }
);
getPropertyInfoAnimation.fromTo(
  ".swing-notification",
  {
    transform: "rotate(8deg)",
    transformOrigin: "50% 0",
  },
  {
    transform: "rotate(-6deg)",
    ease: Power1.easeOut,
  }
);
getPropertyInfoAnimation.fromTo(
  ".swing-notification",
  {
    transform: "rotate(-6deg)",
    transformOrigin: "50% 0",
  },
  {
    transform: "rotate(4deg)",
    ease: Power1.easeOut,
  }
);
getPropertyInfoAnimation.fromTo(
  ".swing-notification",
  {
    transform: "rotate(4deg)",
    transformOrigin: "50% 0",
  },
  {
    transform: "rotate(0)",
    duration: 0.5,
    ease: Power1.easeOut,
  }
);

//Footer Animation
const footerAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    opacity: 0,
    start: "top 90%",
  },
});
footerAnimation.from(".footer .footer-logo", {
  opacity: 0,
  x: -60,
  ease: Expo.Power2,
});
footerAnimation.from(
  ".footer .location",
  {
    opacity: 0,
    x: -60,
    ease: Expo.Power2,
  },
  "-=0.3"
);
footerAnimation.from(
  ".footer .call-link-wrapper",
  {
    opacity: 0,
    x: -60,
    ease: Expo.Power2,
  },
  "-=0.3"
);
footerAnimation.from(
  ".footer .other-company",
  {
    opacity: 0,
    x: 60,
    ease: Expo.Power2,
  },
  0.3
);
footerAnimation.from(
  ".footer .copyright",
  {
    opacity: 0,
    x: 60,
    ease: Expo.Power2,
  },
  0.3
);
footerAnimation.from(
  ".footer .other-links",
  {
    opacity: 0,
    x: 60,
    ease: Expo.Power2,
  },
  0.3
);

//Number Increment Animation
const numberIncrementAnimation = gsap.timeline({
  scrollTrigger: ".lost-types",
  opacity: 0,
  start: "center center",
  markers: true,
});
numberIncrementAnimation.from(".lost-types h3", {
  textContent: 0,
  duration: 1.8,
  ease: Expo.easeIn,
});

//On Hover Toggle Class
const latestUpdateWrapper = document.getElementById("latestUpdate");
const openAccountBtn = document.getElementById("openFreeAccount");
openAccountBtn.addEventListener("mouseenter", function (event) {
  latestUpdateWrapper.classList.add("bg-scaled");
});
openAccountBtn.addEventListener("mouseleave", function (event) {
  latestUpdateWrapper.classList.remove("bg-scaled");
});

//mousemove animation
const parallaxContainer = document.getElementById("parallaxWrapper");

let flag = false;
parallaxContainer.addEventListener("mouseenter", function (event) {
  if (!flag) {
    flag = true;
    parallaxContainer.classList.add("hoverd");
    setTimeout(() => {
      parallaxContainer.classList.remove("hoverd");
      flag = false;
    }, "4000");
  }
});

// Timeline For Tab Animation
let homeTabAnimation = gsap.timeline({ paused: true });
homeTabAnimation
  .fromTo(
    ".homeowner-tab .bg-wrapper",
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeOut }
  )
  .fromTo(
    ".homeowner-tab .tab-keypoints",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      ease: Expo.Power2,
    }
  )
  .fromTo(
    ".homeowner-tab .text-block",
    {
      opacity: 0,
      y: -100,
    },
    { opacity: 1, y: 0, ease: Expo.Power2 }
  );

let propertyInvestorTabAnimation = gsap.timeline({ paused: true });
propertyInvestorTabAnimation
  .fromTo(
    ".property-investor-tab .text-block",
    { x: -200 },
    { x: 0, duration: 0.5, ease: Power1.easeIn }
  )
  .fromTo(
    ".property-investor-tab .tab-keypoints",
    { x: 200 },
    { x: 0, duration: 0.5, ease: Power1.easeIn },
    "-=0.5"
  );

let propertyManagerTabAnimation = gsap.timeline({ paused: true });
propertyManagerTabAnimation
  .fromTo(
    ".property-manager-tab .bg-wrapper",
    { opacity: 0 },
    { opacity: 1, ease: Power1.easeIn }
  )
  .fromTo(
    ".property-manager-tab .tab-keypoints",
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: Power1.easeIn }
  )
  .fromTo(
    ".property-manager-tab .text-block",
    { x: 200, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.5, ease: Power1.easeIn },
    "-=0.5"
  );

let landerTabAnimation = gsap.timeline({ paused: true });
landerTabAnimation
  .fromTo(
    ".lander-tab .bg-with-text",
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, duration: 0.5, ease: Power1.easeIn }
  )
  .fromTo(
    ".lander-tab .text-block",
    { x: 200 },
    { x: 0, duration: 0.5, ease: Power1.easeIn },
    "-=0.5"
  )
  .fromTo(
    ".lander-tab .bg-with-text p",
    { y: -200, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: Power1.easeIn }
  );

// Click event
$(".pick-solution .nav-pills .nav-item .nav-link").on(
  "click",
  function () {
    propertyInvestorTabAnimation.restart();
    propertyManagerTabAnimation.restart();
    landerTabAnimation.restart();
    homeTabAnimation.restart();
  }
);
// </script>