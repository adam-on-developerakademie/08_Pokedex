let pokemons = [];
let filter = [];
let filterArray;
let fullSides = 0;
let page = 0;
let wild = false;
let qOnPage = 100;
let currentCard;
let readyNow=false
let currentView=0
let stats=['hp','attack','defense','specialAttack','specialDefense','speed']

let properties = [
  {
    imageLarge: [true, 'data.sprites.other["official-artwork"]["front_default"]',],
    imageLargeShiny: [true, 'data.sprites.other["official-artwork"]["front_shiny"]',],
    typeSlot1: [true, "data.types[0].type.name"],
    typeSlot2: ["data.types.length == 2", "data.types[1].type.name"],
    imageFrontGif: [true, 'data.sprites.other.showdown["front_default"]'],
    height: [true, "data.height"],
    weight: [true, "data.weight"],
    stat_hp: [true, "data.stats[0].base_stat"],
    stat_attack: [true, "data.stats[1].base_stat"],
    stat_defense: [true, "data.stats[2].base_stat"],
    stat_specialAttack: [true, "data.stats[3].base_stat"],
    stat_specialDefense: [true, "data.stats[4].base_stat"],
    stat_speed: [true, "data.stats[5].base_stat"],
    base_experience: [true, "data.base_experience"],
    ability1: ["data.abilities[0] != null", "data.abilities[0].ability.name"],
    ability1_hiden: ["data.abilities[0] != null", "data.abilities[0].is_hidden"],
    ability2: ["data.abilities[1] != null", "data.abilities[1].ability.name"],
    ability2_hiden: ["data.abilities[1] != null", "data.abilities[1].is_hidden"],
    ability3: ["data.abilities[2] != null", "data.abilities[2].ability.name"],
    ability3_hiden: ["data.abilities[2] != null", "data.abilities[2].is_hidden"],
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
        await myPokemonList();
      } else {
        await reset();
      }
    }
  } else {
    reset();
  }
}

function resetAsk() {
  document.getElementById("reloadButtonID").classList.toggle("displayNone"),
    getTypeNomber();
  document.getElementById("reloadAskButtonID").classList.toggle("displayNone"),
    getTypeNomber();
}

async function reset() {
  document.getElementById("reloadButtonID").style.backgroundColor = "grey";
  document.getElementById("pokedex").innerHTML = "";
  localStorage.removeItem("pokemons");
  localStorage.clear();
  pokemons.length = 0;
  await savePokedex();
  await getPokemon(20);
  await savePokedex();
  await myPokemonList();
  await getTypeNomber();
  document.getElementById("reloadButtonID").style.backgroundColor = "";
}
