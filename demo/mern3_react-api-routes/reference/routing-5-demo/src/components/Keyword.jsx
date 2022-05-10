import React from 'react'
import {useParams} from "react-router"
import {useHistory} from "react-router-dom"

const Keyword = () => {
    const {keyword, textcolor} = useParams()
    const history = useHistory()

    const handleRedirect =() =>{
        history.push("/pokemon/pikachu")
        // history.goBack()
    }

    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <h1 style={{color:textcolor}}> You search for {keyword}</h1>
            <button onClick={handleRedirect}> Pikachu</button>
        </fieldset>
    )
}

export default Keyword