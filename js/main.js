const arrowBtnLeft = document.querySelector(".btn-arrow-left");
const arrowBtnRight = document.querySelector(".btn-arrow-right");

const slides = document.querySelectorAll(".container .slide");
const dotsContainer = document.querySelector(".dots");

let curSlide = 0;

// functions
const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = function () {
  curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const createDots = () => {
  slides.forEach((_, i) =>
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class='dot' data-slide='${i}'></button>`
    )
  );
};

const activateDot = (slide) => {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot--active"));
  document
    .querySelectorAll(`.dot[data-slide="${slide}"]`)
    .forEach((dot) => dot.classList.add("dot--active"));
};

// inital
const init = () => {
  goToSlide(0);
  createDots();
  activateDot(0);
};
init();

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});

// event listeners
arrowBtnLeft.addEventListener("click", prevSlide);
arrowBtnRight.addEventListener("click", nextSlide);

setInterval(nextSlide, 3000);

dotsContainer.addEventListener("click", function (e) {
  // if needed to work only on dots and not on dot container
  if (e.target.classList.contains("dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

(function ($) {
  /*---------------------------------------------------- */
  /* Preloader
	------------------------------------------------------ */
  $(window).load(function () {
    // will first fade out the loading animation
    $("#loader").fadeOut("slow", function () {
      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");
    });
  });

  $(window).load(function () {
    "use strict";

    $.get("eventPopup.html", function (data) {
      $("#event-popup-container").html(data);
      /*----------------------------------------------------*/
      /*	Modal Popup
    ------------------------------------------------------*/
      $(".item-wrap a").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        removalDelay: 300,
        showCloseBtn: false,
        mainClass: "mfp-fade",
      });

      $(document).on("click", ".popup-modal-dismiss", function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    });

    /*----------------------------------------------------*/
    /* Smooth Scrolling
      ------------------------------------------------------ */
    $(".smoothscroll").on("click", function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top,
          },
          800,
          "swing",
          function () {
            window.location.hash = target;
          }
        );
    });

    // Timer
    const esummit = new Date(2023, 0, 13, 18, 0, 0).getTime();
    setInterval(function () {
      const today = new Date().getTime();
      const diff = esummit - today;
      if (diff < 0) return;
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (days <= 9) days = "0" + days;
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours <= 9) hours = "0" + hours;
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes <= 9) minutes = "0" + minutes;
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
      if (seconds <= 9) seconds = "0" + seconds;
      document.getElementById("timer").innerHTML =
        '<div class="days"> \
        <div class="numbers">' +
        days +
        '</div><div>days</div></div><div class=colon>:</div> \
      <div class="hours"> \
        <div class="numbers">' +
        hours +
        '</div><div>hours</div></div><div class=colon>:</div> \
      <div class="minutes"> \
        <div class="numbers">' +
        minutes +
        '</div><div>minutes</div></div><div class=colon>:</div> \
      <div class="seconds"> \
        <div class="numbers">' +
        seconds +
        "</div><div>seconds</div></div> \
      </div>";
    }, 1000);

    const $ball = document.querySelector(".cursor__ball");
    // cursor binder
    document.body.addEventListener("mousemove", (e) => {
      TweenMax.to($ball, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - window.scrollY - 15,
      });
    });

    const $hoverables = document.querySelectorAll(".hoverables");
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", () => {
        TweenMax.to($ball, 0.3, {
          scale: 4,
        });
        $ball.classList.add("ball_hovered");
      });
      $hoverables[i].addEventListener("mouseleave", () => {
        TweenMax.to($ball, 0.3, {
          scale: 1,
        });
        $ball.classList.remove("ball_hovered");
      });
    }
  });

  const burger = document.querySelector(".burger");
  const navbar = document.querySelector(".navbar");
  const rightdiv = document.querySelector(".rightdiv");
  const navlist = document.querySelector(".navlist");

  burger.addEventListener("click", () => {
    rightdiv.classList.toggle("vclassresp");
    navlist.classList.toggle("vclassresp");
    navbar.classList.toggle("hnavresp");
  });

  // Responsive navigation menu toggle

  const menubtn = document.querySelector(".burger");
  const closebtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".mobile-list");
  const navItem = document.querySelectorAll(".mobile-list ul li");

  menubtn.addEventListener("click", () => {
    navigation.classList.add("active");
    $(".dull").addClass("active");
  });

  closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });

  navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
      $(".dull").removeClass("active");
    });
  });

  // Navigation bar effect on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Navigation effect on Scrolling

  $(document).click(function (event) {
    var $target = $(event.target);
    if (
      !$target.closest(".mobile-list").length &&
      !$target.closest(".burger").length &&
      $(".mobile-list").hasClass("active")
    ) {
      $(".mobile-list").removeClass("active");
      $(".dull").removeClass("active");
    }
  });
})(jQuery);

// ScrollReveal({
//   reset: false,
//   distance: '65px',
//   duration: 1450,
//   delay: 60
// });

// ScrollReveal().reveal('.home-main', { delay: 650, origin: 'bottom', interval:200 });

// // ScrollReveal().reveal('.hp-btn, .abo-btn', { delay: 650, origin: 'bottom', interval:200 });
// ScrollReveal().reveal('.heading', { delay: 500, origin: 'left' });
// ScrollReveal().reveal('.para, .ws-desc', { delay: 600, origin: 'right' });
// ScrollReveal().reveal('.eve-card', { delay: 700, origin: 'bottom' });
// ScrollReveal().reveal('.comp-card, .ws-card', { delay: 600, origin: 'bottom', interval:100 });
// ScrollReveal().reveal('.content .info img, .img1 img', { delay: 600, origin: 'right' });
// ScrollReveal().reveal('.tnc-cont p, .tnc-cont ul', { delay: 600, origin: 'left', interval:200});

$(document).ready(function () {
  $(document).one("scroll", () => {
    var id = "#dialog";
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $("#mask").css({ width: maskWidth, height: maskHeight });
    $("#mask").fadeIn(500);
    $("#mask").fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css("top", winH / 2 - $(id).height() / 2);
    $(id).css("left", winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $(".window .close").click(function (e) {
      e.preventDefault();
      $("#mask").hide();
      $(".window").hide();
    });
    $("#mask").click(function () {
      $(this).hide();
      $(".window").hide();
    });
  });
});

// $(document).ready(function () {
//   setTimeout(
//     () => (document.querySelector(".notification").style.right = 0),
//     3000
//   );

//   setTimeout(
//     () => (document.querySelector(".notification").style.right = "-500px"),
//     15000
//   );

//   document
//     .querySelector(".notification .cross")
//     .addEventListener("click", (e) => {
//       document.querySelector(".notification").style.right = "-500px";
//     });
// });
