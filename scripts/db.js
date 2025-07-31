let pokemons = [];
let allPokemons = 1400;
let qLinkAllPokemons = `https://pokeapi.co/api/v2/pokemon?limit=${allPokemons}&offset=${pokemons.length}`;

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
  if (pokemons.length > 0) {
    try {
      for (j = 0; j < n; j++) {
        let qLink = pokemons[j].url;
        console.log(qLink);
        const Response = await fetch(qLink);
        const data = await Response.json();
        pokemons[j].imageLarge =
          data.sprites.other["official-artwork"]["front_default"];
        pokemons[j].imageLargeShiny =
          data.sprites.other["official-artwork"]["front_shiny"];
        pokemons[j].typeSlot1 = data.types[0].type.name;
        data.types.length == 2
          ? (pokemons[j].typeSlot2 = data.types[1].type.name)
          : "";

        console.log(data);
        console.log(data.types[0].type.name);
   

        //console.log(data.sprites.other['official-artwork']['front_default']);
        //console.log(pokemons)
        //console.log(pokemons.hasOwn(pokemons[0], 'name'))
        myPokemonList(n) 
      }
    } catch (error) {
      console.log("Fehler: " + error);
    }
  }
}
