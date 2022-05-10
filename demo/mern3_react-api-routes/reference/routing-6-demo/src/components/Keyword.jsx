import React from 'react'
import {useParams, useNavigate} from "react-router"

const Keyword = () => {
    const {keyword, textcolor} = useParams()
    const navigate = useNavigate()

    const handleRedirect = ()=>{
        navigate(`/pokemon/pikachu`)
    }
    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <h1 style={{color:textcolor}}> You search for {keyword}</h1>
            <button onClick={handleRedirect}>Pikachu</button>
        </fieldset>
    )
}

export default Keyword