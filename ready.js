var parts = ["head", "shoulders", "knees", "toes", "nose", "ears", "cup"];

function roll() {
  var wordRefresh = setInterval(() => {
    newPart();
  }, 1000);
}

function newPart() {
  var randomPart = getRndInteger(0, parts.length);
  if (document.getElementById("insertLevel").innerHTML != "cup") {
    document.getElementById("insertLevel").innerHTML = parts[randomPart];
  } else {
    console.log("done");
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
