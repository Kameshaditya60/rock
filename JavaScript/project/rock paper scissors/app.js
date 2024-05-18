let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#")

const genCompChoice = () => {
    //rock paper scissor
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = () => {
    console.log("--- Draw GAme ---")
    msg.innerText = "*** Draw Game. Play Again ***";
    msg.style.backgroundColor = "rgb(66, 8, 120)";
}

const winMsg = (userWin) => {
    if (userWin) {
        console.log("*** You Win ***");
        msg.innerText = `*** You Win *** Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("*** Computer Win ***");
        msg.innerText = `*** Computer Win ***  ${compChoice} beats Your ${userScore}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    console.log("User Choice :", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer Choice :", compChoice);
    if (userChoice == compChoice) {
        drawGame();

    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper 
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors 
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            // rock, paper 
            userWin = compChoice === "rock" ? false : true;
        }

        winMsg(userWin);
    }
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
}); 
