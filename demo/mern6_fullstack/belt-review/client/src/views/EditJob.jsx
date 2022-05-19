import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useNavigate, Link} from "react-router-dom"

// first, get info like get one : get id from params, get info from backend when component is mounted
// useEffect, useParams, axios, useState, useNavigate
// second, the form part (all inputs with state)

const EditJob = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(1000000)
  const [isRemote, setIsRemote] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(response=>{
        const job = response.data
        setTitle(job.title)
        setCompany(job.company)
        setSalary(job.salary)
        setIsRemote(job.isRemote)
      })
      .catch(err=>console.log(err))
  },[])

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote})
      .then(response=>navigate("/"))
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title </label>
          <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Company </label>
          <input type="text" name="company" value={company} onChange={e=>setCompany(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Salary </label>
          <input type="number" name="salary" value={salary} onChange={e=>setSalary(e.target.value)} className="form-control"/>
        </div>
        <div>
          <label> Remote? </label>
          <input type="checkbox" name="isRemote" checked={isRemote} onChange={e=>setIsRemote(e.target.checked)} />
        </div>
        <button className='btn btn-primary' type="submit" > Edit the job</button>
        <Link to="/" className='btn btn-light'> Cancel</Link>
      </form>


    </div>
  )
}

export default EditJob