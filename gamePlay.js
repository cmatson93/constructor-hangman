var fs = require("fs");

var inquirer = require('inquirer');

var Word = require('./Word');

var Letter = require("./Letter");

var prompt = require('prompt');
 
var triesLeft = 10;

var choosenWord;

var wordArray =[];

var wordString;

var noCount;

var guessLeft = 5;

var wrongString;

var wrongArray = [];

var correctCount;

function start(){
  wrongArray = [];
  wordArray = [];
  wordString = '';
  wrongString = '';
  noCount = 0;
  guessLeft = 5;
  correctCount = 0;
  choosenWord = new Word();
  for (var i=0; i< choosenWord.word.length; i++) {
    wordArray[i] = "_";
  }
  wordString = wordArray.join(' ');
  console.log (wordString);
  userGuess();
};

function userGuess() {
  inquirer.prompt([

  {
    type: "input",
    message: "Guess a letter!",
    name: "guess"
  }

  ]).then(function(answer) {
      for (var i = 0; i < choosenWord.letters.length; i++) {
        if (answer.guess == choosenWord.letters[i] ) {
          wordArray[i] = answer.guess;
          wordString = wordArray.join(' ');
          correctCount ++;
          if (choosenWord.correctGuesses.indexOf(answer.guess) === -1) {
              choosenWord.correctGuesses.push(answer.guess);
          }
        }
        else {
          noCount ++;
          if (choosenWord.wrongGuesses.indexOf(answer.guess) === -1  && noCount != choosenWord.letters.length) {
              choosenWord.wrongGuesses.push(answer.guess);
          } 
        }

      }
      if (noCount === choosenWord.length) {
        guessLeft --;
      }
      for (var i = 0; i < choosenWord.wrongGuesses.length; i++) {
        if (wrongArray.indexOf(choosenWord.wrongGuesses[i])) {
          wrongArray[i] = choosenWord.wrongGuesses[i];
        }
      }
      wrongString = wrongArray.join(' ,');
      console.log("Guesses: ", wrongString);
      console.log (wordString);
      if (guessLeft <= 0) {
        console.log("Sorry you loose...");
        inquirer.prompt([
        {
          type: "confirm",
          message: "Do you want to play again?",
          name: "playAgain"
        }

        ]).then(function(input) {
          if (input.playAgain === true) {
            start();
          }
          else {
            console.log("Okay, please come back and play again.");
          }
        })
      }
      else if (guessLeft > 0 && correctCount === choosenWord.letters.length) {
          console.log("YAY you win!");
          inquirer.prompt([
          {
            type: "confirm",
            message: "Do you want to play again?",
            name: "playAgain2"
          }

          ]).then(function(input2) {
            if (input2.playAgain2 === true) {
              start();
            }
            else {
              console.log("Okay, please come back and play again.");
            }
          })
      }
      else {
        userGuess();
      }
    });
}
  



start();



