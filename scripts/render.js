async function myPokemonList() {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < pokemons.length; i++) {
    fullSides = Math.ceil(i / qOnPage);
    if (i >= page * qOnPage && i < page * qOnPage + qOnPage) {
      myDiv.innerHTML += template(i, wild);
    }
  }
  renderPagesbuttons();
}

function template(i) {
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

function renderPagesbuttons() {
  document.getElementById("pagesId").innerHTML = `${page + 1} / ${fullSides}`;
}

function allTogether() {
  page = 0;
  myPokemonList();
}

async function myPokemonTypeList(x) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < pokemons.length; i++) {
    if (pokemons[i].typeSlot1 == x || pokemons[i].typeSlot2 == x) {
      myDiv.innerHTML += template(i);
    }
  }
}

async function search(lastChar) {
  let myDiv = document.getElementById("pokedex");

  let myName = document.getElementById("findValueId").value;
  let j = 0;
  myName = lastChar.length < 2 ? myName + lastChar : myName.slice(0, -1);
  if (myName.length > 2) {
    myDiv.innerHTML = "";
    for (i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.match(myName.toLowerCase())) {
        myDiv.innerHTML += template(i)
      }
    }
  } else {
    myPokemonList();
  }
}
