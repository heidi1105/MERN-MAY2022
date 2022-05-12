import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// form: handleSubmit
// form: input -> state
// redirect: history.push (v5) navigate(v6)

const HeaderForm = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate(); // const history = useHistory()

    const handleSubmit =(e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`) // history.push(`/${category}/${id}`)
        clearForm()
    }

    const clearForm =()=>{
        setId("")
        setCategory("")
    }

    return (
        <fieldset>
            <legend> HeaderForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <p>
                    Search for 
                    <select name="category" value={category}
                        onChange={e=> setCategory(e.target.value)}>
                        <option hidden> Choose a category</option>
                        <option value="characters"> Character</option>
                        <option value="houses"> House</option>
                    </select>
                     ID:
                    <input type="text" name="id" value={id}
                    onChange={e=>setId(e.target.value)} />
                    <button type="submit"> Search</button>
                </p>

            </form>
        </fieldset>
    )
}

export default HeaderForm