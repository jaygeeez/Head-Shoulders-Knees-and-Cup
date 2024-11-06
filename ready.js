var parts = [
  "head",
  "shoulders",
  "knees",
  "toes",
  "nose",
  "ears",
  "hips",
  "back",
  "cup",
];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function roll() {
  document.getElementById("insertPart").innerHTML = ""; // clear text to reroll
  document.getElementById("retry").innerHTML = ""; // disable the button

  var wordRefresh = setInterval(() => {
    var randomPart = getRndInteger(0, parts.length);
    if (document.getElementById("insertPart").innerHTML != "cup") {
      document.getElementById("insertPart").innerHTML = parts[randomPart];
    } else {
      // Add a button to restart the game
      document.getElementById("retry").innerHTML = "Try again.";
      clearInterval(wordRefresh);
    }
  }, 1000);
}
