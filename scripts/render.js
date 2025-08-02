async function findTyp(x) {
  let myDiv = document.getElementById("pokeCardId");
  for (i = 0; i < pokemons.length; i++) {
    if (pokemons[i].typeSlot1 == x || pokemons[i].typeSlot2 == x) {
      document.getElementById("pokeCardId" + i).classList.remove("displayNone");
    } else {
      document.getElementById("pokeCardId" + i).classList.add("displayNone");
    }
  }
}

async function find(lastChar) {
  let myName = document.getElementById("findValueId").value;
  myName = lastChar.length < 2 ? myName + lastChar : myName.slice(0, -1);
  if (myName.length > -1) {
    for (i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.match(myName.toLowerCase())) {
        document
          .getElementById("pokeCardId" + i)
          .classList.remove("displayNone");
      } else {
        document.getElementById("pokeCardId" + i).classList.add("displayNone");
      }
    }
  }
}

async function myPokemonList(n) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    myDiv.innerHTML += template(i);
  }
}

function template(i) {
  x = `
 <div id="pokeCardId${i}" class="pokeCard ${pokemons[i].typeSlot1}">
        <div class="cardHeader">   
            <p>Nr.${i + 1}</p>
        </div>
        <img id="imageLargeId${i}" class="imageLarge" src="${
    pokemons[i].imageFrontGif
  }">
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
