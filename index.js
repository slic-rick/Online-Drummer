numberOfButtuns = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtuns; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I GOT CLICKED");

        button = this.innerHTML;

        click(button);
        makeAnimation(button);



    });


}

document.addEventListener("keydown", key)

function key(event) {

    pressed_key = event.key;
    makeAnimation(pressed_key);

    switch (pressed_key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var kick = new Audio("sounds/tom-1.mp3");
            kick.play();
            break;
        case "j":
            var jSound = new Audio("sounds/tom-2.mp3");
            jSound.play();
        case "k":
            var jSound = new Audio("sounds/tom-3.mp3");
            jSound.play();
            break;
        case "l":
            var lSound = new Audio("sounds/tom-4.mp3");
            lSound.play();
            break;
        default:
            console.log(button);
    }
}

function click(pressed) {
    switch (pressed) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var kick = new Audio("sounds/tom-1.mp3");
            kick.play();
            break;
        case "j":
            var jSound = new Audio("sounds/tom-2.mp3");
            jSound.play();
        case "k":
            var jSound = new Audio("sounds/tom-3.mp3");
            jSound.play();
            break;
        case "l":
            var lSound = new Audio("sounds/tom-4.mp3");
            lSound.play();
            break;
        default:
            console.log(button);
    }
}

function makeAnimation(pressed) {
    var pressedKey = document.querySelector("." + pressed);
    pressedKey.classList.add("pressed");

    setTimeout(() => {
        pressedKey.classList.remove("pressed")
    }, 100);

}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// <
// button class = "a drum" > a < /button> <
// button class = "s drum" > s < /button> <
// button class = "d drum" > d < /button> <
// button class = "j drum" > j < /button> <
// button class = "k drum" > k < /button> <
// button class = "l drum" > l < /button>