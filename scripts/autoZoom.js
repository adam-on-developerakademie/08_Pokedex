/* 
let autoZoom = document.querySelector(":root");
let startWidth = window.innerWidth;
let CW = 1;
let sMod;

window.addEventListener("resize", () => {
  let sMod = window.innerWidth / startWidth;
  startWidth = window.innerWidth;
  pokeCardSizing(sMod);
  imageLargeSizing(sMod);
});

function pokeCardSizing(sMod) {
  let ratio =60/90//=63/88;
  let y = document.getElementById("pokeCardId0").offsetHeight;
  x = y * sMod * ratio;
  autoZoom.style.setProperty("--pokeCardWidth", x + "px");
  autoZoom.style.setProperty("--pokeCardHeight", (x/ratio) + "px");
  console.log(sMod + "  &  " + x + "  &  " + y);
}

function imageLargeSizing(sMod) {
  let x = document.getElementById("imageLargeId0").offsetWidth;
  let y = document.getElementById("imageLargeId0").offsetHeight;
  autoZoom.style.setProperty("--imageLargeWidth", (x + x * sMod) / 2 + "px");
  autoZoom.style.setProperty("--imageLargeHeight", (y + y * sMod) / 2 + "px");
  console.log(sMod + "  &  " + x + "  &  " + y);
}
 */