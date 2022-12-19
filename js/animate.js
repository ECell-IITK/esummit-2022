// check if element is in view
function inView(selector) {
  element = document.querySelector(selector);

  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;

  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + element.clientHeight;

  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

const animateCSS = (element, animation, prefix = "animate__") => {
  document.querySelector(element).style.display = "none";
  document.addEventListener("scroll", () => {
    if (inView(element)) {
      console.log(element, "trigger animation");
      new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        document.querySelector(element).style.display = "";
        node.classList.add(`${prefix}animated`, animationName);

        // // When the animation ends, we clean the classes and resolve the Promise
        // function handleAnimationEnd(event) {
        //   event.stopPropagation();
        //   node.classList.remove(`${prefix}animated`, animationName);
        //   resolve("Animation ended");
        // }

        // node.addEventListener("animationend", handleAnimationEnd, {
        //   once: true,
        // });
      });
    }
  });
};

animateCSS(".h1animation", "flipInX");
animateCSS(".h2animation", "flipInX");
animateCSS(".p1", "fadeInUp");
animateCSS(".p2", "fadeInUp");

animateCSS("#competition .heading", "slideInUp");

animateCSS(".cl1", "slideInRight");
animateCSS(".cl2", "slideInRight");
animateCSS(".cr1", "lightSpeedInRight");
animateCSS(".cr2", "lightSpeedInRight");
animateCSS(".cm1", "zoomInUp");
animateCSS(".cm1", "zoomInUp");
animateCSS(".cm1", "zoomInUp");
