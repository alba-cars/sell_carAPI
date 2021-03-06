import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { server } from '../helper'

const Nav = () => {
    const [user, setUser] = useState([])

    
    const logOut = () => {
        localStorage.setItem('logUser',  '' )
        window.location.href = "/login"
    }

    useEffect( ()=> { 
        const loginUser = async (id)  =>  {
            try {
                const res = await axios.get(
                    `${server}/api/users/${id}`,
                    {
                    withCredentials: true,
                    }
                )
                if(res.data.length > 0){
                    setUser(res.data[0])
                    // console.log(res.data[0])
                }
      
            } catch (error) {
            console.log(error)
            }
        }

        const tmpUser = localStorage.getItem('logUser')
        if(tmpUser){
              loginUser(tmpUser)
        }
        if(tmpUser === '' || !tmpUser){
            window.location.href = "/login"
        }else{
            console.log('user is live')
        }
    }, [user.name])

  return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger p-1">
            <a className="navbar-brand" href="/">Albacars</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                </li>
             
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/users" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                    Users
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/users">All Users</a>
                        <a className="dropdown-item" href="/users/create">Create User</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/users" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false"> Cars </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/cars">All Cars</a>
                        <a className="dropdown-item" href="/cars/create">Create Cars</a>
                    </div>
                </li>

                </ul>

                
            </div>
                <ul className="nav justify-content-end ">
                        <h4 className="navbar-brand p-2" > Hi, {user.name}</h4>
                </ul>
                <form className="d-flex">
                    
                    <button className="btn btn-warning" type="submit" onClick={logOut}>LogOut</button>
                </form>

                
            </nav>
  </>
  );
}

export default Nav;
