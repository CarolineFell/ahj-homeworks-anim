/* eslint-disable class-methods-use-this */
export default class Chat {
  init() {
    const callbackForm = document.querySelector('.callback-form');
    const callbackClose = document.querySelector('.callback-close');
    const callbackCall = document.querySelector('.callback-call');

    callbackCall.addEventListener('click', () => {
      callbackForm.classList.remove('hidden');
      callbackCall.classList.add('hidden');
    });

    callbackClose.addEventListener('click', () => {
      callbackCall.classList.remove('hidden');
      callbackForm.classList.add('hidden');
    });
  }
}