// Setting up variables for the game
const words = ['tesla', 'fordfocus', 'miata', 'bugattiveyron', 'shibainu', 'husky', 'chihuahua', 'germanshepard', 'persian', 'sphynx', 'chartreux', 'siamese',
  'jimihendrix', 'elvispresley', 'beyonce', 'prince'];
var wordHints = ['New trending Techie Car', 'A box car special, made by Americas own', 'Top down, ready to go', 'Multi-million dollar beast', 'This dog is probably smarter than me or you',
  'Wolf dog', 'Stop barking', 'Police-issue Special', 'This cat exudes class', 'Reminds me of days in Egpyt', 'A fancy name that doesnt fit this cat', 'The evil cats in Aristocats', 'Flames are in my eyes', 'The king of rock and roll',
  'All the single ladies', 'The Artist Formerly Known as..'];
var emptyArray = [];
var wrongArray = [];
var x;
var blanks = document.querySelector(".underscore");
var hint = document.querySelector(".hints");
var guesses = document.querySelector(".guesses");
var hints = document.querySelector(".hints");
var remaining = document.querySelector(".remaining");
var wrong = document.querySelector(".wrong");
var randomWord = Math.floor(Math.random() * words.length);
var thisWord = words[randomWord];
var corretArray = [];
var img = document.getElementById("img")


//Display the correct answer in the console to help debugging
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

img.innerHTML =  


//Generates blanks for the length of the word
blanks.innerHTML = blank();

// a few more general variables
var winCounter = 0;
var guessesRemaining = 5;
var lettersRemaining = thisWord.length;

//checking the users input
document.addEventListener('keypress', function (event) {
  var keyword = String.fromCharCode(event.keyCode);
//conditional for if the key pressed is not in the corret array
  if (thisWord.indexOf(keyword) < 0) {
    guessesRemaining--;
    wrongArray.push(keyword);
    
//shows the value of the string either true or fasle
    console.log("word index: ", thisWord.indexOf(keyword));
  };
//generating HTML to divs
  wrong.innerHTML = "Wrong Guesses: " + " " + wrongArray;
  guesses.innerHTML = "Number of Guesses Remaining:" + " " + guessesRemaining;
//animates the hangman based on lives remaining
  img.src = "assests/images/" + guessesRemaining + ".jpg";
//if you run out of lives, display game over
  if (guessesRemaining < 1) {
    alert("Game Over");
    location.reload();
  };
//conditional for if the key is within the corret array
  if (thisWord.indexOf(keyword) > -1) {
    for (var i = 0; i < thisWord.length; i++) {
      if (keyword == thisWord[i]) {
        emptyArray[i] = thisWord[i];
        blanks.innerHTML = emptyArray.join(" ");
        corretArray.push(keyword);
//remove a remaining letters required to win on every correct input
        lettersRemaining--;
        remaining.innerHTML = "Number of letters remaining: " + " " + lettersRemaining;
        

      }
    }
//conditions for winning is completing a word
//reloads pages upon victory
    if (lettersRemaining < 1) {
      alert("You win!!!")
      location.reload();

    }
  }
});

console.log(guessesRemaining);
//Restart the page on button press
$(".restart-button").on("click", function () {
  location.reload();
});
//Generate hint based on Hint array above
$(".hint-button").on("click", function () {
  hints.innerHTML = "Hint: " + wordHints[randomWord];
});



