const mainBox = document.querySelector(".mainBox");

const gameBox = document.querySelector(".gameBox");

const initBox = document.querySelector(".initialBox");

const gameText = document.querySelector(".gameText");

const welcomeMsg = document.createElement('p');

const banner = document.querySelector("#banner");

const instructions = document.querySelector("#instructions");

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
    // banner.style.display = 'block';

    submitButton.addEventListener("click", function(){
        if (inputBox.value != ""){
        submitButton.remove();
        inputBox.remove();
        message.remove();
        initBox.style.display = 'block';
        // const welcomeMsg = document.createElement('p');
        welcomeMsg.setAttribute('class', 'welcomeMsg');
        welcomeMsg.textContent = "Welcome to Landscaping Simulator, " + inputBox.value + ". A landscaping business game where you start with just your teeth to cut grass! Click the Instructions button for instructions or click Start Day to begin your business adventure!";
        gameText.appendChild(welcomeMsg);
        };
    });
};

const howTo = () => {
    instructions.textContent = "Go Back";
    if (instructions.textContent === "Go Back") {
        welcomeMsg.textContent = `Your goal is to landscape enough to upgrade your tools to one day accumulate enough money to retire.
        Retirement goal: $100,000`;
    }
}

startButton.addEventListener("click", username);

instructions.addEventListener("click", howTo);