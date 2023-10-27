const choiceArr = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return choiceArr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLow = playerSelection.toLowerCase(); 
    switch (playerSelectionLow) {
        case choiceArr[0]:
          switch (computerSelection) {
            case choiceArr[0]:
              result = "It's a tie!";
              break;
            case choiceArr[1]:
              result = "Computer wins! Paper covers Rock.";
              break;
            case choiceArr[2]:
              result = "You win! Rock crushes Scissors.";
              break;
          }
          break;
    
        case choiceArr[1]:
          switch (computerSelection) {
            case choiceArr[0]:
              result = "You win! Paper covers Rock.";
              break;
            case choiceArr[1]:
              result = "It's a tie!";
              break;
            case choiceArr[2]:
              result = "Computer wins! Scissors cut Paper.";
              break;
          }
          break;
    
        case choiceArr[2]:
          switch (computerSelection) {
            case choiceArr[0]:
              result = "Computer wins! Rock crushes Scissors.";
              break;
            case choiceArr[1]:
              result = "You win! Scissors cut Paper.";
              break;
            case choiceArr[2]:
              result = "It's a tie!";
              break;
          }
          break;
    
        default:
          result = "Invalid choice. Please choose 'Rock', 'Paper', or 'Scissors'.";
          break;
  }
  return result
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, getComputerChoice()));