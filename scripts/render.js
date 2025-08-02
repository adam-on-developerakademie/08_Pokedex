async function myPokemonList(n) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    myDiv.innerHTML +=template(i)
  }
}

async function findTyp(x) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < pokemons.length; i++) {
    if(pokemons[i].typeSlot1==x||pokemons[i].typeSlot2==x){
    myDiv.innerHTML +=template(i)}
  }
}

async function find() {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < pokemons.length; i++) {
    if(pokemons[i].typeSlot1==x){
    myDiv.innerHTML +=template(i)}
  }
}


function template(i){
  x= `
 <div id="pokeCardId${i}" class="pokeCard ${pokemons[i].typeSlot1}">
        <div class="cardHeader">   
            <p>Nr.${i+1}</p>
        </div>
        <img id="imageLargeId${i}" class="imageLarge" src="${pokemons[i].imageLarge}">
        <p class="cardName">${fLetterUp(pokemons[i].name)}</p>
        <div class="cardBottom">
        <p class="cardType ${pokemons[i].typeSlot1}" >${pokemons[i].typeSlot1}</p>
        <p class="${(pokemons[i].typeSlot2? 'cardType':'')} ${(pokemons[i].typeSlot2? pokemons[i].typeSlot2:'')}" >${(pokemons[i].typeSlot2? pokemons[i].typeSlot2:'')}</p>
        </div>
 </div> 
 `;

 return x
}