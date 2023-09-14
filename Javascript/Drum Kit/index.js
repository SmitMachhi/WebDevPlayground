var numButtonArr = document.querySelectorAll(".drum").length;
var keyData;


for (var i = 0; i < numButtonArr; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);

    });
}

document.addEventListener("keydown", function EveLis(event) {

    keyData = event.key;
    playSound(keyData);
});

function playSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("/Javascript/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("/Javascript/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("/Javascript/Drum Kit/sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio("/Javascript/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var crash = new Audio("/Javascript/Drum Kit/sounds/crash.mp3");
            crash.play();
            break;

        case 'k':
            var kickbass = new Audio("/Javascript/Drum Kit/sounds/kick-bass.mp3");
            kickbass.play();
            break;

        case 'l':
            var snare = new Audio("/Javascript/Drum Kit/sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(key);
    }
}