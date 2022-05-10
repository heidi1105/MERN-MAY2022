import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonOnLoad = () => {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }, [pokemonName])


    return (
        <fieldset>
            <legend> PokemonOnLoad.jsx</legend>
            {
                pokemon &&
                <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} />
                </>
            }

        </fieldset>
    )
}

export default PokemonOnLoad