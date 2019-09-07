var Word = require("./word");
var randomWords = require('random-words');
var inquirer = require("inquirer");

var randomWord = randomWords();
//console.log("randomWord", randomWord)
var wins = 0;
var losses = 0;
var guessed = [];
var remainingGuesses = 10;

var newGame = new Word(randomWord);
// console.log(newGame);

newGame.start();
console.log(newGame.display());
console.log("><><><><><><><><><><><><><><><")
// console.log(newGame);

function askLetter() {
    inquirer.prompt([
        {
            name: "letter",
            type: "input",
            message: "GUESS A LETTER!"
        }
    ]).then(function (answer) {
        guessed.push(answer.letter)
        let guessedLetter = newGame.guessedLetter(answer.letter);
        console.log(guessedLetter)
        if (guessedLetter) {

            let display = newGame.display();
            console.log(display)
            console.log("Guessed letters: ", guessed)
            console.log("_________________________________")
            console.log("CORRECT!");

            if (display.indexOf("_") === -1) {
                console.log("YOU WIN!");
                wins++;
                console.log("Wins: " + wins);
                console.log("Losses: " + losses);
                
            }
            else {
                askLetter();
            }
        }
        else {
            console.log("Guessed letters: " + guessed);
            console.log("___________________________________")
            console.log("INCORRECT!");
            remainingGuesses--;
            
            if (remainingGuesses === 0) {
                losses++;
                console.log("Losses: " + losses)
                console.log("Sorry! You have no remaining guesses left. Try again!");
                reset();
            }
            else {
                console.log(newGame.display());
                askLetter();
            }
        }
    });
}

askLetter()

//update display
//update scores
//allow restart asking y or n and if y reset remaining guesses and guessed letters
//control letter repetition, display guessed letters for the user 