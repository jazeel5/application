import React, { useContext, useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import {StudentContext} from '../Context/student';
import Axios from 'axios';

export default function Insert() {
    
    const [result, setResult] = useState("");
    const StudentCon = useContext(StudentContext)
    console.log(StudentCon)

    let navigate = useNavigate()

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    // const [details, setDetails] = useState({name:"",phone:"",email:"",address:""})

    // const onChange = (e) =>{
    //     setDetails({...details, [e.target.name]:e.target.value})
    // }

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(name,phone,email,address)

        // TestCase({name:name})

        // Axios.get(`${host}api/test`)
        // .then((response)=>{
        //     console.log(response)
        //     setResult(response.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        
        Axios.post(`/api/student/insert`,{name:name,phone:phone,email:email,address:address})
        .then((response)=>{
            console.log("Insert Response : "+response) 
            if (response.data.success==true){
                console.log("Inserted Successfully")
                navigate('/')
            }
            else if(response.data.success==false){
                console.log("hello")
            }
            else {
                console.log("some error occured")
            }
        })
        .catch((err)=>{
            alert(err)
            console.log("Error frontend: "+err)
        })

    }


    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login")
        }
    },[])
    


    return (
        <>
            <div style={{ marginTop:"100px"}}>
                <form onSubmit={onSubmit} method="POST" style={{width:"500px", marginRight:"auto", marginLeft:"auto"}}>
                    <h2 style={{textAlign:"center",marginBottom:"40px"}}>Insert</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"> Name</label>
                        <input type="text" className="form-control" name="name" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)} id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="a" className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="a"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="b" className="form-label">Address</label>
                        <input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)} id="b"/>
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>{result}</p>
            </div>
        </>
    )
}
