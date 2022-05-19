import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link  } from 'react-router-dom'
// get info from backend when mounting this component
// axios, useEffect, useState, link


const Dashboard = () => {
  const [jobs , setJobs] = useState([])
  const [refresh, setRefresh] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs`)
      .then(response=>setJobs(response.data))
      .catch(err=>console.log(err))
  },[refresh])

  // ---------REFRESH-----------
  const handleDelete = (deleteId)=>{
    // go into the database, delete. Then, dashboard is updated (filterList or refresh)
    axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
      .then(response=>setRefresh(!refresh))
      .catch(err=>console.log(err))
  }

 // ---------FilterList (remove all REFRESH on this page)-----------
  const handleDelete2 = (deleteId)=>{
    axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
    .then(response=>{
      const filterList = jobs.filter((job)=>job._id !== deleteId)
      setJobs(filterList)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <Link to="/jobs/new"> Create a new job</Link>
      <table className='table'>
        <thead>
          <tr>
            <th> Title</th>
            <th> Company</th>
            <th> Salary </th>
            <th> Remote? </th>
            <th colSpan={2}> Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map((job, i)=>{
              return(
                <tr key={i}>
                  <td> <Link to={`/jobs/${job._id}`}>{job.title}</Link> </td>
                  <td> {job.company} </td>
                  <td> {job.salary}</td>
                  <td> {job.isRemote? "Remote": ""} </td>
                  <td> <Link to={`/jobs/edit/${job._id}`}> Edit</Link> </td>
                  <td> 
                    <button className='btn btn-danger' onClick={()=>handleDelete(job._id)}>Delete with refresh</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={()=>handleDelete2(job._id)}>Delete with filter</button>
                    </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
  )
}

export default Dashboard