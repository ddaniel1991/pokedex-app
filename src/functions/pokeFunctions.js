
export const getPokemon = async (pokeId) => {
    let loadPoke = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    let loadDescription = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`
    // let pokemon = {}
    let pokedexEntry = {
        pokemon: {},
        description: ''
    }
    let index = 0
    let isEnglish = false

    const res = await fetch(loadPoke)
    const secondRes = await fetch(loadDescription)
    const pokemon = await res.json()
    const description = await secondRes.json()
    await console.log(description)
    await console.log(description.flavor_text_entries[index].flavor_text)
    pokedexEntry.pokemon = pokemon
    while(isEnglish === false) {

            if(description.flavor_text_entries[index].language.name === 'en') {
                console.log(index)
                console.log(description.flavor_text_entries[index].language.name)
                console.log('is english set to true')
                isEnglish = true
               
            }
            else{
                index++
            
                console.log('not english, index is now ' + index)
            }
         
    }
    pokedexEntry.description = description.flavor_text_entries[index].flavor_text
    isEnglish = false

     
    return pokedexEntry
    
}

export const getAllPokemon = async () => {
    let loadPoke = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    let pokemon = []

    const res = await fetch(loadPoke)
    const data = await res.json()

    pokemon.push(data)

    return pokemon
    
}

export const calculateHeight = (height) => {
    //multipy height by four to convert decimeters to inches
    let heightString = ''
    let inches = height * 3.937
    let feet = Math.floor(inches / 12)
    
    inches = Math.floor(inches % 12)
    if(feet > 0) { heightString = `${feet} ft. ${inches} inches`}
    else { heightString = `${inches} inches`}
    
    return heightString

}

export const calculateWeight = (weight) => {
    //multiply by 3.5 to convert hectograms to ounces divide by 16 for pounds
    let ounces = weight * 3.5374
    let pounds = Math.floor(ounces / 16)
    ounces = pounds % 16
    let weightString = `${pounds} lbs. ${ounces} oz.`
    return weightString
}


export const threeDigitNumber = (pokeId) => {
    let number

    if(pokeId >= 100) number = pokeId.toString();
    else if(pokeId >= 10) number = '0' + pokeId.toString();
    else number = '00' + pokeId.toString();

    return number

}


