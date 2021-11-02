const prompt = require("prompt-sync")({ sigint: true });


let number = Math.floor(Math.random() * 11);

let guess = prompt("Guess the number: ");

let i = 1;

while(guess != number) {
	if(guess > number)
		guess = prompt("Your guess is too high!");
	else if (guess < number) {
		guess = prompt("Your guess is too low!");
	}
	i++;
}

console.log(`You took ${i} rounds to complete!`);