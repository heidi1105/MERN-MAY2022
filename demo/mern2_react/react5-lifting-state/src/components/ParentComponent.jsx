import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const parentFunction1 =(secret)=>{
        alert(secret)
    }

    const parentFunction2 =(secret)=>{
        console.log(secret)
    }

    return (
        <fieldset>
            <legend> ParentComponent.jsx</legend>
            <ChildComponent callbackFunction ={parentFunction1} />
            <ChildComponent callbackFunction ={parentFunction2} />
        </fieldset>
    )
}

export default ParentComponent