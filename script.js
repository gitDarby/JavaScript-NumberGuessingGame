/**
 NUMBER GUESING GAME
 1. Player chooses a number;
 2. Computer chooses a number;
    - random number generates.
 3. Compare choices;
    - Greater number wins.
    - If tie, player wins
 4. Play game
 */

 const playerChoice = (playerInput) => {
    if (playerInput) {
        return playerInput;
    } else {
        return null;
    }
 }



 const computerChoice = () => {
    let computerInput = Math.floor(Math.random() * 11)
    return computerInput;
 }



 const compareChoices = (playerInput, computerInput) => {
    if (playerInput >= computerInput) {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
 }

 const playGame = () => {
    let playerInput = playerChoice(7);
    if (playerInput === null) {
        return console.log('Enter a number');
    }

    let computerInput = computerChoice();

    let results = compareChoices(playerInput, computerInput);

    return console.log(`Players number: ${playerInput}, Computers number: ${computerInput}. The results are in: ${results}`);
 }

 playGame();