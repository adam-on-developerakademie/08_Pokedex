function fLetterUp(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function findByName() {
  document.getElementById("findId").classList.toggle("displayNone");
  document.getElementById("findValueId").value = "";
}

function closeFind() {
  document.getElementById("findValueId").value = "";
  document.getElementById("findId").classList.toggle("displayNone");
}

function wildFunction() {
  document.getElementById("");
  let autoZoom = document.querySelector(":root");
  wild=!wild
  if (wild) {
    autoZoom.style.setProperty("--imageLargeWidth", "100vh");
    autoZoom.style.setProperty("--imageLargeHeight", "100vh");
    myPokemonList();
  } else {
    document.getElementById("pokedexArea").style.justifyContent = "";
    autoZoom.style.setProperty("--imageLargeWidth", "80px");
    autoZoom.style.setProperty("--imageLargeHeight", "80px");
    myPokemonList();
  }
}

async function findTyp(x) {
  let myDiv = document.getElementById("pokeCardId");
  let j = 0;
  for (i = 0; i < pokemons.length; i++) {
    if (
      (pokemons[i].typeSlot1 == x || pokemons[i].typeSlot2 == x) &&
      i >= page * qOnPage &&
      i < page * qOnPage + qOnPage
    ) {
      j = j + 1;
      document.getElementById("pokeCardId" + i).classList.remove("displayNone");
    } else {
      i >= page * qOnPage && i < page * qOnPage + qOnPage
        ? document.getElementById("pokeCardId" + i).classList.add("displayNone")
        : "";
    }
  }
  setCardsCounter(j);
}

async function find(lastChar) {
  let myName = document.getElementById("findValueId").value;
  let j = 0;
  myName = lastChar.length < 2 ? myName + lastChar : myName.slice(0, -1);
  if (myName.length > -1) {
    j = findValue(j, myName);
  }
  setCardsCounter(j);
}

function findValue(j, myName) {
  for (i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name.match(myName.toLowerCase())) {
      i >= page * qOnPage && i < page * qOnPage + qOnPage
        ? document
            .getElementById("pokeCardId" + i)
            .classList.remove("displayNone")
        : "";
      j = j + 1;
    } else {
      i >= page * qOnPage && i < page * qOnPage + qOnPage
        ? document.getElementById("pokeCardId" + i).classList.add("displayNone")
        : "";
    }
  }
  return j;
}

async function setCardsCounter(j) {
  j > 9
    ? document.getElementById("pokedexArea").classList.remove("center")
    : document.getElementById("pokedexArea").classList.add("center");
}

function nextPage() {
  (page + 1) > fullSides -1? page = 0 : page++;
  renderPagesbuttons();
    myPokemonList()
}
function backPage() {
   page <=0 ? page = fullSides -1 : page--;
  renderPagesbuttons();
    myPokemonList()
}
