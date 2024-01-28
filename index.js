var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (e) {
    this.style.color = "white";
    var drumKey = this.innerHTML;
    playSound(drumKey);
    buttonAnimation(drumKey);
  });
}

document.addEventListener("keydown", function (e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

function playSound(drumKey) {
  switch (drumKey) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

function buttonAnimation(key) {
  var pressedButton = document.querySelector("." + key);
  pressedButton.classList.add("pressed");

  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);
}
