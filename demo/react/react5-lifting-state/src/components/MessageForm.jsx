// 1. import useState 
// 2. construct the state for the inputs
// 3. eventListener 

import React, { useState } from 'react'

const MessageForm = (props) => {
    const [message, setMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onNewMessage(message)

    }

    return (
        <fieldset>
            <legend> MessageForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    <input type="text" name="message" value={message}
                        onChange={e=>setMessage(e.target.value)}
                        placeholder="Please enter your message" />
                </p>
                <button type="submit"> Send</button>
            </form>


        </fieldset>
    )
}

export default MessageForm