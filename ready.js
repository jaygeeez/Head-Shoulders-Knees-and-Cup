var parts = ["head", "shoulders", "knees", "toes", "nose", "ears", "cup"];

function roll() {
  document.getElementById("insertPart").innerHTML = "";
  document.getElementById("retry").innerHTML = "";
  var wordRefresh = setInterval(() => {
    var randomPart = getRndInteger(0, parts.length);
    if (document.getElementById("insertPart").innerHTML != "cup") {
      document.getElementById("insertPart").innerHTML = parts[randomPart];
    } else {
      // Add a button to restart the game
      document.getElementById("retry").innerHTML = "Click to try again.";
      console.log("done");
      clearInterval(wordRefresh);
    }
  }, getRndInteger(500, 2000));
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
