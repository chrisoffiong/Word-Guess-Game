var words = ['Telsa', 'Ford Focus', 'Miata', 'Bugatti Veyron', 'Shiba Inu', 'Husky', 'Chihuahua', 'German Shepard', 'Persian', 'Sphynx', 'Chartreux', 'Siamese',
  'Jimi Hendrix', 'Elvis Presley', 'Beyonce', 'Prince'];
var wordHints = ['New trending Techie Car', 'A box car special, made by Americas own', 'Top down, ready to go', 'Multi-million dollar beast', 'This dog is probably smarter than me or you',
  'Wolf dog', 'Stop barking', 'Police-issue Special', 'This cat exudes class', 'Reminds me of days in Egpyt', 'The evil cats in Aristocats', 'Flames are in my eyes', 'The king of rock and roll',
  'All the single ladies', 'The Artisst Formerly Known as..'];
var emptyArray = [];
var x;
var hint = document.querySelector(".hints");
var dash = document.querySelector(".dash");
var letters = document.querySelector(".letters");
var answers = document.querySelector(".answers");
var guesses = document.querySelector(".guesses");
var math = words[Math.floor(Math.random() * words.length)];
window.onload = function () {
  alert("Hangman Revolution!");
   for (i = 0; i < math.length; i++) {
    emptyArray[i] = "_";
  };
};
  x = emptyArray.join = "_";
  document.querySelector(".letters").innerHTML = x;  

document.onkeyup = function (keyInput) {
  keyHit = key.keyInput.toLowerCase();
  for (k = 0; k < words.length; k++) {
    guesses.innerHTML = keyHit.join(emptyArray)
  };


  for (s = 0; s < words.length; s++) {
    var li = document.createElement('p');
    li.textContent = answers[s];

  };

};

