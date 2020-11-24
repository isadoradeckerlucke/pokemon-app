import React from 'react'

const POKE_API = 'https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';

// make individual pokemon card
function Pokecard(props) {
    let imgSrc = `${POKE_API}${props.id}.png`

    return (
        <div classname = 'Pokecard'>
            <div classname = 'Pokecard-title'>
                {props.name}
            </div>

            <img classname = 'Pokecard-image' src = {imgSrc}/>

            <div classname = 'Pokecard-data'>
                Type: {props.type}
            </div>
        </div>
    )
}

  

export default Pokecard;