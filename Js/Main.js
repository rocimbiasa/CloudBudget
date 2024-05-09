/* ==================== STICKY ==================== */
window.addEventListener("scroll", function () {
  var header = this.document.querySelector(".navbar");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

/* ==================== SCROLL REVEAL ==================== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.home__text`);
sr.reveal(`.home__button`, { delay: 500 });
sr.reveal(`.about__text`, { origin: "left", delay: 800 });
sr.reveal(`.about__image`, { origin: "right", delay: 800 });
sr.reveal(`.card__article`, { origin: "bottom", delay: 800 });
sr.reveal(`.technology__card`, { origin: "bottom", delay: 800 });
sr.reveal(`.contact__text`, { origin: "left", delay: 800 });
sr.reveal(`.contact__table`, { origin: "right", delay: 800 });
