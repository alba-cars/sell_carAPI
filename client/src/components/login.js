import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthProvider'


const Login = () =>  {
    const { auth, getLoggedIn,setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

  const handleLogin  = async (e) => {
      e.preventDefault()
      try{
        const tmpLoginInfo = {
          email,
          password
        }

            await axios.post('http://localhost:8080/api/users/login',
                tmpLoginInfo,{
                  headers: { 'Content-Type': 'application/json' }
              }).then(res => {
                if(res.data){
                  setAuth(res.data);
                  // window.location.href = "/"
                }
            }).catch((err, res) => {
              // console(err + ' '+ res)
            })

          // console.log(auth)
          // await getLoggedIn();
          setEmail('')
        setPassword('')
      }catch(err){
        alert(err)
      }
      
  }
  
  return (
    <div className="container">
        <div className='row align-items-center justify-content-center'>
            <div className='col-12-sm' style={{height:'150px'}}></div>
            <div className='col'></div>
            <div className='col text-center  '>
              <form className="form-signin">
                  <img
                    className="mb-4"
                    src="https://www.albacars.ae/public/images/LOGO.png"
                    alt=''
                    width={200}
                    height={200}
                  />
                  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <br />
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                    required
                    autoFocus
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
                  <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleLogin}>
                    Sign in
                  </button>
                  <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
            <div className='col'></div>
        </div>
    </div>
  );
}

export default Login;


