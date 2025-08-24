let userScorep = document.querySelector("#user-score");
let compScorep = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;
const  choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });

});


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorep.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorep.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawGame = () => {

    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "navy";
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const compChoice = getCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock" ){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);   
    }

};

const getCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};


