import Collapse from './Collapse';
import Chat from './Chat';
import Liker from './Liker';

const collapse = new Collapse();
collapse.init();

const chat = new Chat();
chat.init();

const liker = new Liker();
liker.init();

const buttons = document.querySelector('.buttons');
const animation = document.querySelectorAll('.animation');
const collapseButton = document.querySelector('.collapse');
const callbackButton = document.querySelector('.callback');
const likerButton = document.querySelector('.liker');

buttons.addEventListener('click', (event) => {
  for (const item of animation) {
    item.classList.add('display');
  }
  const targetId = event.target.id;
  if (targetId === 'callback') {
    callbackButton.classList.remove('display');
  } else if (targetId === 'liker') {
    likerButton.classList.remove('display');
  } else {
    collapseButton.classList.remove('display');
  }
});