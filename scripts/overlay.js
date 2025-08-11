function overlayLoad(i) {
  let overlay = document.getElementById("overlayId");
  overlay.classList.remove("displayNone");
  overlay.innerHTML = overlayTamplate(i);  
  eval(`detailsSide${currentView}(${i})`);
  document.getElementById('previousPokemonButton').classList.add(pokemons[i].typeSlot1+'Card')
  document.getElementById('nextPokemonButton').classList.add(pokemons[i].typeSlot1+'Card')
  document.getElementById('nextViewButton').classList.add(pokemons[i].typeSlot1+'Card')
}

function detailsSide1 (i) {
  document.getElementById("overlayViewId").innerHTML = attributesTamplate(i);
}

function detailsSide2 (i) {
  document.getElementById("overlayViewId").innerHTML = statsTamplate(i);
  makeBlock();
  fillBlock(i);
  document.getElementById("overlayNameValueId").innerHTML += " Shiny";
  document.getElementById(
    "overlayImageBorderId"
  ).innerHTML = `<img id="overlayImageId" src="${pokemons[i].imageLargeShiny}" alt="Overlay Image"></img>`;
}

function detailsSide3 (i) {
  document.getElementById("overlayViewId").innerHTML = shinyTamplate(i);
}

function previousView(i) {
  currentView == 1 ? (currentView = 3) : currentView--;
  overlayLoad(i);
}

function nextView(i) {
  currentView == 3 ? (currentView = 1) : currentView++;
  overlayLoad(i);
}

function previousPokemon(i) {
  i == 0 ? overlayLoad(pokemons.length - 1) : overlayLoad(i - 1);
}

function nextPokemon(i) {
  i == pokemons.length - 1 ? overlayLoad(0) : overlayLoad(i + 1);
}

function makeBlock() {
  for (j = 0; j < stats.length; j++) {
    let value = "";
    for (i = 0; i < 15; i++) {
      value += `<div id="${stats[j] + i}" class="block"></div>`;
    }
    document.getElementById(stats[j]).innerHTML = value;
  }
}

function fillBlock(k) {
  for (j = 0; j < stats.length; j++) {
    for (i = 0; i < 15; i++) {
      let value = Math.trunc(eval("pokemons[k]." + ("stat_" + stats[j])) / 15);
      value > i
        ? document
            .getElementById(stats[j] + i)
            .classList.add(pokemons[k].typeSlot1)
        : "";
    }
  }
}
