document.getElementById("btn-add-word").addEventListener(
  "click",
  () => {
    let element = document.getElementById("btn-save");
    let element2 = document.getElementById("btn-cancel");
    let hidden = element.getAttribute("hidden");
    document.getElementById("start-game").innerHTML = "";
    document.getElementById("add-word").innerHTML = "";
    //document.getElementById("result").style.backgroundImage = "none";
    document.getElementById("header").innerHTML =
      '<textarea id="add-word-textarea" role="textbox" placeholder="Type a word" autofocus required></textarea>';
    //document.getElementById("logo-alura").style.visibility = "visible";

    if (hidden) {
      element.removeAttribute("hidden");
      element2.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
      element2.setAttribute("hidden", "hidden");
    }
  },
  false
);

document.getElementById("btn-save").addEventListener(
  "click",
  () => {
    let element = document.getElementById("btn-new-game");
    let element2 = document.getElementById("btn-quit");
    let hidden = element.getAttribute("hidden");
    document.getElementById("btn-save").style.display = "none";
    document.getElementById("btn-cancel").style.display = "none";
    //document.getElementById("result").style.backgroundImage = "none";
    document.getElementById("header").innerHTML =
      '<canvas id="#canvas-draw"></canvas>';
    //document.getElementById("logo-alura").style.visibility = "visible";

    if (hidden) {
      element.removeAttribute("hidden");
      element2.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", "hidden");
      element2.setAttribute("hidden", "hidden");
    }
  },
  false
);
