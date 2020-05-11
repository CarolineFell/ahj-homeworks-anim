/* eslint-disable class-methods-use-this */
export default class Liker {
  init() {
    const likerButton = document.querySelector('.button-liker');
    const image = document.querySelector('.image');

    likerButton.addEventListener('click', (event) => {
      event.preventDefault();
      const randomImage = Math.floor(Math.random() * 4) + 1;
      const likerImage = document.createElement('img');
      likerImage.src = 'heart.png';
      likerImage.className = 'liker-image';
      likerImage.style.animationName = `heart${randomImage}`;
      image.appendChild(likerImage);
      // <div class="image">
      //   <img src="heart.png" class='liker-image' name=`heart${randomImage}`>
      // </div>
      likerImage.addEventListener('animationend', () => {
        image.removeChild(likerImage);
      });
    });
  }
}