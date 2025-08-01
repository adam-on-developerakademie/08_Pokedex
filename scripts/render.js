async function myPokemonList(n) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    myDiv.innerHTML += `
 <div id="pokeCardId${i}" class="pokeCard ${pokemons[i].typeSlot1}">
        <div class="cardHeader">   
            <p>Nr.${i+1}</p>
        </div>
            
        <img id="imageLargeId${i}" class="imageLarge" src="${pokemons[i].imageLarge}">
        <p class="cardName">${fLetterUp(pokemons[i].name)}</p>
        <div class="cardBottom">
        <p class="cardType ${pokemons[i].typeSlot1}Type" >${pokemons[i].typeSlot1}</p>
        <p class="cardType" >${(pokemons[i].typeSlot2? pokemons[i].typeSlot2:'')}</p>
        </div>
 </div> 
 `;
  }
}
