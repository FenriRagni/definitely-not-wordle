var playButton = document.querySelector("#playGame");
var timer = document.querySelector("#timeLeft");
var display = document.querySelector("#displayGame");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var wordLength = document.querySelector("#length");
var timeLeft;
var wordChoice;
var word;
var wordBank = ["pokemon", "magic","javascript", "fun", "zoom"]
var wordBlank = [];
var body = document.querySelector("body");
var win;
var victoryCheck;
var start;
var message = document.querySelector("#gameOver");

message.textContent = "";

if(localStorage.getItem("losses")===null){
    losses.textContent = 0;
}
else {
    losses.textContent = localStorage.getItem("losses");
}

if(localStorage.getItem("wins")===null){
    wins.textContent = 0;
}
else {
    wins.textContent = localStorage.getItem("wins");
}

function displayUpdate() {
    display.textContent = wordBlank.join(" ");
}

function playGame(){
    wordChoice = [];
    word = [];
    wordBlank = [];
    wordChoice = wordBank[Math.floor(Math.random()*wordBank.length)];
    word = wordChoice.split("");
    timeLeft = 10;
    message.textContent = "";
    for (var x = 0; x < wordChoice.length; x++){
        wordBlank[x] = "_";
    }
    wordLength.textContent = word.length;
    displayUpdate();
    

    start = setInterval(function () {
        if(timeLeft === 0) {
            timer.textContent = timeLeft;
            losses.textContent++;
            endGame("lose");
        }
        else{
            timer.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
    victoryCheck = setInterval(function () {        
        console.log(word);
        console.log(wordBlank);
        if(word.join("")===wordBlank.join("")){
            wins.textContent++;
            endGame("win");
        }   
    }, 500)
    body.addEventListener("keyup", verify)

}
function verify(event) {
    console.log(event);
    console.log(event.key);
    for(var x = 0; x < word.length; x++){
        if(event.key === word[x]){
            wordBlank[x] = event.key;
            displayUpdate();
        }
    }
}
function endGame(victory){
    clearInterval(victoryCheck);
    clearInterval(start);
    localStorage.setItem("wins",wins.textContent);
    localStorage.setItem("losses",losses.textContent);
    message.textContent = "You " + victory + "!";
}
playButton.addEventListener("click", playGame);