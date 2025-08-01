let autoZoom = document.querySelector(":root");
const OH = window.innerHeight;
const OW = window.innerWidth;
let CW = 1;
let CH = 0;

window.addEventListener("resize", () => {
  currentSize();
});

function currentSize() {
  if (CW == 1) {
    if (OW < 500) {
      CH = 200;
      CW = 130;
    } else {
      CH = document.getElementById("pokeCardId0").offsetHeight;
      CW = document.getElementById("pokeCardId0").offsetWidth;
    }
  }
  let H = window.innerHeight;
  let W = window.innerWidth;

  console.log(H + " x " + W);
  console.log(CH + " x " + CW);
  console.log(OH + " x " + OW);
  console.log(((CW * W) / OW / 2).toFixed(0) + "px");
  console.log(OW);

  document.getElementById("pokeCardId4").style.width =
    ((CW * (W + OW)) / 2 / OW).toFixed(0) + "px";
  document.getElementById("pokeCardId4").style.height =
    ((CH * (W + OW)) / 2 / OW).toFixed(0) + "px";
  autoZoom.style.setProperty(
    "--pokeCardHigh",
    ((CH * (W + OW)) / 2 / OW).toFixed(0) + "px"
  );
  autoZoom.style.setProperty(
    "--pokeCardWidth",
    ((CW * (W + OW)) / 2 / OW).toFixed(0) + "px"
  );
}
