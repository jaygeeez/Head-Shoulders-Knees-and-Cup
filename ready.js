var parts = ["head", "shoulders", "knees", "toes", "nose", "ears", "cup"];

function roll() {
  var wordRefresh = setInterval(() => {
    newPart();
  }, 1000);
}

function newPart() {
  var randomPart = getRndInteger(0, parts.length);
  if (document.getElementById("insertPart").innerHTML != "cup") {
    document.getElementById("insertPart").innerHTML = parts[randomPart];
  } else {
    // Add a button to restart the game
    document.getElementById("retry").innerHTML = "Click to try again.";
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
