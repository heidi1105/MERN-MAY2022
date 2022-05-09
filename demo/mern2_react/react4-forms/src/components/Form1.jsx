// 1. import useState
// 2. for each input, need 1 state

import React, { useState } from 'react'
import Display from './Display'

const Form1 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(10)
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(username.length>3 && age>10 && password.length>8 && confirm===password){
            alert("Successfully create a user")
            console.log({username, age, password, confirm})
            setHasBeenSubmitted(true)
        }else{
            alert("Unsucessful")
        }
    }

    const formMessage =() =>{
        if(hasBeenSubmitted){
            return "Thank you for submitting the form!"
        }else{
            return "Welcome, please submit the form"
        }
    }

    return (
        <div>
            <h1> Form </h1>
            <p>{formMessage()}</p>
                <form onSubmit={handleSubmit}>
                <div>
                    <label> Username</label>
                    <input type="text" name="username" value={username}
                        onChange={(e)=>setUsername(e.target.value)}/>
                    {
                        (username && username.length <3)?
                        <span style={{color:"red"}}> Username must be at least 3 characters</span>:
                        ""
                    }
                </div>
                <div>
                    <label> Age</label>
                    <input type="number" name="age" value={age}
                        onChange={(e)=>setAge(e.target.value)} />
                    {
                        age<10?
                        <span style={{color:"red"}}> Age must be at least 10 years old</span>:""
                    }
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" name="password" value={password} 
                        onChange={e=>setPassword(e.target.value)}/>
                    {
                        password && password.length<8 &&
                        <span style={{color:"red"}}> Password must be at least 8 characters</span>
                    }
                </div>
                <div>
                    <label> Confirm password</label>
                    <input type="password" name="confirm" value={confirm}
                        onChange={e=>setConfirm(e.target.value)}/>
                    {
                        confirm && confirm!== password &&
                        <span style={{color:"red"}}> Password and confirm must match</span>
                    }
                </div>
                <button> Submit</button>
            </form>

            

            <Display username={username} age={age} password={password} confirm={confirm} />

        </div>
    )
}

export default Form1