async function myPokemonList() {
  let tempHTML = "";
  let myDiv = document.getElementById("pokedex");
  let k = 0;
  for (i = 0; i < pokemons.length; i++) {
    k = await usePromise(i, k, pokemons.length);
    fullSides = Math.ceil(i / qOnPage);
    if (i >= page * qOnPage && i < page * qOnPage + qOnPage) {
      tempHTML += template(i);
    }
  }
  myDiv.innerHTML = tempHTML;
  renderPagesbuttons();
}

function renderPagesbuttons() {
  document.getElementById("pagesId").innerHTML = `${page + 1} / ${fullSides}`;
  loaderOff();
}

async function allTogether() {
  loaderOn();
  page = 0;
  qOnPage = pokemons.length;
  await myPokemonList();
  qOnPage = 100;
  loaderOff();
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
  if (myName.length > 2) {myDiv.innerHTML = "";
    for (i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.match(myName.toLowerCase())) {
        myDiv.innerHTML += template(i);}
    }
  } else {
    await myPokemonList();
  }
}

async function getTypeNomber() {
  let typCounter = 0;
  let typName = "";
  filter.length = 0;
  for (i = 0; i < pokemons.length; i++) {
    typName = pokemons[i].typeSlot1;
    filter.push(typName);
    typName = pokemons[i].typeSlot2;
    filter.push(typName);
  }
  numberOfTypes(filter);
}

function numberOfTypes(array) {
  const counter = {};
  for (const element of array) {
    counter[element] = (counter[element] || 0) + 1;
  };
  delete counter.undefined;
  filterArray = counter;
  document.getElementById("typesBarId").innerHTML = filterButtons();
  let n = Object.values(filterArray).reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0);
  document.getElementById("takeMoreButtonID").innerHTML = `you have ${pokemons.length} <br> take next 20`;
}
