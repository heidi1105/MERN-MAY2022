// 1. no need to import Component
import React from 'react'

// function 
// 2. it's a function, not a class 
// 3. no more this. instead, we use (props) and {props.title}
// 4. no more render(), only return
const FunctionalTVShow = (props) => {
    const {title, episodes, hashtags} = props
    return (
        <fieldset>
            <legend> FunctionalTVShow.jsx</legend>
            <h1> Title: {props.title}</h1>
            <p> Episodes: {props.episodes}</p>
            <ul>
                {
                    hashtags.map((element, i)=>{
                        return (
                            <li key={i}> {element}</li>
                        )
                    })
                }
            </ul>

        </fieldset>
    )
}

// export the function
export default FunctionalTVShow

// array: +s
// one object: no s