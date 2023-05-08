const aboutBtn = document.querySelector(".about-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");
const referencesBtn = document.querySelector(".references-btn");
const contactBtn = document.querySelector(".contact-btn");

const aboutOverlay = document.querySelector(".about-overlay");
const portfolioOverlay = document.querySelector(".portfolio-overlay");

let aboutState = false;
let portfolioState = false;

aboutBtn.addEventListener("click", () => {
  aboutState = !aboutState;
  portfolioState = false;

  if (aboutState) {
    aboutOverlay.classList.add("active");
    aboutBtn.innerHTML = "About -";
    aboutBtn.classList.add("active-btn");
    portfolioBtn.classList.add("opac");
    referencesBtn.classList.add("opac");
    contactBtn.classList.add("opac");
  } else {
    aboutOverlay.classList.remove("active");
    aboutBtn.innerHTML = "About +";
    aboutBtn.classList.remove("active-btn");
    portfolioBtn.classList.remove("opac");
    referencesBtn.classList.remove("opac");
    contactBtn.classList.remove("opac");
  }
});

portfolioBtn.addEventListener("click", () => {
  portfolioState = !portfolioState;
  aboutState = false;

  if (portfolioState) {
    portfolioOverlay.classList.add("active");
    portfolioBtn.innerHTML = "Portfolio -";
    portfolioBtn.classList.add("active-btn");
    aboutBtn.classList.add("opac");
    referencesBtn.classList.add("opac");
    contactBtn.classList.add("opac");
  } else {
    portfolioOverlay.classList.remove("active");
    portfolioBtn.innerHTML = "Portfolio +";
    portfolioBtn.classList.remove("active-btn");
    aboutBtn.classList.remove("opac");
    referencesBtn.classList.remove("opac");
    contactBtn.classList.remove("opac");
  }
});

aboutOverlay.addEventListener("click", () => {
  aboutState = false;

  aboutOverlay.classList.remove("active");
  aboutBtn.innerHTML = "About +";
  aboutBtn.classList.remove("active-btn");
  portfolioBtn.classList.remove("opac");
  referencesBtn.classList.remove("opac");
  contactBtn.classList.remove("opac");
});
