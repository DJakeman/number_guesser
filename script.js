let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let random = Math.floor(Math.random() * 10);
  return random;
};
 
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDiff = Math.abs(targetGuess - humanGuess);
  const computerDiff = Math.abs(targetGuess - computerGuess);

  return humanDiff <= computerDiff;
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};