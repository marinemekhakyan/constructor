var Letter = require("./letter")

function Word(currentWord) {
   // console.log("currentword:", currentWord)

    this.letters = [];

    this.word = currentWord;

    this.display = function () {
        var displayedWord = "";
        for (var i = 0; i < this.letters.length; i++) {
            displayedWord += this.letters[i].charReturn();
            //console.log(displayedWord);
        }
        return displayedWord;
    }

    this.guessedLetter = function(string) {
        let guessed = false

        for (var i = 0; i < this.letters.length; i++) {
           if (this.letters[i].verify(string)){
            guessed = true
           };
          
        }
        return guessed;

    }

// let const have block scope 

    this.start = function () {
        for (var i = 0; i < this.word.length; i++) {

            this.letters.push(new Letter(this.word[i]));
        }
    }

}

module.exports = Word;
