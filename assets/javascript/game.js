//vars to score wins and losses
var wins = 0;
var losses = 0;

//variable to store random target number
var targetScore = 0;

//User's score so far, must be reset to 0 after each game
var userScore = 0;

//vars to store the values of each crystal
var blueValue;
var redValue;
var greenValue;
var yellowValue;


$(document).ready(
    startGame()
);

function startGame() {
    //reset target score for user to achieve
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    $("#target-score-text").html(targetScore);


    //reset user's score
    userScore = 0;

    //update wins and loss display
    $("#wins-text").html(wins);
    $("#losses-text").html(losses);

    //assign random values to each crystal - this method leaves the possibility of different crystals having the same value, however
    blueValue = Math.floor(Math.random() * (13 - 1) + 1);
    redValue = Math.floor(Math.random() * (13 - 1) + 1);
    greenValue = Math.floor(Math.random() * (13 - 1) + 1);
    yellowValue = Math.floor(Math.random() * (13 - 1) + 1);
};

//function to check if user has hit target score, should be checked after each click on a crystal
//if userScore == targetScore --> user has won, increment wins, reset game
//if userScore > targetScore --> user has lost, increment losses, reset game
//else, keep playing

function checkWin() {
    if (userScore == targetScore) {
        wins++;
        startGame();
        alert("You won!");
    }

    else if (userScore > targetScore) {
        losses++;
        startGame();
        alert("You lost!");
    }
};


$("#blueCrystal").bind("click", function() {
    userScore += blueValue;
    checkWin();
    $("#total-score-text").html(userScore);
});

$("#redCrystal").bind("click", function() {
    userScore += redValue;
    checkWin();
    $("#total-score-text").html(userScore);
});

$("#greenCrystal").bind("click", function() {
    userScore += greenValue;
    checkWin();
    $("#total-score-text").html(userScore);
});

$("#yellowCrystal").bind("click", function() {
    userScore += yellowValue;
    checkWin();
    $("#total-score-text").html(userScore);
});