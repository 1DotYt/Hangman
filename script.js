const keyboard = document.querySelector(".keyboard");
const h4 = document.querySelector("h4");
const wordDisplay = document.querySelector(".word-display");
const chance = document.querySelector(".chance");
const img = document.querySelector(".img");

const gameover = document.querySelector(".GameOver");
const gameoverimg = document.querySelector(".gameoverImg");
const answer = document.querySelector(".answer");
const h3 = document.querySelector("h3");
const h6 = document.querySelector("h6");


let count = 0;

const randomIndex = Math.floor(Math.random() * wordList.length);
const { word, hint } = wordList[randomIndex];

for (var i = 97; i <= 122; i++) {

  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
}

const gameOver = (bool) => {
  if (bool) {
    gameover.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    answer.innerText = word;
  } else {
    gameover.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    gameoverimg.src = "/images/victory.gif";
    h3.innerText="Congrats!"
    h6.innerText="You Guessed The Correct Answer!"
  }
};

const gameOverwin = () => {
  const letterElem = document.querySelectorAll(".letter");
  
