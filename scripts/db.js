let pokemons = [];

let properties = [
  {
      imageLarge:         [true,'data.sprites.other["official-artwork"]["front_default"]',],
      imageLargeShiny:    [true,'data.sprites.other["official-artwork"]["front_shiny"]',],
      typeSlot1:          [true,'data.types[0].type.name',],
      typeSlot2:          ["data.types.length == 2", "data.types[1].type.name"],
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
        myPokemonList(5);
      } else {
         await getAllPokemons(); await getPokemonDetails(5); savePokedex();
      }
    }
  }
}
