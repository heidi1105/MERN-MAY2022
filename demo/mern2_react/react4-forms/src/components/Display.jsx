import React from 'react'

const Display = (props) => {
  return (
    <div>
        <p> Username: {props.username}</p>
        <p> Age: {props.age}</p>
        <p> Password: {props.password}</p>
        <p> Confirm: {props.confirm}</p>        
    </div>
  )
}

export default Display