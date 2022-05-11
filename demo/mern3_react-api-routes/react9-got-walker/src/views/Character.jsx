import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Character = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState()

    useEffect(()=>{
        axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
            .then(response=>{
                console.log(response.data)
                setCharacter(response.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <fieldset>
            <legend> Character.jsx</legend>
            {
                character?
                    <div>
                        <h3> Name: {character.name}</h3>
                        <h3> Born: {character.born}</h3>
                    </div>:
                <h1> This house id is not avaible. Try again</h1>
            }
        </fieldset>
    )
}

export default Character