import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

// id is from routes : get id from params
// 1. import useParams
// 2. destructure all the params

// load the house info from API automatically : useEffect + useState
// from API: Axios


const House = () => {
    const {id} = useParams()
    const [house, setHouse] = useState()

    // useEffect will only trigger once!
    useEffect(()=>{
        axios.get(`https://anapioficeandfire.com/api/houses/${id}`)
            .then(response=>{
                console.log(response.data)
                setHouse(response.data)
            })
            .catch(err=>console.log(err))
    },[id])


    return (
        <fieldset>
            <legend> House.jsx</legend>
            {
                house?
                <div>
                    <h3> House: {house.name}</h3>
                    <h3> Region: {house.region} </h3>
                </div>:
                <h1> This house id is not avaible. Try again</h1>
            }
        </fieldset>
    )
}

export default House