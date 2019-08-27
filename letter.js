function Letter(character) {
    this.character = character,
        this.guessed = false,
        this.charReturn = function () {
            if (this.guessed === true) {
                return this.character;
            }
            else {
                return " _ ";
            }
        }
    this.verify = function (userGuess) {
        if (userGuess === this.character) {
            this.guessed = true;
            return true;
        }
    } 
}
module.exports = Letter;