let usrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");
const usrScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

//computer choice ku generate karagala
const genCompChoice = () =>{
    const option = ["Rock","Paper",'Scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

//arrow functon pass karagala for "draw game "
const drawGame = () =>{
    msg.innerText = "Game was Draw , play again";
}


//userscore and compscore bahar karagala using function
const showWinner = (userWin) =>{
    if(userWin){
        usrScore++;
        usrScorepara.innerText = usrScore;
         msg.innerText = 'You won!';
         msg.style.backgroundColor = "green"; 
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
};

//actual work athare hela
const playGame = (usrChoice) =>{
    console.log("user choice = " , usrChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(usrChoice === compChoice){// for game draw 
        drawGame();
    }else{
        let userWin = true ;
        if(usrChoice === "rock"){
            userWin = compChoice ==="Paper" ? false:true;
       }else if(usrChoice ==="paper"){
         userWin = compChoice === "Scissors" ?false :true;
       }else{
        userWin = compChoice === "Rock" ? false :true;
       }
       showWinner(userWin);
  };
}

//user choice find out karagala
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const usrChoice = choice.getAttribute("id")
        playGame(usrChoice);
    });
});