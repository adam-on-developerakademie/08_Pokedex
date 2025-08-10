function filterButtons() {
  return `
 <p class="normal filterButton" onclick="myPokemonTypeList('normal')">${
   filterArray.normal ? filterArray.normal : ""
 } Normal</p>
 <p class="fire filterButton" onclick="myPokemonTypeList('fire')">${
   filterArray.fire ? filterArray.fire : ""
 } Fire</p>
 <p class="fighting filterButton" onclick="myPokemonTypeList('fighting')">${
   filterArray.fighting ? filterArray.fighting : ""
 } Fighting</p>
 <p class="water filterButton" onclick="myPokemonTypeList('water')">${
   filterArray.water ? filterArray.water : ""
 } Water</p>
 <p class="flying filterButton" onclick="myPokemonTypeList('flying')">${
   filterArray.flying ? filterArray.flying : ""
 } Flying</p>
 <p class="grass filterButton" onclick="myPokemonTypeList('grass')">${
   filterArray.grass ? filterArray.grass : ""
 } Grass</p>
 <p class="poison filterButton" onclick="myPokemonTypeList('poison')">${
   filterArray.poison ? filterArray.poison : ""
 } Poison</p>
 <p class="electric filterButton" onclick="myPokemonTypeList('electric')">${
   filterArray.electric ? filterArray.electric : ""
 } Electric</p>
 <p class="ground filterButton" onclick="myPokemonTypeList('ground')">${
   filterArray.ground ? filterArray.ground : ""
 } Ground</p>
 <p class="psychic filterButton" onclick="myPokemonTypeList('psychic')">${
   filterArray.psychic ? filterArray.psychic : ""
 } Psychic</p>
 <p class="rock filterButton" onclick="myPokemonTypeList('rock')">${
   filterArray.rock ? filterArray.rock : ""
 } Rock</p>
 <p class="ice filterButton" onclick="myPokemonTypeList('ice')">${
   filterArray.ice ? filterArray.ice : ""
 } Ice</p>
 <p class="bug filterButton" onclick="myPokemonTypeList('bug')">${
   filterArray.bug ? filterArray.bug : ""
 } Bug</p>
 <p class="dragon filterButton" onclick="myPokemonTypeList('dragon')">${
   filterArray.dragon ? filterArray.dragon : ""
 } Dragon</p>
 <p class="ghost filterButton" onclick="myPokemonTypeList('ghost')">${
   filterArray.ghost ? filterArray.ghost : ""
 } Ghost</p>
 <p class="dark filterButton" onclick="myPokemonTypeList('dark')">${
   filterArray.dark ? filterArray.dark : ""
 } Dark</p>
 <p class="steel filterButton" onclick="myPokemonTypeList('steel')">${
   filterArray.steel ? filterArray.steel : ""
 } Steel</p>
 <p class="fairy filterButton" onclick="myPokemonTypeList('fairy')">${
   filterArray.fairy ? filterArray.fairy : ""
 } Fairy</p>
`;
}

function template(i) {
  let value = `
 <div id="pokeCardId${i}" class="pokeCard ${
    pokemons[i].typeSlot1
  }Card" onclick="overlayLoad(${i})">
 <div class="cardHeader"> 
 <p>#${("0000" + (i + 1)).slice(("" + i).length)}</p>
 </div>
 <div class="imageBorder">
 <img id="imageLargeId${i}" class="imageLarge" src="${
    wild ? pokemons[i].imageLarge : pokemons[i].imageFrontGif
  }">
 </div>
 <p id="cardNameId${i}" class="cardsName">${fLetterUp(pokemons[i].name)}</p>
 <div class="cardBottom">
 <p class="cardType ${pokemons[i].typeSlot1}" >${pokemons[i].typeSlot1}</p>
 <p class="${pokemons[i].typeSlot2 ? "cardType" : ""} ${
    pokemons[i].typeSlot2 ? pokemons[i].typeSlot2 : ""
  }" >${pokemons[i].typeSlot2 ? pokemons[i].typeSlot2 : ""}</p>
 </div>
 </div> 
 `;
  return value;
}

