const point = document.getElementById("tlacitko");
const startButton = document.getElementById("start");
let gameInterval;

startButton.onclick = () => {
    hideElement(startButton);
    startGameInterval(point);
    
}
const movePoint = (element, x ,y) => {
    element.style.top =`${y}px`;
    element.style.left =`${x}px`;
    
}
const hideElement = (element) => {
    element.style.display = "none";
}
const startGameInterval = (element) => {
    clearInterval (gameInterval);
    gameInterval = setInterval(() => {
        movePoint(element, getRandomNumber(50, 700), getRandomNumber(50,700)) }, 550);
}

const getRandomNumber = (minimum, maximum ) => Math.floor(Math.random() * (maximum - minimum +1)) + minimum;