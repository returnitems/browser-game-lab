const mainBox = document.querySelector(".mainBox");

const gameBox = document.querySelector(".gameBox");

const initBox = document.querySelector(".initialBox");


const startButton = document.createElement("button");
startButton.setAttribute("type", "button");
startButton.setAttribute("class", "startButton");
startButton.textContent = "Start Game!";
gameBox.appendChild(startButton);


const username = () => {
    startButton.remove();
    const message = document.createElement('p');
    message.setAttribute('class', 'firstMessage');
    message.textContent = "Enter your name here: ";
    gameBox.append(message);
    const inputBox = document.createElement("input");
    inputBox.setAttribute('class', 'inputBox');
    gameBox.appendChild(inputBox);
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('class', 'submitButton');
    submitButton.textContent = "Submit";
    gameBox.appendChild(submitButton);

    submitButton.addEventListener("click", function(){
        submitButton.remove();
        inputBox.remove();
        message.remove();
        initBox.style.display = "";
    })
};

startButton.addEventListener("click", username);
