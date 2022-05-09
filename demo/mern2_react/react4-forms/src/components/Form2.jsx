import React, { useState } from 'react'
import Display from './Display'

const Form2 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(10)
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    // set error state
    const [usernameError, setUsernameError] = useState(true)
    const [ageError, setAgeError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmError, setConfirmError] = useState(true)

    const handleSubmit = (e) =>{
        e.preventDefault()
        // if((username+age+password+confirm)===(usernameError + ageError + passwordError + confirmError)){
        //     alert("Hi")
        // }
        if(!usernameError && !ageError && !passwordError && !confirmError) {
            // sucessful means..... all error should be empty string
            alert("Successfully create a user")
            console.log({username, age, password, confirm})
            setHasBeenSubmitted(true)
        }else{
            alert("unsucessful")
        }
    }

    const formMessage =() =>{
        if(hasBeenSubmitted){
            return "Thank you for submitting the form!"
        }else{
            return "Welcome, please submit the form"
        }
    }

    const handleUsername = (e) =>{
        setUsername(e.target.value)
        if(e.target.value.length < 3){
            setUsernameError("Username must be at least 3 characters")
        }else{
            setUsernameError("")
        }
    }

    const handleAge = (e) =>{
        setAge(e.target.value)
        if(e.target.value < 10){
            setAgeError("Age must be at least 10 years")
        }else{
            setAgeError("")
        }
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }else{
            setPasswordError("")
        }
    }
    const handleConfirm = (e) =>{
        setConfirm(e.target.value)
        if(e.target.value !== password){
            setConfirmError("Password and confirm must match")
        }else{
            setConfirmError("")
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
                        onChange={handleUsername}/>
                    <span style={{color: "red"}}>{usernameError}</span>
                </div>
                <div>
                    <label> Age</label>
                    <input type="number" name="age" value={age}
                        onChange={handleAge} /> 
                    {ageError}
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" name="password" value={password} 
                        onChange={handlePassword}/>
                    {passwordError}
                </div>
                <div>
                    <label> Confirm password</label>
                    <input type="password" name="confirm" value={confirm}
                        onChange={handleConfirm}/>
                    {confirmError}
                </div>
                <button> Submit test</button>
                <button disabled={usernameError || ageError || passwordError || confirmError}> Submit</button>
            </form>

   
            <Display username={username} age={age} password={password} confirm={confirm} />

        </div>
    )
}

export default Form2