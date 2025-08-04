async function init() {
  await loadPokedex();
  await getTypeNomber();
  await myPokemonList();

  //console.log(pokemons);
}

async function nPokempnsGet(n) {
  await getPokemon(n);
  await savePokedex();
  await getTypeNomber();
  await myPokemonList();
}





