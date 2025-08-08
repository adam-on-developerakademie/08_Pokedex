function overlayLoad(i) {
  let overlay = document.getElementById("overlayId");
  overlay.classList.remove("displayNone");
  console.log(pokemons[i]);
  overlay.innerHTML = `
            <div id="overlayCloseId"><img src="./assets/icons/close.png" onclick="myToggle('overlayId')"></div>
            <div id="overlayImageBorderId" class="${pokemons[i].typeSlot1}Card" onclick="overlayLoad(${i})">
                <img id="overlayImageId" src="${pokemons[i].imageLarge}" alt="Overlay Image">
            </div>
            <div id="overlayNaneId">
              <img src="./assets/icons/arrow_backward.png" onclick="previousPokemon (${i})">
                <p>#${('0000'+(i + 1)).slice((''+i).length) + '  ' +fLetterUp(pokemons[i].name)}</p>
              <img src="./assets/icons/arrow_forward.png" onclick="nextPokemon (${i})">
            </div>
            </div>
            <div id="tabMainNavId">
              <img src="./assets/icons/arrow_backward.png" onclick="previousPokemon (${i})">
              <div id="tabMainId"></div>
              <img src="./assets/icons/arrow_forward.png" onclick="nextPokemon (${i})">
            </div>
`;
  attributesMain(i);
}

function attributesMain(i) {
  document.getElementById("tabMainId").innerHTML = main(i);
}

function statsMain(i) {
  document.getElementById("tabMainId").innerHTML = main(i);
}

function evolutionsMain(i) {
  document.getElementById("tabMainId").innerHTML = main(i);
}

function previousPokemon (i){
  i==0? overlayLoad(pokemons.length-1):overlayLoad(i-1)  
}
function nextPokemon (i){
  i==pokemons.length-1 ? overlayLoad(0):overlayLoad(i+1)  
}