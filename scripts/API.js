let nomberOfProperties=Object.keys(properties[0]).length
let nIndex


async function getPokemon(n) { 
     k = pokemons.length
    try {
      for (j = 0 + k; j < n + k ; j++) {
        let qLink ='https://pokeapi.co/api/v2/pokemon/'+(j+1);
        const Response = await fetch(qLink);
        const data = await Response.json();
                console.log(data)
        pokemons.push({"name":data.name})
        for (i=0; i<nomberOfProperties; i++){
        let propertieName = Object.keys(properties[0])[i];
        let propertieObligatory = ("properties[0]." + Object.keys(properties[0])[i] + "[0]");
        if (eval(eval(propertieObligatory))) {
        let propertieValue = ("properties[0]." + Object.keys(properties[0])[i] + "[1]");
        let propertie = ( "pokemons[" + j + "]." + propertieName + "=" + eval(propertieValue));
        eval(propertie)
        let wenn=eval(propertieObligatory)}}
       }
        await savePokedex();
        await myPokemonList(k+n);
    } catch (error) { console.log("Fehler: " + error);}

  }
