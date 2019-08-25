var Letter = require("./letter")

function Word(currentWord) {

    this.letters = [];

    this.word = currentWord;

    this.display = function () {
        var displayedWord = "";
        for (var i = 0; i < this.letters.length; i++) {
            displayedWord += this.letters[i].charReturn(this.letters[i].character);
            console.log(displayedWord);
        }
    }

    this.guessedLetter = function(string) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].verify(string);
        }

    }

    this.start = function () {
        for (var i = 0; i < this.word.length; i++) {

            this.letters.push(new Letter(this.word[i]));
        }
    }

}

module.exports = Word;
