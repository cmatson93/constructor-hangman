var Letter = require("./Letter");


var Word = function(){
  this.words = ["basketball", "baseball", "football", "soccer", "volleyball", "tennis", "golf"];
  this.word = this.words[Math.floor(Math.random() * this.words.length)];
  this.letters = [];
  this.correctGuesses = [];
  for (var i = 0; i < this.word.length; i++) {
  	this.letters.push(this.word[i]);
  }
  this.wrongGuesses = [];
  for (var i = 0; i < this.letters.length; i++) {
  	var newLetter = new Letter(this.letters[i]);
  }
  this.wrongString = this.wrongGuesses.join(", ");
};


module.exports = Word; 


