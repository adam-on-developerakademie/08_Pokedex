async function myPokemonList(n, wild) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    fullSide = (i % 50).toFixed(0);
    if (i >= seid * 50 && i < seid * 50 + 50) {
      myDiv.innerHTML += template(i, wild);
    }
  }
}

function template(i, wild) {
  x = `
 <div id="pokeCardId${i}" class="pokeCard ${pokemons[i].typeSlot1}Card">
        <div class="cardHeader">   
            <p>Nr.${i + 1}</p>
        </div>
        <div class="imageBorder">
        <img id="imageLargeId${i}" class="imageLarge" src="${
    wild ? pokemons[i].imageLarge : pokemons[i].imageFrontGif
  }"></div>
        <p id="cardNameId${i}" class="cardsName">${fLetterUp(
    pokemons[i].name
  )}</p>
        <div class="cardBottom">
        <p class="cardType ${pokemons[i].typeSlot1}" >${
    pokemons[i].typeSlot1
  }</p>
        <p class="${pokemons[i].typeSlot2 ? "cardType" : ""} ${
    pokemons[i].typeSlot2 ? pokemons[i].typeSlot2 : ""
  }" >${pokemons[i].typeSlot2 ? pokemons[i].typeSlot2 : ""}</p>
        </div>
 </div> 
 `;
  return x;
}
