document.getElementById("btn-add-word").addEventListener(
  "click",
  () => {
    let element = document.getElementById("btn-save");
    let element2 = document.getElementById("btn-cancel");
    let element3 = document.getElementById("add-word-textarea");
    let hidden = element.getAttribute("hidden");
    document.getElementById("start-game").innerHTML = "";
    document.getElementById("add-word").innerHTML = "";

    if (hidden) {
      element.removeAttribute("hidden");
      element2.removeAttribute("hidden");
      element3.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
      element2.setAttribute("hidden", "hidden");
      element3.setAttribute("hidden", "hidden");
    }
  },
  false
);

let filter = document.getElementById("add-word-textarea");
filter.addEventListener("keyup", function () {
  this.value = this.value.replace(/[^a-z]/g, "").slice(0, 8);
});

document.getElementById("btn-save").addEventListener(
  "click",
  () => {
    words.push(document.getElementById("add-word-textarea").value);
    let element = document.getElementById("btn-new-game");
    let element2 = document.getElementById("btn-quit");
    let element3 = document.getElementById("keyboard");
    let element4 = document.getElementById("canvas");
    let hidden = element.getAttribute("hidden");

    document.getElementById("btn-save").style.display = "none";
    document.getElementById("btn-cancel").style.display = "none";
    document.getElementById("add-word-textarea").style.display = "none";

    if (hidden) {
      element.removeAttribute("hidden");
      element2.removeAttribute("hidden");
      element3.removeAttribute("hidden");
      element4.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
      element2.setAttribute("hidden", "hidden");
      element3.setAttribute("hidden", "hidden");
      element4.setAttribute("hidden", "hidden");
    }
    secretWordLines();
  },
  false
);

let words = [
  "programa",
  "frontend",
  "alura",
  "oracle",
  "beca",
  "diseño",
  "bootcamp",
];

let correctGuess = new Array();
let wordToGuess = words[Math.floor(Math.random() * words.length)];
let tries = 0;

document.getElementById("secretword").value = wordToGuess;
words.push(wordToGuess);

const secretWordLines = () => {
  canvas();
  for (let i = 0; i < wordToGuess.length; i++) {
    secretword.innerHTML += `
          <section id="letterplace">
              <p id="location${i}"></p>
          </section>
        `;
  }
};

let animate = function () {
  let drawMe = tries;
  drawArray[drawMe]();
};

const keyIn = (letter) => {
  if (wordToGuess.includes(letter)) {
    for (let i = 0; i < wordToGuess.length; i++) {
      document.getElementById(`location${i}`).innerHTML = letter;
      correctGuess[i] = letter;
    }
  } else if (tries >= wordToGuess.length) {
    alert("You lost.");
  } else {
    animate();
    tries++;
    canvas(tries);
  }
};

canvas = function () {
  let screen = document.querySelector("canvas");
  let brush = screen.getContext("2d");
  brush.beginPath();

  brush.strokeStyle = "#0a3871";
  brush.lineWidth = 2;
};

head = function () {
  screen = document.getElementById("canvas");
  brush = screen.getContext("2d");
  brush.beginPath();
  brush.arc(60, 25, 10, 0, Math.PI * 2, true);
  brush.stroke();
};

draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
  screen = document.getElementById("canvas");
  brush = screen.getContext("2d");
  brush.moveTo($pathFromx, $pathFromy);
  brush.lineTo($pathTox, $pathToy);
  brush.stroke();
};

frame1 = function () {
  draw(0, 150, 150, 150);
};

frame2 = function () {
  draw(10, 0, 10, 600);
};

frame3 = function () {
  draw(0, 5, 70, 5);
};

frame4 = function () {
  draw(60, 5, 60, 15);
};

torso = function () {
  draw(60, 36, 60, 70);
};

rightArm = function () {
  draw(60, 46, 100, 50);
};

leftArm = function () {
  draw(60, 46, 20, 50);
};

rightLeg = function () {
  draw(60, 70, 100, 100);
};

leftLeg = function () {
  draw(60, 70, 20, 100);
};

drawArray = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1,
];
