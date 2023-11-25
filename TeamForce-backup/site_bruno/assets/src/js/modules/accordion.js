export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
  }

  activeAccordion(item) {
    item.classList.toggle("open");
    item.nextElementSibling.classList.toggle("hidden");
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.activeAccordion(item));
    });
  }
  init() {
    if (this.accordionList.length) {
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
