const mainBox = document.querySelector(".mainBox");

const gameBox = document.querySelector(".gameBox");

const startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "startButton");
startButton.textContent = "Start Game!";
gameBox.appendChild(startButton);

const username = () => {
  const inputBox = document.createElement("input");
  gameBox.appendChild(inputBox);
};

startButton.addEventListener("click", username);
