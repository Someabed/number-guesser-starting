let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return (Math.floor(Math.random() * 10));
};

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        window.alert('Your Guess is Outside of the Range!!');
    }
    let humanDifference = getAbsoluteDistance(target, humanGuess);
    let computerDifference = getAbsoluteDistance(target, computerGuess);
    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
};

const getAbsoluteDistance = (target, guess) => {
    return Math.abs(target - guess);
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } 
    if (winner === 'computer') {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};