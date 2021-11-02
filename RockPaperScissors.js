const prompt = require("prompt-sync")({ sigint: true });

while (yourChoice != "E") {
  var yourChoice = prompt(
    "Type 0 for: Rock, 1 for: Paper, 2 for: Scissors, & E for: Exit- "
  );

  var compChoice = Math.floor(Math.random() * 3);

  if (yourChoice == 0 && compChoice == 0) {
    console.log("Rock Vs Rock: Game Draw!");
  }
  if (yourChoice == 0 && compChoice == 1) {
    console.log("Rock Vs Paper: You lose!");
  }
  if (yourChoice == 0 && compChoice == 2) {
    console.log("Rock Vs Scissors: You win!");
  }
  if (yourChoice == 1 && compChoice == 0) {
    console.log("Paper Vs Rock: You win!");
  }
  if (yourChoice == 1 && compChoice == 1) {
    console.log("Paper vs Paper: Game Draw!");
  }
  if (yourChoice == 1 && compChoice == 2) {
    console.log("Paper Vs Scissors: You lose!");
  }
  if (yourChoice == 2 && compChoice == 0) {
    console.log("Scissors Vs Rock: You lose!");
  }
  if (yourChoice == 2 && compChoice == 1) {
    console.log("Scissors Vs Paper: You win!");
  }
  if (yourChoice == 2 && compChoice == 2) {
    console.log("Scissors Vs Scissors: Game Draw!");
  }
}
