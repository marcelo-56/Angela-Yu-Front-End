
var a;

for (i=0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", response);
}

function makeSound (key) { //function that creates the sound, checking with key (innerHTML gives the letters and .key gives the key)
        switch (key) {
            case "w": 
                a = new Audio("./sounds/tom-1.mp3")
                a.play();
                break;
            case "a":
                a = new Audio("./sounds/tom-2.mp3")
                a.play();
                break;
            case "s":
                a = new Audio("./sounds/tom-3.mp3")
                a.play();
                break;
            case "d":
                a = new Audio("./sounds/tom-4.mp3")
                a.play();
                break;
            case "j":
                a = new Audio("./sounds/snare.mp3")
                a.play();
                break;
            case "k":
                a = new Audio("./sounds/crash.mp3")
                a.play();
                break;
            case "l":
                a = new Audio("./sounds/kick-bass.mp3")
                a.play();
                break;
            
            default: console.log(key);
        }    
}

document.addEventListener("keydown", response);

function response(event) { //responds to the event
    if(event.type === "keydown") { 
        makeSound(event.key);
        document.getElementsByClassName(event.key)[0].classList.add("pressed");
    }
    else if(event.type === "click") {
        makeSound(this.innerHTML);
        document.getElementsByClassName(this.innerHTML)[0].classList.add("pressed"); // event.target = this in this case, as the event.target is the element where the event occured, and as we're adding the event listener to that event, this also returns the same element.
    }
    setTimeout(function () {
        document.getElementsByClassName("pressed")[0].classList.remove("pressed");
    }, 100);
    
}
