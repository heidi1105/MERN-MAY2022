import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend> MessageDisplay.jsx</legend>
        <p> Current Message: {props.currMessage}</p>
        {
            props.messages.map((unicorn, i)=>{
                return(
                    <p key={i} style={{color: unicorn }}> {unicorn}</p>
                )
            })
        }
    </fieldset>
  )
}

export default MessageDisplay