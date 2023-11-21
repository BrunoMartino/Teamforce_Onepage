import MenuMobile from "./modules/menu-mobile.js";
import Typewriter from "./modules/typewriter.js";
import SmoothScroll from "./modules/smoothScroll.js";
import AnimaScroll from "./modules/animaScroll.js";
import Accordion from "./modules/accordion.js";

const mobileMenu = new MenuMobile(
  '[data-mobile="button"]',
  '[data-mobile="list"]'
);
mobileMenu.init();

const links = new SmoothScroll('a[href^="#"]');
links.init();

function timewriter() {
  const textwriter = new Typewriter(".phrase");
  textwriter.init();
}
setInterval(timewriter, 3000);

const scrollAnima = new AnimaScroll('[data-anima="scroll"]');
scrollAnima.init();

const accordion = new Accordion(".contact-dt");
accordion.init();

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 500) {
    navbar.style.position = "fixed";
    navbar.style.top = 0;
    navbar.style.zIndex = 9999;
  } else {
    navbar.style.position = "relative";
  }
});
