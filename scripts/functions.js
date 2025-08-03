function fLetterUp(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function findByName() {
  document.getElementById("findId").classList.toggle("displayNone");
  document.getElementById("findValueId").value = "";
}

function closeFind() {
  document.getElementById("findValueId").value = "";
  document.getElementById("findId").classList.toggle("displayNone");
}
function wild() {
  document.getElementById("");
  let autoZoom = document.querySelector(":root");
  let x = document.getElementById("imageLargeId0").offsetHeight;
  if (x == 80) {
    autoZoom.style.setProperty("--imageLargeWidth", "100vh");
    autoZoom.style.setProperty("--imageLargeHeight", "100vh");
    myPokemonList(pokemons.length, true);
  } else {
    document.getElementById("pokedexArea").style.justifyContent = "";
    autoZoom.style.setProperty("--imageLargeWidth", "80px");
    autoZoom.style.setProperty("--imageLargeHeight", "80px");
    myPokemonList(pokemons.length, false);
  }
}
