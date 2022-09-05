addEventListener("load", () => {
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    viewport.content + ", height=" + window.innerHeight
  );
});

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
      '<textarea id="add-word-textarea" role="textbox" placeholder="Ingrese una palabra" autofocus required></textarea>';
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
