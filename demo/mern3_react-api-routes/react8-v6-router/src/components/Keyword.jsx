import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

const Keyword = () => {
    const { keyword, colorParam}  = useParams()
    const navigate = useNavigate()

    const redirectToHome =()=>{
        navigate("/")
    }

    const redirectBack =() =>{
        navigate(-1)
    }


    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <p style={{color: colorParam}}> {keyword}</p>
            <button onClick={redirectToHome}>Return to home</button>

            <button onClick={redirectBack}>Back</button>
        </fieldset>
    )
}

export default Keyword