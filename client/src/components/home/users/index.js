import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Nav from '../../core/Nav'
import { server } from '../../helper'


function Users() {

    const [users, setUsers] = useState([])
 
    useEffect( ()  => { 
        async function fetchData() {
        const res = await axios.get(`${server}/api/users`)
            if(res.data){
                setUsers(res.data)
            }
         }
        fetchData()
        
    }, [])


  return <>
        <div className='container-fluid'>
        <Nav />
            <div className='container'>
                <div className='row p-2'>
                    {/* <div className='col'></div> */}
                    <div className='col'>
                            <h3 className='display-4'>All User</h3>
                            <table className="table table-hover table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">email</th>
                                    <th scope="col">role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Options</th>
                                </tr>
                                </thead>
                                <tbody>

                                        {users.length > 0 ? users.map((item, index) => (<tr key={index}>{
                                            <>
                                                <th scope="row">{index}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.role}</td>
                                                <td className={item.status === 'pending' ? "bg-warning text-center" : "bg-primary text-center"}>{item.status}</td>
                                                <td className="project-actions text-center">

                                                        <a className="btn btn-warning btn-sm" href={`/fleets/${item._id}`}>
                                                            View
                                                        </a>&nbsp;
                                                        <a className="btn btn-warning btn-sm" href={`/fleets/${item._id}`}>
                                                            Edit
                                                        </a>
                                                    
                                                </td>
                                            </>
                                        }</tr>)) :
                                            <>
                                                <tr>
                                                    <td colSpan={6} className='text-center'>{"No Records"}</td>
                                                </tr>
                                            </>
                                        } 


                            
                                </tbody>
                            </table>

                    </div>
                    {/* <div className='col'></div> */}
                </div>
            </div>
        </div>
    </>
}

export default Users;
