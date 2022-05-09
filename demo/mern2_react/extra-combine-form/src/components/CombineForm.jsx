import React, {useState} from 'react'

const CombineForm = () => {
    const [formState, setFormState]=useState({
        username: "",
        age: "",
        password : "",
        confirm: "",
        isSubscribed: true
    })    

    const [formError, setFormError]=useState({
        username: true,
        age: true,
        password : true,
        confirm: true
    })  

    const handleSubmit =(e)=>{
        e.preventDefault(); // only for onSubmit
       
            // const newUser = {} // create the user
            // console.log(newUser)
            // setHasBeenSubmitted(true)

    }  

    const handleInput = (e) =>{
        const errors = {...formError}
        const keyToUpdate = e.target.name //e.target.name: "username"
        const valToUpdate = (e.target.type==='checkbox')?e.target.checked: e.target.value

        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        switch(keyToUpdate){
            case 'username':
                valToUpdate.length<3?
                    errors.username = "Username must be at least 3 characters. ":
                    errors.username = ""
            case 'age':
                valToUpdate<0?
                    errors.age = "Age must be positive":
                    errors.age = ""
            case 'password':
                valToUpdate.length<8?
                    errors.password = "Password must be at least 8 characters":
                    errors.password = ""
            case 'confirm':
                valToUpdate !== formState.password?
                    errors.confirm = "Password must match" :
                    errors.confirm = ""       
        }

        setFormError(errors)

    }


    

  return (
    <div>


    <h1> Form</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label> Username </label>
            <input type="text" name="username" onChange={handleInput} value={formState.username}/>
            <p> {formError.username}</p>

        </div>
        <div>
            <label> age </label>
            <input type="number" name="age" onChange={handleInput} value={formState.age}/>
            <p> {formError.age} </p>

        </div>
        <div>
            <label> Password </label>
            <input type="password" name="password" onChange={handleInput} />
            <p> {formError.password}</p>

        </div>
        <div>
            <label> Confirm Password </label>
            <input type="password" name="confirm" onChange={handleInput} />
            <p> {formError.confirm}</p>
        </div>
        <div>
            <label> Subscribing to marketing messages </label>
            <input type="checkbox" name="isSubscribed" onChange={handleInput} checked={formState.isSubscribed} />
        </div>
        <button>Submit</button>
    </form>
    <p> Username: {formState.username}</p>
    <p> Age: {formState.age}</p>
    <p> password: {formState.password}</p>
    <p> confirm password: {formState.confirm}</p>
</div>
  )
}

export default CombineForm