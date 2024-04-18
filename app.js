let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#computer-score");

const drawGame = () => {
    msg.innerText="Game was Draw, Play again!"
    msg.style.backgroundColor="#13032f"
}
const showWinner = (userWin, _userChoice , compc) => {
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText="YOU WINS!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="YOU LOST! PLAY AGAIN";
        msg.style.backgroundColor="red"
    }

}
const compchoice = () => {
    let option = ["rock", "paper", "scissor"]
    const randomIndx = Math.floor(Math.random() * 3);
    return option[randomIndx];
}
const playGame = (userChoice) => {
    const compc = compchoice();

    if(userChoice===compc){
        drawGame();
    }else{
        let userWin= true;
        if (userChoice==="rock"){
            userWin= compc==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compc==="scissor"?false:true;
        }else{
            userWin= compc==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});