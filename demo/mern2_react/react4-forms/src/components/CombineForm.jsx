import React, { useState } from 'react'

const CombineForm = () => {
    const [formState, setFormState] = useState({
        username: "",
        age: 18,
        password: "",
        confirm: "",
        isSubscribed: true
    })

    const [formError, setFormError] = useState({
        username: true,
        age: false,
        password: true,
        confirm: true
    })


    const handleInput =(e) =>{
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.type==="checkbox"?e.target.checked: e.target.value
        // if(e.target.type==="checkbox"){
        //     const valToUpdate = e.target.checked
        // }else{
        //     const valToUpdate = e.target.value
        // }

        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        const errors = {...formError}

        // handle errors
        // if(keyToUpdate === "username")....
        // else if(keyToUpdate ==="age")...
        switch(keyToUpdate){
            case 'username':
                valToUpdate.length < 3?
                    errors.username = "Username must be at least 3 characters":
                    errors.username =""
                    break;
            case 'age':
                valToUpdate < 0?
                    errors.age="Age must be a positive number":
                    errors.age=""
                    break;

            case 'password':
                valToUpdate.length < 8?
                    errors.password ="Password must be at least 8 characters":
                    errors.password =""
                    break;
            case 'confirm':
                valToUpdate !== formState.password?
                    errors.confirm = "Password must match":
                    errors.confirm =""
                    break;
            default:
        }
        setFormError(errors)

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <div>
         <h1> Form </h1>

                <form onSubmit={handleSubmit}>
                <div>
                    <label> Username</label>
                    <input type="text" name="username" value={formState.username}
                        onChange={handleInput}/>
                    <span style={{color: "red"}}>{formError.username}</span>
                </div>
                <div>
                    <label> Age</label>
                    <input type="number" name="age" value={formState.age}
                        onChange={handleInput} /> 
                    {formError.age}
                </div>
                <div>
                    <label> Password</label>
                    <input type="password" name="password" value={formState.password} 
                        onChange={handleInput}/>
                    {formError.password}
                </div>
                <div>
                    <label> Confirm password</label>
                    <input type="password" name="confirm" value={formState.confirm}
                        onChange={handleInput}/>
                    {formError.confirm}
                </div>
                <div>
                    <label> Subscribe to promotional and marketing</label>
                    <input type="checkbox" name="isSubscribed" checked={formState.isSubscribed}
                        onChange={handleInput}/>
                    {}
                </div>


                <button> Submit test</button>
                <button> Submit</button>
            </form>


        </div>
    )
}

export default CombineForm