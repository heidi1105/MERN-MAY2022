import React from 'react'
import { useParams, useHistory } from "react-router-dom"

const Keyword = () => {
    const { keyword, colorParam}  = useParams()
    const history = useHistory()

    const redirectToHome =()=>{
        history.push("/")
    }

    const redirectBack =()=>{
        history.goBack()
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