var head = document.querySelector("#head");
var keyCode = document.createElement("div");
var clickSound = document.querySelector("audio");
keyCode.className = "keyCode";
var mainContainer = document.querySelector(".main-container");

console.log(mainContainer);
window.addEventListener("keydown",function(e){
    var key = e.key === " " ? "Space" : e.key;
    head.innerHTML = `You Pressed <span>${key}</span>`;
    keyCode.style.fontSize = "50px";
    keyCode.style.color = "teal";
    keyCode.innerHTML = `${e.which}`;
    keyCode.style.webkitTextStroke = " 0.5px black";
    keyCode.style.fontWeight = "900"
    mainContainer.appendChild(keyCode);
    clickSound.play();
})