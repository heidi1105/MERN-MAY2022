import React from 'react'

const ShowDisplay = (props) => {

    const handleDelete = (deleteIdx) =>{
        const filteredList = props.shows.filter((show, i)=>{
            return (
                i !== deleteIdx
            )
        })
        props.onUpdateShows(filteredList)

    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Title</th>
                        <th> Genre</th>
                        <th> Recommended</th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.shows.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td> {element.title}</td>
                                    <td> {element.genre}</td>
                                    <td> {element.isRecommended ? "Yes" : "No"}</td>
                                    <td> <button onClick={e=>handleDelete(i)}> Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowDisplay

// don't need state