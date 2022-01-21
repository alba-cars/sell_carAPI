import {useState, useEffect} from 'react';
import Nav from '../../core/Nav';




const CreateUser = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState([])


    const handleLogin  = (e) => {
        e.preventDefault()
        const tmpLoginInfo = {
          name,
          email,
          password,
          role
        }
        console.log(tmpLoginInfo)
    }


  return (
    <div className="container-fluid">
        <Nav />
        <div className='row align-items-center justify-content-center'>
            <div className='col-12-sm' style={{height:'150px'}}></div>
            <div className='col'></div>
            <div className='col text-center  '>
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <br />
                <input
                    type="name"
                    className="form-control form-control-lg"
                    placeholder="Please Enter Name"
                    onChange={e => setName(e.target.value)}
                    required
                    autoFocus
                />
                 <br />
                <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <br />
                <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <br />
                <select  className="form-control form-control-lg" onChange={e => setRole(e.target.value)}>
                    <option>Select Role</option>
                    <option value='regular'>Regular User</option>
                    <option value='admin'>Admin User</option>
                </select>
                <br />
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleLogin}>
                    Create New User
                </button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
            <div className='col'></div>
        </div>
    </div>
    )
}

export default CreateUser;
