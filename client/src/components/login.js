import axios from 'axios'
import React, {useState} from 'react'



const LoginDemo = () =>  {
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
                  localStorage.setItem('logUser',  res.data._id )
                  window.location.href = "/"
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


    // <div className="d-flex flex-column flex-root">
    //   {/*begin::Authentication - Sign-in */}
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-top position-x-top bgi-no-repeat bgi-size-cover bgi-attachment-fixed" style={{backgroundImage: 'url(/assets/media/background/bg1.png', height: "100vh"}}>
        {/*begin::Content*/}
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          {/*begin::Logo*/}
          <a href="/" className="mb-12">
            <img alt="Logo" src="/assets/media/logos/logo-demo7.svg" className="h-100px" />
          </a>
          {/*end::Logo*/}
          {/*begin::Wrapper*/}
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            {/*begin::Form*/}
            <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" action="#" onSubmit={handleLogin}>
              {/*begin::Heading*/}
              <div className="text-center mb-10">
                {/*begin::Title*/}
                <h1 className="text-dark mb-3">Sign In to Alba <br />Digital Instant Valuation System (DIVS)</h1>
                {/*end::Title*/}
                {/*begin::Link*/}
                {/* <div class="text-gray-400 fw-bold fs-4">New Here?
                            <a href="#" class="link-primary fw-bolder">Create an Account</a></div> */}
                {/*end::Link*/}
              </div>
              {/*begin::Heading*/}
              {/*begin::Input group*/}
              <div className="fv-row mb-10">
                {/*begin::Label*/}
                <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                {/*end::Label*/}
                {/*begin::Input*/}
                <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete="off" onChange={e => setEmail(e.target.value)}/>
                {/*end::Input*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="fv-row mb-10">
                {/*begin::Wrapper*/}
                <div className="d-flex flex-stack mb-2">
                  {/*begin::Label*/}
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                  {/*end::Label*/}
                  {/*begin::Link*/}
                  <a href='#' className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                  {/*end::Link*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Input*/}
                <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete="off" onChange={e => setPassword(e.target.value)} />
                {/*end::Input*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Actions*/}
              <div className="text-center">
                {/*begin::Submit button*/}
                <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5" onClick={handleLogin}>
                  <span className="indicator-label">Continue</span>
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                </button>
            
              </div>
              {/*end::Actions*/}
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}
        {/*begin::Footer*/}
        <div className="d-flex flex-center flex-column-auto p-10">
          {/*begin::Links*/}
          <div className="d-flex align-items-center fw-bold fs-6">
            <a href="https://albacars.app" className="text-muted text-hover-primary px-2">About</a>
            <a href="mailto:marketing@albacars.ae" className="text-muted text-hover-primary px-2">Contact</a>
          </div>
          {/*end::Links*/}
        </div>
        {/*end::Footer*/}
      </div>
    // </div>

  );
}

export default LoginDemo;


