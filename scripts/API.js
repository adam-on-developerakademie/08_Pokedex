let allPokemons = 1400;
let qLinkAllPokemons = `https://pokeapi.co/api/v2/pokemon?limit=${allPokemons}&offset=${pokemons.length}`;
let nomberOfProperties=Object.keys(properties[0]).length

async function getAllPokemons() {
  try {
    const Response = await fetch(qLinkAllPokemons);
    const data = await Response.json();
    for (i = 0; i < allPokemons; i++) {
      data.results[i] != null
        ? pokemons.push(data.results[i])
        : (i = allPokemons);
    }
  } catch (error) {
    console.log("Fehler: " + error);
  }
}

async function getPokemonDetails(n) { 
  if (pokemons.length > 0) {k = nUpdate(n);
    try {
      for (j = 0 + k; j < n + k ; j++) {
        let qLink = pokemons[j].url;
        const Response = await fetch(qLink);
        const data = await Response.json();
        for (i=0; i<nomberOfProperties; i++){
        let propertieName = Object.keys(properties[0])[i];
        let propertieObligatory = ("properties[0]." + Object.keys(properties[0])[i] + "[0]");
        if (eval(eval(propertieObligatory))) {
        let propertieValue = ("properties[0]." + Object.keys(properties[0])[i] + "[1]");
        let propertie = ( "pokemons[" + j + "]." + propertieName + "=" + eval(propertieValue));
        eval(propertie)
        let wenn=eval(propertieObligatory)}}}
    } catch (error) { console.log("Fehler: " + error);}}
  await savePokedex();
  await myPokemonList(nUpdate(n));
}

function nUpdate(n) {
  for (i = 0; i < allPokemons; i++) {
    if (Object.keys(pokemons[i]).length > 2) {
    } else {
      n = i;
      i = allPokemons;
    }
  }
  return n;
}
