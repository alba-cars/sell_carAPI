import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { server } from './helper'

const Header = ({page}) => {

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
    <div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
                  {/*begin::Container*/}
                  <div className="container-xxl d-flex align-items-center justify-content-between" id="kt_header_container">
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap mt-n5 mt-lg-0 me-lg-2 pb-2 pb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                      {/*begin::Heading*/}
                      <h1 className="text-dark fw-bolder my-0 fs-2">Digital Instant Valuation System | {page}</h1>
                      {/*end::Heading*/}
                      {/*begin::Breadcrumb*/}
                      <ul className="breadcrumb fw-bold fs-base my-1">
                        <li className="breadcrumb-item text-muted">
                          <a href="/" className="text-muted">Dashboard</a>
                        </li>
                      
                      </ul>
                      {/*end::Breadcrumb*/}
                    </div>
                    {/*end::Page title=*/}
                    {/*begin::Toolbar wrapper*/}
                    <div className="d-flex flex-shrink-0">
                      {/*begin::Invite user*/}
                      <div className="d-flex ms-3">
                        <a href="#" className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6" data-bs-toggle="modal" data-bs-target="#kt_modal_new_car">
                          {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                          <span className="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                              <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="black" />
                              <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="black" />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          <span className="d-none d-md-inline">Add Car</span>
                        </a> 
                            &nbsp; <span className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6">|</span> &nbsp;
                        <a href='/users'  className='btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6'><span className="d-none d-md-inline">Users</span></a>
                            &nbsp; <span className="btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6">|</span> &nbsp;
                        <a href='/cars'  className='btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6'><span className="d-none d-md-inline">Cars</span></a>
                      </div>
                      {/*end::Invite user*/}
                      {/*begin::Create app*/}
                      <div className="d-flex ms-3">
                        <a href="#" className="btn btn-flex flex-center bg-body btn-color-red btn-active-color-danger w-40px w-md-auto h-40px px-0 px-md-6" id="kt_toolbar_primary_button">
                          <span className="d-none d-md-inline" onClick={logOut}>Logout</span>
                        </a>
                      </div>
                      {/*end::Create app*/}
                    </div>
                    {/*end::Toolbar wrapper*/}
                  </div>
                  {/*end::Container*/}
                </div>
  </>
  );
}

export default Header;
