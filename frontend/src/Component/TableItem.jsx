import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function TableItem({ item, index, DeleteMsg, DeletePop }) {
    
    return (
        <>
            <tbody>
                <tr>
                    <td scope="row">{index + 1}</td>
                    <td >{item.name}</td>
                    <td >{item.phone}</td>
                    <td >{item.email}</td>
                    <td >{item.address}</td>
                    <td><button className='btn btn-primary'><Link style={{color:"white", textDecoration:"none"}} to={`/edit/${item._id}`}>Edit</Link></button></td>
                    {/* // <td><Link to='edit'>Edit</Link></td> */}

                    <td><button className='btn btn-danger'><Link style={{color:"white", textDecoration:"none"}} onClick={() => DeleteMsg(item._id)}>Delete</Link></button></td>
                    
                </tr>
            </tbody>
        </>
    )
}
