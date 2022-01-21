import React from 'react'

function Nav() {
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
                </ul>

                
            </div>
                <form className="d-flex">
                    <button className="btn btn-warning" type="submit">LogOut</button>
                </form>

                {/* <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                </ul> */}
            </nav>
  </>
  );
}

export default Nav;
