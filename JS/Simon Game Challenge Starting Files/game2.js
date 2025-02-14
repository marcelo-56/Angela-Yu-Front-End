const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var keys = [];
var level = 0;
var a;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    makeSoundAnimate(randomChosenColour);
}

function makeSoundAnimate(box) {
    $("#"+box).fadeOut(100).fadeIn(100);
    a = new Audio("./sounds/"+box+".mp3")
    a.play();
}

function boxPressing(box){
    $("#" + box).addClass("pressed");
    setTimeout(function () {
        $(".btn").removeClass("pressed");
    }, 100);
    
}

$(document).keypress(function () {
    keys.push(this);
    if(keys.length === 1) nextSequence();
    $("h1").text("Level "+level);
});

$(".btn").on("click", function () { 
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    makeSoundAnimate(userChosenColour);
    boxPressing(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else gameOver();
    
}

function gameOver() {
    $("body").addClass("game-over");
    a = new Audio("./sounds/wrong.mp3");
    a.play();
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over! Press any key to restart");
    keys = [];
    level = 0;
    gamePattern = [];
}






/********* OG **********
var a;
var t;
$(document).keypress(function () {
    startGame();
})
function startGame() {
    var alive = true;
    var i = 1;
        //while(alive) {
            $("h1").text("Level "+i);
            var box = randomBox();
            boxPressing(box);
            $(".btn").one("click", function () {
                if (box.id === this.id) {
                    boxPressing(this);
                    alive = false;
                }
                else { 
                    gameOver();
                    alive = false;
                }

            });
             i++;
             console.log(alive);
             console.log(i);

        //}
}

function randomBox() {
    var random = Math.floor(Math.random()*4);
    button = $(".btn")[random];
    console.log(button); //1
    return button;
}

function boxPressing(box){
    $(box).addClass("pressed");
    makeSound(box);
    setTimeout(function () {
        $(".btn").removeClass("pressed");
    }, 500);
    
}
function gameOver() {
    $("body").addClass("game-over");
    a = new Audio("./sounds/wrong.mp3");
    a.play();
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over! Press any key to restart");
}

function makeSound(box) {
    a = new Audio("./sounds/"+box.id+".mp3")
    a.play();
}
    */