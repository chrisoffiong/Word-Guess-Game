//inputting 
const words = ['telsa', 'ford focus', 'miata', 'bugatti veyron', 'shiba inu', 'husky', 'chihuahua', 'german shepard', 'persian', 'sphynx', 'chartreux', 'siamese',
  'jimi hendrix', 'elvis presley', 'beyonce', 'prince'];
var wordHints = ['New trending Techie Car', 'A box car special, made by Americas own', 'Top down, ready to go', 'Multi-million dollar beast', 'This dog is probably smarter than me or you',
  'Wolf dog', 'Stop barking', 'Police-issue Special', 'This cat exudes class', 'Reminds me of days in Egpyt', 'The evil cats in Aristocats', 'Flames are in my eyes', 'The king of rock and roll',
  'All the single ladies', 'The Artisst Formerly Known as..'];
var emptyArray = [];
var wrongArray = [];
var x;
var blanks = document.querySelector(".underscore");
var hint = document.querySelector(".hints");
var letters = document.querySelector(".letters");
var answers = document.querySelector(".answers");
var guesses = document.querySelector(".guesses");
var randomWord = Math.floor(Math.random() * words.length);
var thisWord = words[randomWord];
//Display game banner
window.onload = function () {
  alert("Hangman Revolution!")
};

function blank () {
   for (i = 0; i < randomWord.length; i++) {
    emptyArray.push('_');
    
   }

   return emptyArray;
  };
  
//checking the users input

document.addEventListener('keypress', function(event) {
  var keyword = String.fromCharCode(event.keyCode);
  if(thisWord.indexOf(keyword) > -1) {
    emptyArray.push(keyword);
  }
  else {
    wrongArray.push(keyword);
  } 

blank[0].innerHTML = blank().join(' ');

});

  