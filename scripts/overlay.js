function overlayLoad(i) {
  let overlay = document.getElementById("overlayId");
  overlay.classList.toggle("displayNone");
  console.log(pokemons[i]);
  overlay.innerHTML = `
            <div id="overlayImageBorderId" class="${
              pokemons[i].typeSlot1
            }Card" onclick="overlayLoad(${i})">
                <img id="overlayImageId" src="${
                  pokemons[i].imageLarge
                }" alt="Overlay Image">
            </div >
            <div id="tabsId">
            <div id="attributesID">attributes
            </div>
            <div id="statsID">
            </div>
            <div id="evolutionsID">
            </div>
            </div>
            <div id="tabMainId">

            <div id=attributesMainId>
            <table>
            <tr class="column1"><th>Base experience</th><th class="column2">${pokemons[i].base_experience}</th></tr>
            <tr class="column1"><th>Height</th><th class="column2">${pokemons[i].height}</th></tr>
            <tr class="column1"><th>Weight</th><th class="column2">${pokemons[i].weight}</th></tr>
            <tr class="column1"><th>Abilities:</th><th class="column2">${pokemons[i].ability1 ? (pokemons[i].ability1 + (pokemons[i].ability1_hiden ? '*':'')): ""}  </th></tr>      
            <tr class="column1"><th></th><th class="column2">${pokemons[i].ability2 ? (pokemons[i].ability2 + (pokemons[i].ability2_hiden ? '*':'')): ""}  </th></tr>      
            <tr class="column1"><th></th><th class="column2">${pokemons[i].ability3 ? (pokemons[i].ability3 + (pokemons[i].ability3_hiden ? '*':'')): ""}  </th></tr>      
            </table>
            * Ability is hidden.
            </div>

            </div>
`;
}
