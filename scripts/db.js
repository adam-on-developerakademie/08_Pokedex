let pokemons = [];

let properties = [
  {
      imageLarge:         [true,'data.sprites.other["official-artwork"]["front_default"]',],
      imageLargeShiny:    [true,'data.sprites.other["official-artwork"]["front_shiny"]',],
      typeSlot1:          [true,'data.types[0].type.name',],
      typeSlot2:          ["data.types.length == 2", "data.types[1].type.name"],
  },
];
