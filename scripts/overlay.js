function overlayLoad(i) {
    
  let overlay = document.getElementById("overlayId");
  overlay.classList.toggle('displayNone')
//console.log(pokemons[i].imageLarge);

  overlay.innerHTML = `
            <div id="overlayImageBorderId" onclick="overlayLoad(${i})">
                <img id="overlayImageId" src="${pokemons[i].imageLarge}" alt="Overlay Image">
            </div >
            <div id="tabsId">
            <div id="attributesID">
            </div>
            <div id="attksID">
            </div>
            <div id="evolutiosID">
            </div>
            </div>
            <div id="tabMainId">
            </div>
`;
}