function attributesTamplate(i) {
  let value = `
 <div id=attributesViewId>
 <table>
 <tr><td class="attributesCollumn1" >Base experience</td><td class="attributesCollumn2" >${
   pokemons[i].base_experience
 }</td></tr>
 <tr><td class="attributesCollumn1" >Height</td><td class="attributesCollumn2" >${
   pokemons[i].height
 }</td></tr>
 <tr><td class="attributesCollumn1" >Weight</td><td class="attributesCollumn2" >${
   pokemons[i].weight
 }</td></tr>
 <tr><td class="attributesCollumn1" >Abilities</td><td class="attributesCollumn2" >${
   pokemons[i].ability1
     ? "1. " + (pokemons[i].ability1 + (pokemons[i].ability1_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 <tr><td class="attributesCollumn1" ></td><td class="attributesCollumn2" >${
   pokemons[i].ability2
     ? "2. " + (pokemons[i].ability2 + (pokemons[i].ability2_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 <tr><td class="attributesCollumn1" ></td><td class="attributesCollumn2" >${
   pokemons[i].ability3
     ? "3. " + (pokemons[i].ability3 + (pokemons[i].ability3_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 </table>
 ${
   pokemons[i].ability1_hiden ||
   pokemons[i].ability2_hiden ||
   pokemons[i].ability3_hiden
     ? "* Ability is hidden."
     : ""
 }
 </div>`;
  return value;
}

function statsTamplate(i) {
  let value = `
 <div id=attributesViewId>
 <table>
 <tr><td class="statsCollumn1" >HP</td><td class="statsCollumn2" >${pokemons[i].stat_hp}</td><td class="statsCollumn3" ><div id="hp" class="statsBlock"></div></td></tr>
 <tr><td class="statsCollumn1" >Attack</td><td class="statsCollumn2" >${pokemons[i].stat_attack}</td><td class="statsCollumn3" ><div id="attack" class="statsBlock"></div></td></td></tr>
 <tr><td class="statsCollumn1" >Defense</td><td class="statsCollumn2" >${pokemons[i].stat_defense}</td><td class="statsCollumn3" ><div id="defense" class="statsBlock"></div></td></td></tr>
 <tr><td class="statsCollumn1" >Special Attack</td><td class="statsCollumn2" >${pokemons[i].stat_specialAttack}</td><td class="statsCollumn3" ><div id="specialAttack" class="statsBlock"></div></td></td></tr>
 <tr><td class="statsCollumn1" >Special Defense</td><td class="statsCollumn2" >${pokemons[i].stat_specialDefense}</td><td class="statsCollumn3" ><div id="specialDefense" class="statsBlock"></div></td></td></tr>
 <tr><td class="statsCollumn1" >Speed</td><td class="statsCollumn2" >${pokemons[i].stat_speed}</td><td class="statsCollumn3" ><div id="speed" class="statsBlock"></div></td></td></tr>
 </table>
 
 </div>`;
  return value;
}

function evolutionsTamplate(i) {
  let value = `
 <div id=attributesViewId>
 <table>
 <tr><td>Base experience</td><td>${pokemons[i].base_experience}</td></tr>
 <tr><td>Height</td><td>${pokemons[i].height}</td></tr>
 <tr><td>Weight</td><td>${pokemons[i].weight}</td></tr>
 <tr><td>Abilities</td><td>${
   pokemons[i].ability1
     ? "1. " + (pokemons[i].ability1 + (pokemons[i].ability1_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 <tr><td></td><td>${
   pokemons[i].ability2
     ? "2. " + (pokemons[i].ability2 + (pokemons[i].ability2_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 <tr><td></td><td>${
   pokemons[i].ability3
     ? "3. " + (pokemons[i].ability3 + (pokemons[i].ability3_hiden ? " *" : ""))
     : ""
 } </td></tr> 
 </table>
 ${
   pokemons[i].ability1_hiden ||
   pokemons[i].ability2_hiden ||
   pokemons[i].ability3_hiden
     ? "* Ability is hidden."
     : ""
 }
 </div>`;
  return value;
}
