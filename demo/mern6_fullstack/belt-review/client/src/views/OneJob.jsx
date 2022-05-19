import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useNavigate, Link} from "react-router-dom"

// get id from params, go to backend to grab info, display
// useParams, axios, useState, useEffect

const OneJob = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(response=>setJob(response.data))
      .catch(err=>navigate(`/`))
  },[])

  const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
      .then(response=>navigate("/"))
      .catch(err=>console.log(err))
  }

  return (
    <div>
      {
        job&&
        <div>
          <h3> Title: {job.title} </h3>
          <h3> Company: {job.company} </h3>
          <h3> Salary: ${job.salary} </h3>
          <h3> Remote: {job.isRemote? "Yes": "No"} </h3>
        </div>
      }
      <Link to={`/jobs/edit/${id}`} className="btn btn-success"> Edit</Link>
      <button className='btn btn-danger' onClick={handleDelete}> Delete</button>

      <Link to="/"> Back</Link>

    </div>
  )
}

export default OneJob