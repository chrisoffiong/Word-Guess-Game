//inputting 
const words = ['Tesla', 'Ford Focus', 'Miata', 'BugattiVeyron', 'ShibaInu', 'Husky', 'Chihuahua', 'GermanShepard', 'Persian', 'Sphynx', 'Chartreux', 'Siamese',
  'JimiHendrix', 'ElvisPresley', 'Beyonce', 'Prince'];
var wordHints = ['New trending Techie Car', 'A box car special, made by Americas own', 'Top down, ready to go', 'Multi-million dollar beast', 'This dog is probably smarter than me or you',
  'Wolf dog', 'Stop barking', 'Police-issue Special', 'This cat exudes class', 'Reminds me of days in Egpyt', 'A fancy name that doesnt fit this cat', 'The evil cats in Aristocats', 'Flames are in my eyes', 'The king of rock and roll',
  'All the single ladies', 'The Artist Formerly Known as..'];
var emptyArray = [];
var wrongArray = [];
var x;
var blanks = document.querySelector(".underscore");
var hint = document.querySelector(".hints");
var letters = document.querySelector(".letters");
var answers = document.querySelector(".answers");
var guesses = document.querySelector(".guesses");
var hints = document.querySelector(".hints");
var randomWord = Math.floor(Math.random() * words.length);
var thisWord = words[randomWord];




//words[0] = {word: 'Tesla', hint: 'New trending Techie Car'}
//If we want to do this the object way:
//var thisWord = words[randomWord].word;
// var thisHint = words[randomWord].hint;
console.log("current word:", thisWord);
//Display game banner
window.onload = function () {
  alert("Hangman Revolution!")
  guessesRemaining = 5
};

function blank() {
  for (i = 0; i < thisWord.length; i++) {
    emptyArray.push(' _ ');

  }

  return emptyArray.join(" ");
};
//Generates blanks for whatever word

blanks.innerHTML = blank();

//checking the users input


var guessesRemaining = 5;
document.addEventListener('keypress', function (event) {
  var keyword = String.fromCharCode(event.keyCode);
if(thisWord.indexOf(keyword) < 0 || thisWord.indexOf(keyword.toUpperCase() < 0)) {
 guessesRemaining--;
}
if (guessesRemaining < 1) {
  alert("Game Over")
}
  if (thisWord.indexOf(keyword) > -1 || thisWord.indexOf(keyword.toUpperCase() > -1)) {
    console.log("word index: ", thisWord.indexOf(keyword));
    for (var i = 0; i < thisWord.length; i++) {
      if (keyword.toUpperCase() == thisWord[i].toUpperCase()) {
        emptyArray[i] = thisWord[i];
        blanks.innerHTML = emptyArray.join(" ");
        if (emptyArray === thisWord) {
      alert("You win!!!")
    }}
    }
  
  }


  console.log(guessesRemaining);

  $(".restart-button").on("click", function () {
    location.reload();
  })
  $(".hint-button").on("click", function () {
    hints.innerHTML = "Hint: " + wordHints[randomWord];
  }
  );
});


