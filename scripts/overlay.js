function overlayLoad(i) {
  let overlay = document.getElementById("overlayId");
  overlay.classList.toggle("displayNone");
  console.log(pokemons[i]);
  overlay.innerHTML = `
            <div id="overlayImageBorderId" class="${pokemons[i].typeSlot1}Card" onclick="overlayLoad(${i})">
                <img id="overlayImageId" src="${pokemons[i].imageLarge}" alt="Overlay Image">
            </div >
            <div id="tabsId">
            <div id="attributesID" onclick="attributesMain(${i})">attributes
            </div>
            <div id="statsID" onclick="statsMain(${i})">stats
            </div>
            <div id="evolutionsID" onclick="evolutionsMain(${i})">evolutions
            </div>
            </div>
            <div id="tabMainId">
            </div>
`;
  attributesMain(i);
}

function attributesMain(i) {
  document.getElementById("tabMainId").classList.remove("evolutionsCollor", "statsCollor");
  document.getElementById("tabMainId").classList.add("attributesCollor");
  document.getElementById("tabMainId").innerHTML = main(i);
}

function statsMain(i) {
  document.getElementById("tabMainId").classList.remove("evolutionsCollor", "attributesCollor");
  document.getElementById("tabMainId").classList.add("statsCollor");
  document.getElementById("tabMainId").innerHTML = main(i);
}

function evolutionsMain(i) {
  document.getElementById("tabMainId").classList.remove("attributesCollor", "statsCollor");
  document.getElementById("tabMainId").classList.add("evolutionsCollor");
  document.getElementById("tabMainId").innerHTML = main(i);
}
