import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

// collect info from form, send to backend 
// useState for input
// axios

const CreateJob = () => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(1000000)
  const [isRemote, setIsRemote] = useState(false)
  const navigate = useNavigate()
  const [errors, setErrors] = useState([])

  const handleSubmit =(e) =>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/jobs`, {title, company, salary, isRemote})
      .then(response=>{
        console.log(response.data)
        navigate("/")
      })
      .catch(err=>{
        console.log(err.response.data.errors)
        const errArr = []
        const errObj = err.response.data.errors
        for(const errKey in errObj){
          errArr.push(errObj[errKey]["message"])
        }
        setErrors(errArr)

      })
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
        <button className='btn btn-primary' type="submit" > Create a new job</button>
        <Link to="/" className='btn btn-light'> Cancel</Link>
      </form>
      {
        errors.map((err, i)=>{
          return(
            <p key={i} style={{color: "red"}}> {err} </p>
          )
        })
      }
    </div>
  )
}

export default CreateJob