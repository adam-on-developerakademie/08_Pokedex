async function init() {
  await loadPokedex();
  await getTypeNomber();
  await myPokemonList();
}

async function nPokempnsGet(n) {
  const myButton = document.getElementById("takeMoreButtonID");
  myButton.classList.add("dontTouch");
  await loaderOn();
  await getPokemon(n);
  await getTypeNomber();
  await myPokemonList();
  await savePokedex();
  await loaderOff();
  myButton.classList.remove("dontTouch");
}
