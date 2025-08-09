async function init() {
  await loadPokedex();
  await getTypeNomber();
  await myPokemonList();
  //await overlayLoad()

  //console.log(pokemons);
}

async function nPokempnsGet(n) {
  loaderOn() 
  await getPokemon(n);
  await savePokedex();
  await getTypeNomber();
  await myPokemonList();
  loaderOff() 
}