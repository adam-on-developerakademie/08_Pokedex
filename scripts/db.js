let pokemons = [];
let filter = [];
let filterArray;
let fullSide =0
let seid=0

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

    imageFrontGif: [true, 'data.sprites.other.showdown["front_default"]'],
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
        myPokemonList(pokemons.length,false);
      } else {
        await reset();
      }
    }
  } else {
    reset();
  }
}

async function reset() {
  document.getElementById("reloadButtonID").style.backgroundColor = "grey";
  document.getElementById("pokedex").innerHTML = "";
  localStorage.removeItem("pokemons");
  localStorage.clear();
  pokemons.length = 0;
  await savePokedex();
  await getPokemon(50);
  await savePokedex();
  await myPokemonList(50,false);
  await getTypeNomber();
  document.getElementById("reloadButtonID").style.backgroundColor = "";
}
