// Home title h1 animation
var textWrapper = document.querySelector(".ml13");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml13 .letter",
    translateY: [80, 0],
    translateZ: 0,
    opacity: [0, 2],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 1200 + 30 * i,
  })
  .add({
    targets: ".ml13 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1000,
    delay: (el, i) => 1500 + 30 * i,
  });
// Home description p animation
var textWrapper = document.querySelector(".ml14 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml14 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900,
  })
  .add({
    targets: ".ml14 .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: (el, i) => 150 + 25 * i,
  })
  .add({
    targets: ".ml14",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

/* HOME SECOND TITLE H6 ANIMATION */
// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 800,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000,
  });

//   LOAD
var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 3000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: 2,
});
window.addEventListener('DOMContentLoaded', (e) => {
  let lineDrawing = document.querySelector("#lineDrawing");
  lineDrawing.classList.add("active");
  setTimeout(() => {
    lineDrawing.classList.remove("active");
    setTimeout(() => {
      lineDrawing.remove();
    }, 350);
  }, 4000);
});
