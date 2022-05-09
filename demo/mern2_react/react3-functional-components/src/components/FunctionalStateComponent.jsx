// 1. no more constructor, but import useState
import React, { useState } from 'react'

const FunctionalStateComponent = (props) => {
    // 2. set the state variables using useState
    const [count, setCount] = useState(0)
    const [like, setLike] = useState(props.like)

    // 3. all functions should have const before the name of the function
    const addCount = () =>{
        setCount(count+1)
    }

    const addSomeCount = (num) =>{
        setCount(count+num)
    } 
    // 4. when calling the state, use count instead of state.count
    return (
        <fieldset>
            <legend> FunctionalStateComponent.jsx</legend>
            <h3> Count: {count}</h3>
            <p>
                <button onClick={addCount}> Add count</button>
                <button onClick={()=>setCount(count-1)}> Reduce count</button>
                <button onClick={()=>addSomeCount(5)}> Add 5 count</button>
            </p>
            <h3> Like: {like}</h3>
            <p>
                <button onClick={()=>setLike(like+1)} > Like!</button>
            </p>
        </fieldset>
    )
}

export default FunctionalStateComponent