import React, {useState} from 'react'
// 3 inputs : title, genre, isRecommended
// 3 states

const ShowForm = (props) => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [isRecommended, setIsRecommended] = useState(true)

    const handleSubmit =(e)=>{
        e.preventDefault()
        props.onNewShow({title, genre, isRecommended})
        clearForm()
    }

    const clearForm =() =>{
        setTitle("")
        setGenre("")
        setIsRecommended(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title: </label>
                    <input type="text" name="title" value={title}
                        onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Genre: </label>
                    <select name="genre" value={genre} 
                        onChange={e=>setGenre(e.target.value)}>
                        <option hidden />
                        <option value="sci-fic"> Sci-fic</option>
                        <option value="fantasy"> Fantasy</option>
                        <option value="action"> Action</option>
                        <option value="horror"> Horror</option>
                    </select>
                 </div>
                 <div>
                    <label> Recommended: </label>
                    <input type="checkbox" name="isRecommended" checked={isRecommended}
                        onChange={e=>setIsRecommended(e.target.checked)} />
                </div>
                <button type="submit"> Create new show</button>
            </form>



        </div>
    )
}

export default ShowForm