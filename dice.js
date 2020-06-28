"use strict";
var $ = function (id) {
    return document.getElementById(id);
};

var getRandomNumber = function (max) {
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
    $("score1").value = "0";
    $("score2").value = "0";
    if ($("player1").value == "" || $("player2").value == "") {
        $("turn").removeAttribute("class");
        alert("Please enter two player names.");
    } else {
        $("turn").setAttribute("class", "open");
        changePlayer();
    }
};
var rollDice = function () {

};
var holdTurn = function () {

};
window.onload = function () {
    $("new_game").onclick = newGame;
    $("roll").onclick = rollDice;
    $("hold").onclick = holdTurn;
};