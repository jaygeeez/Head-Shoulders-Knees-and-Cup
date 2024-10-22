var parts = ["head", "shoulders", "knees", "toes", "nose", "ears", "cup"];

function roll() {
  var randomSeq = getRndInteger(1, 10);
  for (let i = 0; i < randomSeq; i++) {
    newPart();
  }
  document.getElementById("insertLevel").innerHTML += parts[parts.length - 1];
}

function newPart() {
  var randomPart = getRndInteger(0, parts.length - 1);
  document.getElementById("insertLevel").innerHTML += parts[randomPart];
  console.log(parts[randomPart]);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
