function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function roll() {
  var parts = ["head", "shoulders", "knees", "cup"];
  var randomPart = getRndInteger(0, parts.length - 1);
  document.getElementById("insertLevel").innerHTML = parts[randomPart];
}
