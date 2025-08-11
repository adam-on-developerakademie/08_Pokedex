let nomberOfProperties = Object.keys(properties[0]).length;
let nIndex;
let evolution={}
let evolutionIndex = 0;
let evolutionIndexFail=[]

const pokemonsSource = "https://pokeapi.co/api/v2/pokemon/";
const evolutionSource = "https://pokeapi.co/api/v2/evolution-chain/";

async function getPokemon(n) {
  loaderOn();
  try {
    let k = pokemons.length;
    for (j = 0 + k; j < n + k; j++) {
      let qLink = pokemonsSource + (j + 1);
      const Response = await fetch(qLink);
      const data = await Response.json();
      prepairProperties(j, Response, data);
    }
  } catch (error) {
    console.log("Fehler: " + error);
  }
}

async function prepairProperties(j, Response, data) {
  pokemons.push({ name: data.name });
  for (i = 0; i < nomberOfProperties; i++) {
    getPokemonValue(j, i, data, Response);
    document.getElementById("loaderCounter").innerHTML = j;
    console.log(data);
  }
}

async function getPokemonValue(j, i, data, Response) {
  let propertieName = Object.keys(properties[0])[i];
  let propertieObligatory = "properties[0]." + Object.keys(properties[0])[i] + "[0]";
  if (eval(eval(propertieObligatory))) {
    let propertieValue = "properties[0]." + Object.keys(properties[0])[i] + "[1]";
    let propertie = "pokemons[" + j + "]." + propertieName + "=" + eval(propertieValue);
    eval(propertie);
  }
}

async function getFamily(n) {
  try {
    for ( myIndex = n; myIndex <= evolutionIndex; myIndex++) {
      let qLink = evolutionSource + (evolutionIndex == 0 ? "" : myIndex);
      if (evolutionIndexFail.includes(myIndex)){}else{
      const Response = await fetch(qLink);
      const data = await Response.json();
      myIndex == 0 ? evolutionIndex=data.count:
      console.log(Response);
      console.log(data);
      console.log(myIndex +'   '+ evolutionIndex)
    }}
  } catch (error) {
    console.log("Fehler: " + error);
    evolutionIndexFail.push(myIndex)
    console.log(evolutionIndexFail);
    getFamily(myIndex+1) 
  }
}
getFamily(0);
