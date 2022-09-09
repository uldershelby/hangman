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
    let element = document.getElementById("btn-new-game");
    let element2 = document.getElementById("btn-quit");
    let hidden = element.getAttribute("hidden");

    document.getElementById("btn-save").style.display = "none";
    document.getElementById("btn-cancel").style.display = "none";

    if (hidden) {
      element.removeAttribute("hidden");
      element2.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
      element2.setAttribute("hidden", "hidden");
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
let wordToGuess = "";
let tries = 0;

const secretWordLines = () => {
  secretword.innerHTML = "";
  for (let i = 0; i < words[i].length; i++) {
    secretword.innerHTML += `
          <section id="letterplace">
              <p id="location${i}"></p>
          </section>
        `;
  }
};

const keyIn = (letter) => {
  //let selKey = document.getElementById(`#key${letter}`);
  if (wordToGuess.includes(letter)) {
    for (let i = 0; i < wordToGuess; i++) {
      if (wordToGuess[i] == letter) {
        document.getElementById(`#location${i}`).innerHTML = letter;
        correctGuess[i] = letter;
      } else {
        tries++;
        drawStickMan(tries);
      }
    }
  }
};

const drawStickMan = () => {};
