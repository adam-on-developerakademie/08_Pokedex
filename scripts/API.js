let nomberOfProperties = Object.keys(properties[0]).length;
let nIndex;

async function getPokemon(n) {
  try {
    let k = pokemons.length;
    for (j = 0 + k; j < n + k; j++) {
      let qLink = "https://pokeapi.co/api/v2/pokemon/" + (j + 1);
      const Response = await fetch(qLink);
      const data = await Response.json();
      prepairProperties(j, Response, data);
      //j == k ? console.log(data) : "";
    }
  } catch (error) {
    console.log("Fehler: " + error);
  }
}

async function prepairProperties(j, Response, data) {
  pokemons.push({ name: data.name });
  for (i = 0; i < nomberOfProperties; i++) {
    getPokemonValue(j, i, data, Response);
  }
}

async function getPokemonValue(j, i, data, Response) {
  let propertieName = Object.keys(properties[0])[i];
  let propertieObligatory =
    "properties[0]." + Object.keys(properties[0])[i] + "[0]";
  if (eval(eval(propertieObligatory))) {
    let propertieValue =
      "properties[0]." + Object.keys(properties[0])[i] + "[1]";
    let propertie =
      "pokemons[" + j + "]." + propertieName + "=" + eval(propertieValue);
    eval(propertie);
    let wenn = eval(propertieObligatory);
  }
}

async function getTypeNomber() {
  let typCounter = 0;
  let typName = "";
  filter.length = 0;
  for (i = 0; i < pokemons.length; i++) {
    typName = pokemons[i].typeSlot1;
    filter.push(typName);
    typName = pokemons[i].typeSlot2;
    filter.push(typName);
  }
  numberOfTypes(filter);
}

