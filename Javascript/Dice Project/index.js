var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var diceImage = "dice" + randomNumber1 + ".png";

var diceImage2 = "dice" + randomNumber2 + ".png";

document.querySelector("img").src = "/Javascript/Dice Project/images/" + diceImage;

document.getElementsByTagName("img")[0].src = "/Javascript/Dice Project/images/" + diceImage;

document.getElementsByTagName("img")[1].src = "/Javascript/Dice Project/images/" + diceImage2;

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!"
}
else {
    document.getElementsByTagName("h1")[0].innerHTML = "Peace✌️"
}

