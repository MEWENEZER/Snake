const board = document.querySelector('#board');
const BOX_NUMBER = 100;

let activeIndex = getRandomNumber();

function renderBox(boxCount) {
  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    // присваивание дата атрибутов для координат
    box.dataset.x = Math.floor(i / 10);
    box.dataset.y = i % 10;

    // рендер каждого box'а
    board.append(box);
  }

  initBoxArray();
}

function initBoxArray() {
  const boxs = document.querySelectorAll('.box');
  let activeBox = boxs[activeIndex];

  activeBox.classList.add('active');
}

renderBox(BOX_NUMBER);

function getRandomNumber() {
  return Math.floor(Math.random() * BOX_NUMBER);
}

function up() {
  box.dataset.x--;
}

function down() {
  box.dataset.x++;
}

function left() {
  box.dataset.y--;
}

function right() {
  box.dataset.y++;
}

document.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'ArrowUp':
      up(activeBox);
      break;

    case 'ArrowDown':
      down(activeBox);
      break;

    case 'ArrowLeft':
      left(activeBox);
      break;

    case 'ArrowRight':
      right(activeBox);
      break;
  }
});
