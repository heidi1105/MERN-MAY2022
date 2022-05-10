import React, { useState } from 'react'
import FetchDisplay from './FetchDisplay';
import axios from "axios"


const FetchComponent = () => {
    // fetch takes time, and variable will change --> state
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState("")


    const fetchPokemonWithThen = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response => { // after fetching from url
                return response.json();
            })
            .then(jsonResponse => { // after .json()
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAwait = async() =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/mew`)
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const fetchPokemonAwait2 = async() =>{
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/m`)
            const jsonResponse = await response.json()
            setPokemon(jsonResponse)
        }catch(error){
            setError("This is a wrong url. Try another button")
            setPokemon()
        }
    }

    const fetchPokemonAxios = () =>{
        // axios.get, .post, .put, .delete
        axios.get(`https://pokeapi.co/api/v2/pokemon/eevee`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err=> console.log(err))
    }

    const fetchPokemonAxiosAwait = async()=>{
        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/jynx`)
            setPokemon(response.data)  
        }catch(error){
            console.log(error)
        }
    }



    return (
        <fieldset>
            <legend> FetchComponent.jsx</legend>
            <button onClick={fetchPokemonWithThen}> Fetch ditto using fetch/.then</button>
            <button onClick={fetchPokemonAwait}> Fetch Mew using fetch/await</button>
            <button onClick={fetchPokemonAwait2}> Error fetch using fetch/await</button>
            <button onClick={fetchPokemonAxios}>Fetch Eevee with Axios</button>
            <button onClick={fetchPokemonAxiosAwait}>Fetch Jynx with Axios await</button>
            {error}
            {
                pokemon ?
                    <div>
                        <h1> {pokemon.name} </h1>
                        <img src={pokemon.sprites.front_default} />
                    </div> :
                    <h1> Click a button to fetch a pokemon</h1>
            }

            {
                pokemon ?
                    <FetchDisplay pokemon={pokemon} />
                    :
                    <h1> Click a button to fetch a pokemon</h1>
            }



        </fieldset>
    )
}

export default FetchComponent