function filterButtons() {return `
                    <p class="normal filterButton" onclick="myPokemonTypeList('normal')">${filterArray.normal?filterArray.normal:''} Normal</p>
                    <p class="fire filterButton" onclick="myPokemonTypeList('fire')">${filterArray.fire?filterArray.fire:''} Fire</p>
                    <p class="fighting filterButton" onclick="myPokemonTypeList('fighting')">${filterArray.fighting?filterArray.fighting:''} Fighting</p>
                    <p class="water filterButton" onclick="myPokemonTypeList('water')">${filterArray.water?filterArray.water:''} Water</p>
                    <p class="flying filterButton" onclick="myPokemonTypeList('flying')">${filterArray.flying?filterArray.flying:''} Flying</p>
                    <p class="grass filterButton" onclick="myPokemonTypeList('grass')">${filterArray.grass?filterArray.grass:''} Grass</p>
                    <p class="poison filterButton" onclick="myPokemonTypeList('poison')">${filterArray.poison?filterArray.poison:''} Poison</p>
                    <p class="electric filterButton" onclick="myPokemonTypeList('electric')">${filterArray.electric?filterArray.electric:''} Electric</p>
                    <p class="ground filterButton" onclick="myPokemonTypeList('ground')">${filterArray.ground?filterArray.ground:''} Ground</p>
                    <p class="psychic filterButton" onclick="myPokemonTypeList('psychic')">${filterArray.psychic?filterArray.psychic:''} Psychic</p>
                    <p class="rock filterButton" onclick="myPokemonTypeList('rock')">${filterArray.rock?filterArray.rock:''} Rock</p>
                    <p class="ice filterButton" onclick="myPokemonTypeList('ice')">${filterArray.ice?filterArray.ice:''} Ice</p>
                    <p class="bug filterButton" onclick="myPokemonTypeList('bug')">${filterArray.bug?filterArray.bug:''} Bug</p>
                    <p class="dragon filterButton" onclick="myPokemonTypeList('dragon')">${filterArray.dragon?filterArray.dragon:''} Dragon</p>
                    <p class="ghost filterButton" onclick="myPokemonTypeList('ghost')">${filterArray.ghost?filterArray.ghost:''} Ghost</p>
                    <p class="dark filterButton" onclick="myPokemonTypeList('dark')">${filterArray.dark?filterArray.dark:''} Dark</p>
                    <p class="steel filterButton" onclick="myPokemonTypeList('steel')">${filterArray.steel?filterArray.steel:''} Steel</p>
                    <p class="fairy filterButton" onclick="myPokemonTypeList('fairy')">${filterArray.fairy?filterArray.fairy:''} Fairy</p>
`
}

function main(i){

            let value=`
            <div id=attributesMainId>
            <table>
            <tr><td>Base experience</td><td>${pokemons[i].base_experience}</td></tr>
            <tr><td>Height</td><td>${pokemons[i].height}</td></tr>
            <tr><td>Weight</td><td>${pokemons[i].weight}</td></tr>
            <tr><td>Abilities</td><td>${pokemons[i].ability1 ? '1. '+ (pokemons[i].ability1 + (pokemons[i].ability1_hiden ? ' *':'')): ""}  </td></tr>      
            <tr><td></td><td>${pokemons[i].ability2 ? '2. '+ (pokemons[i].ability2 + (pokemons[i].ability2_hiden ? ' *':'')): ""}  </td></tr>      
            <tr><td></td><td>${pokemons[i].ability3 ? '3. '+ (pokemons[i].ability3 + (pokemons[i].ability3_hiden ? ' *':'')): ""}  </td></tr>      
            </table>
            ${pokemons[i].ability1_hiden || pokemons[i].ability2_hiden || pokemons[i].ability3_hiden ? '* Ability is hidden.':''}
            </div>`
  return value
}