"use strict";
var $ = function(id){
    return document.getElementById(id);
};

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    }
    return random;
};
var changePlayer = function () {
    //
};
var newGame = function () {

};
var rollDice = function () {

};
var holdTurn = function () {

};
window.onload = function() {
    $("new_game").onclick = newGame;
    $("roll").onclick = rollDice;
    $("hold").onclick = holdTurn;
};