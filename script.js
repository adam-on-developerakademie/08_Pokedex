async function loadPokemonNames() {
  let x = document.getElementById("mainDivId2");
  for (i = 0; i < 65; i++) {
    x.innerHTML = `<br/>Pokemon IndexNr.:${i}` + x.innerHTML;
    await delay(100);
    i > 62 ? (i = -1) : (i = i);
    x.innerHTML = x.innerHTML.slice(0, 1000);
    document.getElementById("mainDivId3").innerHTML = x.innerHTML.length;
  }
}
loadPokemonNames();

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function processWithDelay(items) {
  for (const item of items) {
    console.log("Vor der Verzögerung:", item);
    await delay(1000); // Warte 1 Sekunde
    console.log("Nach der Verzögerung:", item);
  }
  console.log("Schleife abgeschlossen");
}

const myArray = [1, 2, 3, 4, 5];
processWithDelay(myArray);
