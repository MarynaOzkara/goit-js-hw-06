const body = document.querySelector('body');
const colorChangeBtn = document.querySelector('.change-color');
const сolorSpan = document.querySelector('.color');

colorChangeBtn.addEventListener('click', onClick);

function onClick() {
  let hexColor = getRandomHexColor();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  body.style.backgroundColor = hexColor;
  сolorSpan.textContent = body.style.backgroundColor;
}


