const userChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  return userInput;
};
const computerChoice = function () {
  do {
    choice = Math.floor(Math.random() * 4);
  } while (choice < 1);
  switch (choice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
};

const botChoice = computerChoice();

function whoWins(userChoice, botChoice) {
  if (
    userChoice != "rock" &&
    userChoice != "paper" &&
    userChoice != "scissors"
  ) {
    console.log("Please enter a valid choice!!!");
  } else if (userChoice === botChoice) {
    console.log(`${userChoice} vs ${botChoice} \nDraw!`);
  } else if (
    (userChoice === "paper" && botChoice === "scissors") ||
    (userChoice === "rock" && botChoice === "paper") ||
    (userChoice === "scissors" && botChoice === "rock")
  ) {
    console.log(`${userChoice} vs ${botChoice} \nCrap, you lose!`);
  } else {
    console.log(`${userChoice} vs ${botChoice} \nCongratulations, you win!`);
  }
}
whoWins(userChoice("paper"), botChoice);
