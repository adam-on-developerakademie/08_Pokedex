function overlayLoad(i) {
  let overlay = document.getElementById("overlayId");
  overlay.classList.remove("displayNone");
  overlay.innerHTML = `
            <div id="overlayCloseId"><img src="./assets/icons/close.png" onclick="myToggle('overlayId')"></div>
            <div id="overlayImageBorderId" class="${pokemons[i].typeSlot1}Card" onclick="overlayLoad(${i})">
                <img id="overlayImageId" src="${pokemons[i].imageLarge}" alt="Overlay Image">
            </div>
            <div id="overlayNameId">
              <img src="./assets/icons/arrow_backward.png" onclick="previousPokemon (${i})">
                <p id="overlayNameValueId">#${('0000'+(i + 1)).slice((''+i).length) + '  ' +fLetterUp(pokemons[i].name)}</p>
              <img src="./assets/icons/arrow_forward.png" onclick="nextPokemon (${i})">
            </div>
            </div>
            <div id="overlayViewNavId">
              <img src="./assets/icons/arrow_backward.png" onclick="previousView (${i})">
              <div id="overlayViewId"></div>
              <img src="./assets/icons/arrow_forward.png" onclick="nextView (${i})">
            </div>
`;
  eval(`view${currentView}(${i})`);
}

function view0(i) {
  document.getElementById("overlayViewId").innerHTML = attributesTamplate(i);
}

function view1(i) {
  document.getElementById("overlayViewId").innerHTML = statsTamplate(i);
  makeBlock();
  fillBlock(i)
  document.getElementById("overlayNameValueId").innerHTML += ' Shiny';
  document.getElementById("overlayImageBorderId").innerHTML=`<img id="overlayImageId" src="${pokemons[i].imageLargeShiny}" alt="Overlay Image"></img>`
}

function view2(i) {
  document.getElementById("overlayViewId").innerHTML = evolutionsTamplate(i);
}

function previousView (i){
  currentView==0? currentView=2:currentView--
  overlayLoad(i)  
}

function nextView (i){
   currentView==2? currentView=0:currentView++ 
   overlayLoad(i)  
}

function previousPokemon (i){
  i==0? overlayLoad(pokemons.length-1):overlayLoad(i-1)  
}

function nextPokemon (i){
  i==pokemons.length-1 ? overlayLoad(0):overlayLoad(i+1)  
}

function makeBlock() {
  for (j = 0; j < stats.length; j++) {
    let value = "";
    for (i = 0; i < 15; i++) {
      value += `<div id="${stats[j] + i}" class="block"></div>`;
    }
    document.getElementById(stats[j]).innerHTML = value;
  }
}
function fillBlock(k) {
  for (j = 0; j < stats.length; j++) {
    for (i = 0; i < 15; i++) {
      let value=Math.trunc(eval('pokemons[k].'+('stat_'+stats[j]))/15)
      value >i ? document.getElementById(stats[j] + i).classList.add(pokemons[k].typeSlot1):''
    }
  }
}