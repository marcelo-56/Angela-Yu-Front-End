var a = -1;
function main() {
    comparisson(assignValue(1),assignValue(2));
}

function randomize() {
    return (Math.round(Math.random()*5)+1);
}

function assignValue(a) {
    var b = randomize();
    document.querySelector("#dice"+a).src = "./images/dice"+b+ ".png";
    return b;
}

function comparisson(player1Dice,player2Dice) {
    if (player1Dice>player2Dice) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if(player1Dice===player2Dice) document.querySelector("h1").innerHTML = "Draw!";
    else document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

main();


