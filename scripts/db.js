let pokemons = [];

let properties = [
  {
    imageLarge: [
      true,
      'data.sprites.other["official-artwork"]["front_default"]',
    ],
    imageLargeShiny: [
      true,
      'data.sprites.other["official-artwork"]["front_shiny"]',
    ],
    typeSlot1: [true, "data.types[0].type.name"],
    typeSlot2: ["data.types.length == 2", "data.types[1].type.name"],
  },
];

async function savePokedex() {
  localStorage.setItem("pokemons", JSON.stringify(pokemons));
}

async function loadPokedex() {
  if (pokemons.length == 0) {
    if (typeof localStorage != "undefined") {
      if (localStorage.getItem("pokemons") != null) {
        pokemons = JSON.parse(localStorage.getItem("pokemons"));
        myPokemonList(pokemons.length);
      } else {
      }
    }
  } else {
    await getPokemon(9);
    await savePokedex();
  }
}

async function reset() {
  document.getElementById("reloadButtonID").style.backgroundColor = "grey";
  document.getElementById("pokedex").innerHTML = "";
  pokemons.length = 0;
  await savePokedex();
  await getPokemon(9);
   await savePokedex();
  await myPokemonList(9);
  await delay(500); // Warte 1 Sekunde
  document.getElementById("reloadButtonID").style.backgroundColor = "";
}
