const point = document.getElementById("tlacitko");
const startButton = document.getElementById("start");
const timeInfo = document.getElementById("timeInfo");
let gameInterval;

startButton.onclick = () => {
  hideElement(startButton);
  startGameInterval(point);
  setPointClick(point);
  timeStart = performance.now();
};
const movePoint = (element, x, y) => {
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
};
const hideElement = (element) => {
  element.style.display = "none";
};
const startGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    movePoint(
      element,
      getRandomNumber(50, window.innerWidth - parseInt(element.style.width)),
      getRandomNumber(50, window.innerHeight - parseInt(element.style.height))
    );
    setSize(element, getRandomNumber(40, 80));
  }, 550);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setPointClick = (element) => {
  element.onclick = () => {
    element.innerText++;
    movePoint(
      element,
      getRandomNumber(50, window.innerWidth - parseInt(element.style.width)),
      getRandomNumber(50, window.innerHeight - parseInt(element.style.height))
    );
    setSize(element, getRandomNumber(40, 80), 550);
    let timeEnd = performance.now();
    let result = timeEnd - timeStart;
    timeInfo.innerText = `Time: ${result} ms`;
  };
};
const setSize = (element, size) => {
  element.style.width = `${size}px`;
  element.style.height = `${size}px`;
};
