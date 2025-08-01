async function myPokemonList(n) {
  let myDiv = document.getElementById("pokedex");
  myDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    myDiv.innerHTML += `
 <div id="pokeCardId${i}" class="pokeCard">
        <div class="cardHeader">   
            <p>Nr.${i+1}</p>
        </div>
            
        <img class="imageLarge" src="${pokemons[i].imageLarge}">
        <p class="cardName">${fLetterUp(pokemons[i].name)}</p>
 </div> 
 `;
  }
}
