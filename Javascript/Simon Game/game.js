var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber = Math.floor(Math.random() * 4);

var randomChosenColour = buttonColours[randomNumber];

var gamePattern = [];
gamePattern.push(randomChosenColour);


function nextSequence() {

}

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var butName = "#" + randomChosenColour;

$(butName).click(function (evt) {

    var content = $(this).html();
    alert(content);

});

/* $("." + randomChosenColour).click(function () {
    var mainColour = this.html();
    sfx(mainColour);
});*/

function sfx(keyColour) {

    switch (keyColour) {
        case "red":
            var red = new Audio("/Javascript/Simon Game/sounds/red.mp3");
            red.play();
            break;

        case "blue":
            var blue = new Audio("/Javascript/Simon Game/sounds/red.mp3");
            blue.play();
            break;

        case "green":
            var green = new Audio("/Javascript/Simon Game/sounds/red.mp3");
            green.play();
            break;

        case "yellow":
            var yellow = new Audio("/Javascript/Simon Game/sounds/red.mp3");
            yellow.play();
            break;

        default:
            var defaultAudio = new Audio("/Javascript/Simon Game/sounds/wrong.mp3");
            defaultAudio.play();
    }
}