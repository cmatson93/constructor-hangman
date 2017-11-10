var Word = require("./Word");

var Letter = function(letter) {
	this.letter = letter;
	this.alreadyGuessed = false;
	this.show = false;
	this.displayLetter = function() {
		if (this.show == true) {
			return this.letter;
		}
		else {
			return "_ ";
		}
	}
}


module.exports = Letter;