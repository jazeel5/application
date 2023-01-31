import React, { useEffect, useState, useContext } from 'react'
import { useParams, useSubmit, useNavigate } from 'react-router-dom'
import { StudentContext } from '../Context/student.js'

export default function Edit() {

  const navigate = useNavigate()

  const params = useParams();
  const { CallSingleStudent, sstudent, setSstudent, UpdateStudent } = useContext(StudentContext)

  // const [ename, setEname] = useState("");
  // const [ephone, setEphone] = useState("");
  // const [eemail, setEemail] = useState("");
  // const [eaddress, setEaddress] = useState("");

  // const [studentDetails, setStudentDetails] = useState({ename:"", ephone:"", eemail:"", eaddress:""})



  useEffect(() => {
    if(localStorage.getItem("token")){
      CallSingleStudent(params.id)
    }
    else{
      navigate('/login')
    }
  },[])


  const onSubmitEdit = (e) => {
    e.preventDefault()
    UpdateStudent(sstudent._id,sstudent.name,sstudent.phone,sstudent.email,sstudent.address)
    navigate("/")
  }


  const onChange = (e) => {
    console.log(e)
    setSstudent({...sstudent, [e.target.name]: e.target.value})
  }


  return (
    <>
      <div style={{ width: "500px", margin: "auto", marginTop: "100px" }}>
        <form onSubmit={onSubmitEdit} method="POST">
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Edit</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
            <input type="text" className="form-control" name="name" onChange={onChange} value={sstudent.name} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
            <input name='phone' type="text" value={sstudent.phone} onChange={onChange} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="a" className="form-label">Email</label>
            <input type="email" name='email' value={sstudent.email} onChange={onChange} className="form-control"  id="a" />
          </div>
          <div className="mb-3">
            <label htmlFor="b" className="form-label">Address</label>
            <input type="text" name='address' value={sstudent.address} onChange={onChange} className="form-control" id="b" />
          </div>
          
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  )
}
