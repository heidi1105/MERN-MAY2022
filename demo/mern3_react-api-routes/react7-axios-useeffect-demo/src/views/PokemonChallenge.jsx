import React, {useState} from 'react'
import DisplayOnLoad from '../components/pokemonChallenge/DisplayOnLoad'
import PokemonForm from '../components/pokemonChallenge/PokemonForm'

const PokemonChallenge = () => {
    const [pokemonName, setPokemonName] = useState("pikachu")

    const receiveNewName = (newName) =>{
        setPokemonName(newName)
    }

    return (
        <div>
            <PokemonForm onNewName = {receiveNewName}/>
            <DisplayOnLoad pokemonName={pokemonName}/>

        </div>
    )
}

export default PokemonChallenge