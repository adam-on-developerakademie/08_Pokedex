async function findTyp(x) {
  let myDiv = document.getElementById("pokeCardId");
  let j = 0;
  for (i = 0; i < pokemons.length; i++) {
    if (pokemons[i].typeSlot1 == x || pokemons[i].typeSlot2 == x) {
      j = j + 1;
      document.getElementById("pokeCardId" + i).classList.remove("displayNone");
    } else {
      document.getElementById("pokeCardId" + i).classList.add("displayNone");
    }
  }
  setCardsCenter(j);
}

async function find(lastChar) {
  let myName = document.getElementById("findValueId").value;
  let j = 0;
  myName = lastChar.length < 2 ? myName + lastChar : myName.slice(0, -1);
  if (myName.length > -1) {
    for (i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.match(myName.toLowerCase())) {
        document
          .getElementById("pokeCardId" + i)
          .classList.remove("displayNone");
        j = j + 1;
      } else {
        document.getElementById("pokeCardId" + i).classList.add("displayNone");
      }
    }
  }
  setCardsCenter(j);
}
async function setCardsCenter(j) {
  j > 9
    ? document.getElementById("pokedexArea").classList.remove("center")
    : document.getElementById("pokedexArea").classList.add("center");
  console.log(j);
}

async function myPokemonList(n,wild) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    myDiv.innerHTML += template(i,wild);
  }
}

function template(i,wild) {
  x = `
 <div id="pokeCardId${i}" class="pokeCard ${pokemons[i].typeSlot1}Card">
        <div class="cardHeader">   
            <p>Nr.${i + 1}</p>
        </div>
        <div class="imageBorder">
        <img id="imageLargeId${i}" class="imageLarge" src="${
    wild?pokemons[i].imageLarge:pokemons[i].imageFrontGif
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
