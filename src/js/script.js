import MenuMobile from "./modules/menu-mobile.js";

const mobileMenu = new MenuMobile(
  '[data-mobile="button"]',
  '[data-mobile="list"]'
);
mobileMenu.init();
console.log("funcionou");
