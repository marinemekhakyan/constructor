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
console.log(newGame);

newGame.start();
console.log(newGame.display());
console.log(newGame);

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
            console.log("clicked letters: ", guessed)
            // if the guessed array include the sme letter do nothing ask for new letter

            console.log("CORRECT!");

            if (display.indexOf("_") === -1) {
                console.log("YOU WIN!");
                const confirm = require('inquirer-confirm')
                confirm({
                    question: 'Would you like to play again?', 
                    
                    default: true
                }).then(function(confirmed, cancelled) {
                            if (confirmed) {
                                reset();
                                newGame();
                            }
                            else if (cancelled) {
                                clear();
                            }

                        });
                    wins++;
                console.log(wins);
            }
            else {
                //console.log(message + guessedLetter);
                askLetter();
            }
        }
        else {
            console.log("INCORRECT!");
            remainingGuesses--;
            if (remainingGuesses === 0) {
                losses++;
                console.log(losses)
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
var reset = function () {
    guessed = [];
    remainingGuesses = 10;
}

var clear = function () {
    wins = 0;
    losses = 0;
    guessed = [];
    remainingGuesses = 10;
}



askLetter()

//update display
//update scores
//allow restart asking y or n and if y reset remaining guesses and guessed letters
//control letter repetition, display guessed letters for the user 