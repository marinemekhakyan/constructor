var Word = require("./word");
var randomWords = require('random-words');

console.log(randomWords());

var randomWord = randomWords();
// initialize the variables 
// wins / losses / guessed letter / guesses left
var newGame = new Word(randomWord);
console.log(newGame);

newGame.start();

console.log(newGame);


// ask user for the letter 
// first verify
// then display 

// show the user and update the game variables (wins / losses etc)