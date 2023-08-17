var para = new URLSearchParams(window.location.search);
var scoreMessage = para.get("message");

console.log(scoreMessage);
document.getElementById("scoreSelected").innerHTML = scoreMessage;
