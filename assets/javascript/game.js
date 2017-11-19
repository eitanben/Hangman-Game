var fruitName = [
 "strawberry",
 "melon",
 "mango",
 "mulberry",
 "banana",
 "watermelon",
]

var userGuess = "";
var yesOrNo = [];
var letterInuserGuess = [];
var numBlanks = 0;
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame(){

    wrongGuesses = [];
    numGuesses = 15;
    yesOrNo = [];

    userGuess = fruitName[Math.floor(Math.random() * fruitName.length)];
    lettersInuserGuess = userGuess.split("");
    numBlanks = lettersInuserGuess.length;

    for(var i = 0; i < numBlanks; i++){
        yesOrNo.push("_");
}
document.getElementById('word-blank').innerHTML = yesOrNo.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;
}

function checkEachLetter(letter){

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(userGuess[i] === letter){
            letterInWord = true;
        }
    }
    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(userGuess[i] === letter){
            yesOrNo[i] = letter;
        }
    }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }
}

function PassComplete(){

    document.getElementById('word-blank').innerHTML = yesOrNo.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    if(lettersInuserGuess.join(" ") === yesOrNo.join(" ")){
        winCounter++;
        alert("You rule!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("sorry...run out of guesses. try again");
        startGame();
    }
}

startGame();
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkEachLetter(letterGuessed)
    PassComplete();
}
