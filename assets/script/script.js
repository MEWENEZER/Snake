const board = document.querySelector('#board');
const BOX_NUMBER = 100;

let randomCoordinate = getRandomNumber();

function renderBox(boxCount) {
  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    let index = 0;

    // присваивание дата атрибутов для координат
    box.dataset.x = Math.floor(i / 10);
    box.dataset.y = i % 10;

    // рендер каждого box'а
    board.append(box);
  }

  startRandom(randomCoordinate);
}

renderBox(BOX_NUMBER);

function getRandomNumber() {
  return Math.floor(Math.random() * BOX_NUMBER);
}

function startRandom(index) {
  let boxs = document.querySelectorAll('.box');
  boxs[index].classList.add('active');
}
