import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StudentContext } from '../Context/student'
import TableItem from './TableItem'

export default function View() {
    const Con = useContext(StudentContext)

    let navigate = useNavigate()

    const reff = useRef(null);
    const reffClose = useRef(null);

    const [deleteId, setDeleteId] = useState("");

    const { GetStudent, student, DeleteStudent } = Con

    useEffect(() => {
        if (localStorage.getItem('token')) {
            GetStudent()
          }
          else {
            navigate('/login');
          }
    }, [])

    const DeletePop = (id) => {
        console.log(id)
        DeleteStudent(id)
        reffClose.current.click();
    }

    const DeleteMsg = (id) => {
        reff.current.click();
        setDeleteId(id)
        console.log(id)
    }
    const Logout = ()=>{
        return (
        localStorage.removeItem("token"),
        navigate('/login')
        )
    }

    return (
        <>
            <button ref={reff} type="hidden" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            

            {/* <!-- Modal for Delete --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           Are your sure!!!
                        </div>
                        <div className="modal-footer">
                            <button ref={reffClose} type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                            <button type="button" onClick={()=>DeletePop(deleteId)} className="btn btn-danger" data-bs-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Modal for Logout --> */}
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           Are your sure!!!
                        </div>
                        <div className="modal-footer">
                            <button ref={reffClose} type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                            <button type="button" onClick={Logout} className="btn btn-danger" data-bs-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "lightblue", width: "70%", textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "100px" }}>
                Click Here to <button className='btn' style={{backgroundColor:"green"}}><Link style={{color:"white", textDecoration:"none"}} to="/insert">INSERT</Link></button>
                <Link data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{marginLeft:"700px"}}>Logout</Link>





                {/* <!-- Button trigger modal --> */}






                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    
                    {student.length===0 && <tbody><tr>No data to display</tr></tbody>}
                    {student.map((i, ind) => <TableItem key={ind} index={ind} item={i} DeletePop={DeletePop} DeleteMsg={DeleteMsg} />)}



                </table>



            </div>




        </>
    )
}
