/* eslint-disable class-methods-use-this */
export default class Collapse {
  init() {
    const buttonCollapse = document.querySelector('.button-collapse');
    const collapse = document.querySelector('.collapse');

    buttonCollapse.addEventListener('click', () => {
      collapse.classList.toggle('active');
    });
  }
}