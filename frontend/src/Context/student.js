import React, { createContext, useContext, useState } from 'react'
// import StudentContext from './studentContext';
import Axios from 'axios';

export const StudentContext = createContext();

export default function Student(props) {
  const host = "http://localhost:5001/"

  const [student, setStudent] = useState([]);

  const [sstudent, setSstudent] = useState([]);

  const TestCase = (props) => {
    alert("hello world " + props.name)
  }

  // const addStudent = async (name, phone, email, address) =>{

  //         const response = await fetch(`api/insert`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json", 
  //             // "auth-token": localStorage.getItem('token')
  //           },
  //           body: (JSON.stringify({name, phone, email, address}))
  //         });

  //         const json = await response.json();
  //         console.log(json)

  //         console.log("Adding a new book");
  //         if(json.success){
  //           alert("Book Added Successfull");
  //           history.push('/books');
  //         }
  //         else{
  //           alert("enter correct values")
  //         }
  //       }

  const GetStudent = () => {
    Axios.get(`${host}api/student/get_students`)
      .then((res) => {
        console.log("Get All Student Response : " + JSON.stringify(res.data))
        setStudent(res.data)

        // setData(res)
        // console.log(data)
      })
      .catch((err) => {
        console.log("Error : " + err)
      })
  }

  

  const DeleteStudent = (id) => {
    Axios.delete(`${host}api/student/delete_student/${id}`)
      .then((res) => {
        console.log('Deleting student of id : ' + id)
        const newStudent = student.filter((student) => { return student._id !== id })
        setStudent(newStudent)
      })
      .catch((err) => {
        console.log("Error : " + err)
      })
  }

  const CallSingleStudent = (id) => {
    Axios.get(`${host}api/student/get_single_student/${id}`)
      .then((res) => {
        console.log("Single Student Response : " + JSON.stringify(res.data))
        setSstudent(res.data)

        // setData(res)
        // console.log(data)
      })
      .catch((err) => {
        console.log("Error : " + err)
      })
  }

  const UpdateStudent = (id, name, phone, email, address) => {
    Axios.put(`${host}api/student/update_student/${id}`, { name, phone, email, address })
      .then((res) => {
        console.log("Update Response : " + JSON.stringify(res.data))

        // setStudent(res.data)

        let newStudent = JSON.parse(JSON.stringify(student))
        for (let index = 0; index < newStudent.length; index++) {
          const element = newStudent[index];
          if (element._id === id) {
            newStudent[index].name = name;
            newStudent[index].phone = phone;
            newStudent[index].email = email;
            newStudent[index].address = address;
            break;
          }
        }
        setStudent(newStudent);
      })
      .catch((err) => {
        console.log("Error : " + err)
      })

  }

  return (
    <StudentContext.Provider value={{ TestCase, GetStudent, student, DeleteStudent, CallSingleStudent, sstudent, setSstudent, UpdateStudent }}>
      {props.children}
    </StudentContext.Provider>
  )
}

