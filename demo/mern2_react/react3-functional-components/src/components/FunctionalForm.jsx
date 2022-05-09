import React, {useState} from 'react'

const FunctionalForm = () => {
    const [title, setTitle] = useState("The Witcher")
    const [description, setDescription] = useState("")

    const titleHandler = (e)=>{
        console.log(e)
        setTitle(e.target.value)
    }
    return (
        <div>
            <form>
                <input type="text" name="title" onChange={titleHandler} value={title}/>
                <input type="text" name="desciption" onChange={(e)=>setDescription(e.target.value)} value={description} />
                
            </form>
            <p>
                {title}
            </p>
            <p>{description}</p>

        </div>
    )
}

export default FunctionalForm