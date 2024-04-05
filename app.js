const mainBox = document.querySelector(".mainBox");

const gameBox = document.querySelector(".gameBox");

const startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "startButton");
startButton.textContent = "Start Game!";
gameBox.appendChild(startButton);


const username = () => {
    startButton.remove();
    const message = document.createElement('p');
    message.textContent = "Enter your name here: "
    gameBox.append(message);
    const inputBox = document.createElement("input");
    gameBox.appendChild(inputBox);
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = "Submit";
    gameBox.appendChild(submitButton);
};

startButton.addEventListener("click", username);
