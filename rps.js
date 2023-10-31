const choiceArr = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    return choiceArr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    let result = ''
    switch (playerSelection) {
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


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 6; i++){
        let round = i
        let roundNum = round + 1
        console.log('Round ' + roundNum + '. Fight!')
        let readline = require('readline-sync') // readline allows to get user prompt in nodeJS.
        let playerChoice = readline.question('Choose your weapon: Rock, Paper or Scissors? ') 
        let playerSelection = playerChoice.toLowerCase(); 
        let computerSelection = getComputerChoice()
        
        console.log('Computer chose ' + computerSelection + '.');
        console.log(playRound(playerSelection,computerSelection));
        switch (playerSelection){
            case choiceArr[0]:
              switch (computerSelection) {
                case choiceArr[0]:
                  break;
                case choiceArr[1]:
                  computerScore = computerScore + 1
                  break;
                case choiceArr[2]:
                  playerScore = playerScore + 1
                  break;
              }
              break;
        
            case choiceArr[1]:
              switch (computerSelection) {
                case choiceArr[0]:
                  playerScore = playerScore + 1
                  break;
                case choiceArr[1]:
                  break;
                case choiceArr[2]:
                    computerScore = computerScore + 1
                  break;
              }
              break;
        
            case choiceArr[2]:
              switch (computerSelection) {
                case choiceArr[0]:
                  computerScore = computerScore + 1
                  break;
                case choiceArr[1]:
                  playerScore = playerScore + 1
                  break;
                case choiceArr[2]:
                  break;
              }
              break;
        
            default:
              i = i-1;
              break;
        }
        console.log('Player Score is ' + playerScore + '.')
        console.log('Computer Score is ' + computerScore + '.')
        console.log('--------------------------------')
    }
    console.log('')
    console.log('********************************')
    console.log('Player Final Score is ' + playerScore)
    console.log('Computer Final Score is ' + computerScore)

    if (playerScore > computerScore){
        console.log('Congratulations! You Win!')
    }
    else if (playerScore == computerScore){
        console.log("It's a tie!")
    }
    else{
        console.log('Sorry, you lose!')
    }
    console.log('********************************')
    console.log('')
}

game()

