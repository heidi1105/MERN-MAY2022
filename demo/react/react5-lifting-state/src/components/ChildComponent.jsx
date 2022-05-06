import React from 'react'

const ChildComponent = (props) => {
    const secretMessage = "secret from child"
    return (
        <fieldset>
            <legend> ChildComponent.jsx</legend>
            <button onClick={()=>props.callbackFunction(secretMessage)}> a button</button>
        </fieldset>
    )
}

export default ChildComponent