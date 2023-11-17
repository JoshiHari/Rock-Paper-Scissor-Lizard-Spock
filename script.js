console.log("We are linked");

var playerInpts = document.querySelectorAll(
  ".container > .player > .buttons > button"
);

var compInpts = document.querySelectorAll(
  ".container > .computer > .buttons > button"
);

compInpts.forEach(element => {
  element.disabled = false;
  
});

var result = true;
var playerWin;

var playerScore = 0,
  computerScore = 0;

var roundCounter = 0;


function reset(){
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".mob > .finalResult").style.display = "none"
    document.querySelector(
        ".container > .computer  > .score > p > span"
      ).innerHTML = computerScore;
      document.querySelector(".mob > .round > p > span").innerHTML = roundCounter;
      document.querySelector(
        ".container > .player > .score > p > span"
      ).innerHTML = playerScore;

      playerInpts.forEach(element => {
        element.disabled = false;
        
    })
    document.querySelector(".container > .result > img ").src =
        "Images/equal.png";
        document.querySelector(".container > .player > img").style.border = "";
        document.querySelector(".container > .computer > img").style.border = "";
    if(window.matchMedia('(max-width: 600px')){
      document.querySelector(".container > .result > img ").style.rotate = ""
        "Images/equal.png";
    }
    
}


function computerInput() {
  var compMove =
    compInpts[Math.floor(Math.random() * compInpts.length)].classList[1];
    

  document.querySelector(
    `.container > .computer > .buttons > .${compMove}`
  ).style.border = "3px solid orange";
  return compMove;
}
// Adding event listener for the player input

playerInpts.forEach((element) => {
  element.addEventListener("click", () => {
    var move = element.classList[1];
    var playerName = document.querySelector(".container > .player > input").value;


    // decideResult(move);
    document.querySelector(
      `.container > .player > .buttons > .${move}`
    ).style.border = "3px solid orange";
    var compMove = computerInput();
    var scaleMove = document.querySelector(`.container > .computer > .buttons > .${compMove}`)
    scaleMove.style.transform = "scale(1.2)"
    console.log(scaleMove)
    
    var whoWon = determineWinner(move, compMove);
        roundCounter++;
    if (whoWon == true) {
        
      if(window.matchMedia('(max-width: 600px').matches){
       
        document.querySelector(".container > .result > img ").style.rotate =
        "90deg";
      }
      document.querySelector(".container > .result > img ").src =
        "Images/is-greater-than.png";
      playerScore++;

      document.querySelector(
        ".container > .player > .score > p > span"
      ).innerHTML = playerScore;
    }
    else if (whoWon == false) {
      if(window.matchMedia('(max-width: 600px').matches){
       
        document.querySelector(".container > .result > img ").style.rotate =
        "90deg";
      }
      document.querySelector(".container > .result > img ").src =
        "Images/less-than.png";
      computerScore++;
      document.querySelector(
        ".container > .computer  > .score > p > span"
      ).innerHTML = computerScore;
    }
    else {
      document.querySelector(".container > .result > img ").style.rotate =
        "";
    }
    document.querySelector(".mob   > .round > p > span").innerHTML = roundCounter;

    if(roundCounter >= 10){
        playerInpts.forEach(element => {
            element.disabled = true;
            
        });
        if(playerScore > computerScore){
            console.log(playerName)
            document.querySelector(".mob > .finalResult").style.display = "block"
            document.querySelector(".mob > .finalResult").innerHTML = `${playerName} Wins!!!`;
            document.querySelector(".container > .player > img").style.border = "3px solid green";
            document.querySelector(".container > .computer > img").style.border = "3px solid red";
            
        }
        else if(playerScore == computerScore){
            document.querySelector(".mob > .finalResult").style.display = "block"
            document.querySelector(".mob > .finalResult").innerHTML = `It's a tie`;
        }
        else{
            document.querySelector(".mob > .finalResult").style.display = "block"
            document.querySelector(".mob > .finalResult").innerHTML = `Shelbot Wins!!!`;
            document.querySelector(".container > .player > img").style.border = "3px solid red";
            document.querySelector(".container > .computer > img").style.border = "3px solid green";
        }
    }

    setTimeout(function(){
        playerInpts.forEach(element => {
            element.style.border = "2px solid grey"
            
        });
    
        compInpts.forEach(element => {
            element.style.border = "2px solid grey"
            
        });
        scaleMove.style.transform = "scale(1)"

    },1000)
    
  });
});

//Generating a random computer input and highlight the computer input

function determineWinner(move, compMove) {
    
  switch (move) {
    case compMove:
      //   console.log("It's a tie");
      document.querySelector(".container > .result > img").display = "block";
      document.querySelector(".container > .result > img ").src =
        "Images/equal.png";
      return;
      break;
    case "spock":
      compMove == "scissors" || compMove == "stone"
        ? (playerWin = true) 
        : (playerWin = false);
      return playerWin;
    case "stone":
      compMove == "lizard" || compMove == "scissors"
        ? (playerWin = true)
        : (playerWin = false);
      return playerWin;
    case "scissors":
      compMove == "paper" || compMove == "lizard"
        ? (playerWin = true)
        : (playerWin = false);
      return playerWin;
    case "lizard":
      compMove == "spock" || compMove == "paper"
        ? (playerWin = true)
        : (playerWin = false);
      return playerWin;
    case "paper":
      compMove == "spock" || compMove == "stone"
        ? (playerWin = true)
        : (playerWin = false);
      return playerWin;
    default:
      return;
  }
}


// media query function changes
