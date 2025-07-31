async function myPokemonList(n) {
  let myDiv = document.getElementById("mainDivId2");myDiv.innerHTML=''
  //for (i = 0; i < pokemons.length; i++) 
    for (i = 0; i < n; i++){
 myDiv.innerHTML+=`
 <br>${i+'. '+ pokemons[i].name 
 + '  '+pokemons[i].url
+'<img class="imageBig" src="'+pokemons[i].imageLarge+'">'
 } 
 
 `
  }
}


