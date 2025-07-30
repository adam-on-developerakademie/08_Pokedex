let pokemons = [];
let pokemon = [];

async function getPokemons(n) {
  let qLink = `https://pokeapi.co/api/v2/pokemon?limit=${n}&offset=${pokemons.length}`;
  try {
    const Response = await fetch(qLink);
    const data = await Response.json();
    for (i = 0; i < n; i++) {
      pokemons.push(data.results[i]);
    }
  } catch (error) {
    console.log("Fehler: " + error);
  }
}

getPokemons(5);
