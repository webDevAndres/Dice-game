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
    if ($("current").firstChild.nodeValue == $("player1").value) {
        $("current").firstChild.nodeValue = $("player2").value;
    }
    else {
        $("current").firstChild.nodeValue = $("player1").value;
    }
    
    $("die").value = "0";
    $("total").value = "0";
    $("roll").focus();
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
    var total = parseInt($("total").value);
    var die = getRandomNumber(6);
    if (die == 1) {
        total = 0;
        changePlayer();
    } else {
        total = total + die;
    }
    $("die").value = die;
    $("total").value = total;
};
var holdTurn = function () {

};
window.onload = function () {
    $("new_game").onclick = newGame;
    $("roll").onclick = rollDice;
    $("hold").onclick = holdTurn;
};