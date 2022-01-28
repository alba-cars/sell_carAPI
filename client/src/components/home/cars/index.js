import React from 'react';

const Cars = () => {

  const addCar = () => {
    
  }
    return (
        <div>
          <div className="d-flex flex-column flex-root">
            {/*begin::Page*/}
            <div className="page d-flex flex-row flex-column-fluid">
              {/*begin::Wrapper*/}
              <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                {/*begin::Header*/}
                <div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
                  {/*begin::Container*/}
                  <div className="container-xxl d-flex align-items-center justify-content-between" id="kt_header_container">
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap mt-n5 mt-lg-0 me-lg-2 pb-2 pb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                      {/*begin::Heading*/}
                      <h1 className="text-dark fw-bolder my-0 fs-2">Digital Instant Valuation System</h1>
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
                      </div>
                      {/*end::Invite user*/}
                      {/*begin::Create app*/}
                      <div className="d-flex ms-3">
                        <a href="/auth/sign-in.html" className="btn btn-flex flex-center bg-body btn-color-red btn-active-color-danger w-40px w-md-auto h-40px px-0 px-md-6" id="kt_toolbar_primary_button">
                          <span className="d-none d-md-inline">Logout</span>
                        </a>
                      </div>
                      {/*end::Create app*/}
                    </div>
                    {/*end::Toolbar wrapper*/}
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Header*/}
                {/*begin::Content*/}
                {/*begin::Tables Cars*/}
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                  {/*begin::Container*/}
                  <div className="container-xxl" id="kt_content_container">
                    <div className="card mb-5 mb-xl-8 mr-5 ml-5">
                      {/*begin::Header*/}
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder fs-3 mb-1">Cars Instant Valuations</span>
                          <span className="text-muted mt-1 fw-bold fs-7">Over XX Queries made</span>
                        </h3>
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                            <span className="svg-icon svg-icon-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                  <rect x={5} y={5} width={5} height={5} rx={1} fill="#000000" />
                                  <rect x={14} y={5} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                  <rect x={5} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                  <rect x={14} y={14} width={5} height={5} rx={1} fill="#000000" opacity="0.3" />
                                </g>
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu 2*/}
                          <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Quick Actions</div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">Download Reports</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">Add New Car</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">Send Valuation</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body py-3">
                        {/*begin::Table container*/}
                        <div className="table-responsive">
                          {/*begin::Table*/}
                          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                            {/*begin::Table head*/}
                            <thead>
                              <tr className="fw-bolder text-muted">
                                <th className="w-25px">
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" defaultValue={1} data-kt-check="true" data-kt-check-target=".widget-13-check" />
                                  </div>
                                </th>
                                <th className="min-w-40px">Val ID</th>
                                <th className="min-w-40px">Date</th>
                                <th className="min-w-110px">Customer Info</th>
                                <th className="min-w-140px">Make</th>
                                <th className="min-w-120px">Model</th>
                                <th className="min-w-120px">Year</th>
                                <th className="min-w-120px">Trim</th>
                                <th className="min-w-120px">Mileage</th>
                                <th className="min-w-120px">Valuation</th>
                                <th className="min-w-50px text-end">Actions</th>
                              </tr>
                            </thead>
                            {/*end::Table head*/}
                            {/*begin::Table body*/}
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input className="form-check-input widget-13-check" type="checkbox" defaultValue={1} />
                                  </div>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">56037-XDER</a>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">22 Jan 2022</a>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">John Doe</a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">john@doe.com</span>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">BMW</a>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">X6</a>
                                </td>
                                <td className="text-dark fw-bolder text-hover-primary fs-6">2020</td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">Sport</a>
                                </td>
                                <td>
                                  <a href="#" className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">102,051 Kms</a>
                                </td>
                                <td>
                                  <a href="#" className="text-success fw-bolder text-hover-primary d-block mb-1 fs-6">AED 120,000 - AED 170,000</a>
                                </td>
                                <td className="text-end">
                                  <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                  <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                    {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                    <span className="svg-icon svg-icon-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black" />
                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black" />
                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                            {/*end::Table body*/}
                          </table>
                          {/*end::Table*/}
                        </div>
                        {/*end::Table container*/}
                      </div>
                      {/*begin::Body*/}
                    </div>
                  </div>
                </div>	
                {/*end::Tables Cars*/}							
                {/*end::Content*/}
                {/*begin::Footer*/}
                <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                  {/*begin::Container*/}
                  <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                    {/*begin::Copyright*/}
                    <div className="text-dark order-2 order-md-1">
                      <span className="text-gray-400 fw-bold me-1">Created by</span>
                      <a href="https://albacars.app" className="text-muted text-hover-primary fw-bold me-2 fs-6">Alba DIVS</a>
                    </div>
                    {/*end::Copyright*/}
                    {/*begin::Menu*/}
                    <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                      <li className="menu-item">
                        <a href="https://albacars.app" className="menu-link px-2">About</a>
                      </li>
                      <li className="menu-item">
                        <a href="https://albacars.app" className="menu-link px-2">Support</a>
                      </li>
                    </ul>
                    {/*end::Menu*/}
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Footer*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Page*/}
          </div>

          {/*begin::Modal - Download Report*/}
          <div className="modal fade" id="kt_modal_download_report" tabIndex={-1} aria-hidden="true">
            {/*begin::Modal dialog*/}
            <div className="modal-dialog mw-650px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header pb-0 border-0 justify-content-end">
                  {/*begin::Close*/}
                  <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                {/*begin::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                  {/*begin::Heading*/}
                  <div className="text-center mb-13">
                    {/*begin::Title*/}
                    <h1 className="mb-3">Invite a Friend</h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-bold fs-5">If you need more info, please check out
                      <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Google Contacts Invite*/}
                  <div className="btn btn-light-primary fw-bolder w-100 mb-8">
                    <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
                  {/*end::Google Contacts Invite*/}
                  {/*begin::Separator*/}
                  <div className="separator d-flex flex-center mb-8">
                    <span className="text-uppercase bg-body fs-7 fw-bold text-muted px-3">or</span>
                  </div>
                  {/*end::Separator*/}
                  {/*begin::Textarea*/}
                  <textarea className="form-control form-control-solid mb-8" rows={3} placeholder="Type or paste emails here" defaultValue={""} />
                  {/*end::Textarea*/}
                  {/*begin::Users*/}
                  <div className="mb-10">
                    {/*begin::Heading*/}
                    <div className="fs-6 fw-bold mb-2">Your Invitations</div>
                    {/*end::Heading*/}
                    {/*begin::List*/}
                    <div className="mh-300px scroll-y me-n7 pe-7">
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                            <div className="fw-bold text-muted">e.smith@kpmg.com.au</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                            <div className="fw-bold text-muted">melody@altbox.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1} selected="selected">Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Max Smith</a>
                            <div className="fw-bold text-muted">max@kt.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                            <div className="fw-bold text-muted">sean@dellito.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                            <div className="fw-bold text-muted">brian@exchange.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fw-bold">C</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                            <div className="fw-bold text-muted">mikaela@pexcom.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                            <div className="fw-bold text-muted">f.mitcham@kpmg.com.au</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                            <div className="fw-bold text-muted">olivia@corpmail.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-primary text-primary fw-bold">N</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                            <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1} selected="selected">Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                            <div className="fw-bold text-muted">dam@consilting.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-bold">E</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                            <div className="fw-bold text-muted">emma@intenso.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                            <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1} selected="selected">Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-info text-info fw-bold">A</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                            <div className="fw-bold text-muted">robert@benko.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">John Miller</a>
                            <div className="fw-bold text-muted">miller@mapple.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-success text-success fw-bold">L</span>
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                            <div className="fw-bold text-muted">lucy.m@fentech.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2} selected="selected">Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                            <div className="fw-bold text-muted">ethan@loop.com.au</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1} selected="selected">Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3}>Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="d-flex flex-stack py-4">
                        {/*begin::Details*/}
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                            <div className="fw-bold text-muted">dam@consilting.com</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*end::Details*/}
                        {/*begin::Access menu*/}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value={1}>Guest</option>
                            <option value={2}>Owner</option>
                            <option value={3} selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/*end::Access menu*/}
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::List*/}
                  </div>
                  {/*end::Users*/}
                  {/*begin::Notice*/}
                  <div className="d-flex flex-stack">
                    {/*begin::Label*/}
                    <div className="me-5 fw-bold">
                      <label className="fs-6">Adding Users by Team Members</label>
                      <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Switch*/}
                    <label className="form-check form-switch form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                      <span className="form-check-label fw-bold text-muted">Allowed</span>
                    </label>
                    {/*end::Switch*/}
                  </div>
                  {/*end::Notice*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>

          {/*begin::Modal - Add Car*/}
          <div className="modal fade" id="kt_modal_create_car" tabIndex={-1} aria-hidden="true">
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered mw-900px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header">
                  {/*begin::Modal title*/}
                  <h2>Create App</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body py-lg-10 px-lg-10">
                  {/*begin::Stepper*/}
                  <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
                    {/*begin::Aside*/}
                    <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                      {/*begin::Nav*/}
                      <div className="stepper-nav ps-lg-10">
                        {/*begin::Step 1*/}
                        <div className="stepper-item current" data-kt-stepper-element="nav">
                          {/*begin::Line*/}
                          <div className="stepper-line w-40px" />
                          {/*end::Line*/}
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">1</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Details</h3>
                            <div className="stepper-desc">Name your App</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Step 1*/}
                        {/*begin::Step 2*/}
                        <div className="stepper-item" data-kt-stepper-element="nav">
                          {/*begin::Line*/}
                          <div className="stepper-line w-40px" />
                          {/*end::Line*/}
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">2</span>
                          </div>
                          {/*begin::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Frameworks</h3>
                            <div className="stepper-desc">Define your app framework</div>
                          </div>
                          {/*begin::Label*/}
                        </div>
                        {/*end::Step 2*/}
                        {/*begin::Step 3*/}
                        <div className="stepper-item" data-kt-stepper-element="nav">
                          {/*begin::Line*/}
                          <div className="stepper-line w-40px" />
                          {/*end::Line*/}
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">3</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Database</h3>
                            <div className="stepper-desc">Select the app database type</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Step 3*/}
                        {/*begin::Step 4*/}
                        <div className="stepper-item" data-kt-stepper-element="nav">
                          {/*begin::Line*/}
                          <div className="stepper-line w-40px" />
                          {/*end::Line*/}
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">4</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Billing</h3>
                            <div className="stepper-desc">Provide payment details</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Step 4*/}
                        {/*begin::Step 5*/}
                        <div className="stepper-item" data-kt-stepper-element="nav">
                          {/*begin::Line*/}
                          <div className="stepper-line w-40px" />
                          {/*end::Line*/}
                          {/*begin::Icon*/}
                          <div className="stepper-icon w-40px h-40px">
                            <i className="stepper-check fas fa-check" />
                            <span className="stepper-number">5</span>
                          </div>
                          {/*end::Icon*/}
                          {/*begin::Label*/}
                          <div className="stepper-label">
                            <h3 className="stepper-title">Completed</h3>
                            <div className="stepper-desc">Review and Submit</div>
                          </div>
                          {/*end::Label*/}
                        </div>
                        {/*end::Step 5*/}
                      </div>
                      {/*end::Nav*/}
                    </div>
                    {/*begin::Aside*/}
                    {/*begin::Content*/}
                    <div className="flex-row-fluid py-lg-5 px-lg-15">
                      {/*begin::Form*/}
                      <form className="form" noValidate="novalidate" id="kt_modal_create_app_form">
                        {/*begin::Step 1*/}
                        <div className="current" data-kt-stepper-element="content">
                          <div className="w-100">
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span className="required">App Name</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name" />
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder defaultValue />
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                <span className="required">Category</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category" />
                              </label>
                              {/*end::Label*/}
                              {/*begin:Options*/}
                              <div className="fv-row">
                                {/*begin:Option*/}
                                <label className="d-flex flex-stack mb-5 cursor-pointer">
                                  {/*begin:Label*/}
                                  <span className="d-flex align-items-center me-2">
                                    {/*begin:Icon*/}
                                    <span className="symbol symbol-50px me-6">
                                      <span className="symbol-label bg-light-primary">
                                        {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black" />
                                            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    {/*end:Icon*/}
                                    {/*begin:Info*/}
                                    <span className="d-flex flex-column">
                                      <span className="fw-bolder fs-6">Quick Online Courses</span>
                                      <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                                    </span>
                                    {/*end:Info*/}
                                  </span>
                                  {/*end:Label*/}
                                  {/*begin:Input*/}
                                  <span className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="radio" name="category" defaultValue={1} />
                                  </span>
                                  {/*end:Input*/}
                                </label>
                                {/*end::Option*/}
                                {/*begin:Option*/}
                                <label className="d-flex flex-stack mb-5 cursor-pointer">
                                  {/*begin:Label*/}
                                  <span className="d-flex align-items-center me-2">
                                    {/*begin:Icon*/}
                                    <span className="symbol symbol-50px me-6">
                                      <span className="symbol-label bg-light-danger">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                        <span className="svg-icon svg-icon-1 svg-icon-danger">
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <rect x={2} y={2} width={9} height={9} rx={2} fill="black" />
                                            <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="black" />
                                            <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="black" />
                                            <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="black" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    {/*end:Icon*/}
                                    {/*begin:Info*/}
                                    <span className="d-flex flex-column">
                                      <span className="fw-bolder fs-6">Face to Face Discussions</span>
                                      <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                                    </span>
                                    {/*end:Info*/}
                                  </span>
                                  {/*end:Label*/}
                                  {/*begin:Input*/}
                                  <span className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="radio" name="category" defaultValue={2} />
                                  </span>
                                  {/*end:Input*/}
                                </label>
                                {/*end::Option*/}
                                {/*begin:Option*/}
                                <label className="d-flex flex-stack cursor-pointer">
                                  {/*begin:Label*/}
                                  <span className="d-flex align-items-center me-2">
                                    {/*begin:Icon*/}
                                    <span className="symbol symbol-50px me-6">
                                      <span className="symbol-label bg-light-success">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                        <span className="svg-icon svg-icon-1 svg-icon-success">
                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="black" />
                                            <path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="black" />
                                          </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                      </span>
                                    </span>
                                    {/*end:Icon*/}
                                    {/*begin:Info*/}
                                    <span className="d-flex flex-column">
                                      <span className="fw-bolder fs-6">Full Intro Training</span>
                                      <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                                    </span>
                                    {/*end:Info*/}
                                  </span>
                                  {/*end:Label*/}
                                  {/*begin:Input*/}
                                  <span className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="radio" name="category" defaultValue={3} />
                                  </span>
                                  {/*end:Input*/}
                                </label>
                                {/*end::Option*/}
                              </div>
                              {/*end:Options*/}
                            </div>
                            {/*end::Input group*/}
                          </div>
                        </div>
                        {/*end::Step 1*/}
                        {/*begin::Step 2*/}
                        <div data-kt-stepper-element="content">
                          <div className="w-100">
                            {/*begin::Input group*/}
                            <div className="fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                <span className="required">Select Framework</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework" />
                              </label>
                              {/*end::Label*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer mb-5">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-warning">
                                      <i className="fab fa-html5 text-warning fs-2x" />
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">HTML5</span>
                                    <span className="fs-7 text-muted">Base Web Projec</span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" defaultChecked="checked" name="framework" defaultValue={1} />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer mb-5">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-success">
                                      <i className="fab fa-react text-success fs-2x" />
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">ReactJS</span>
                                    <span className="fs-7 text-muted">Robust and flexible app framework</span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="framework" defaultValue={2} />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer mb-5">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-danger">
                                      <i className="fab fa-angular text-danger fs-2x" />
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">Angular</span>
                                    <span className="fs-7 text-muted">Powerful data mangement</span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="framework" defaultValue={3} />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer">
                                {/*begin:Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin:Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-primary">
                                      <i className="fab fa-vuejs text-primary fs-2x" />
                                    </span>
                                  </span>
                                  {/*end:Icon*/}
                                  {/*begin:Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">Vue</span>
                                    <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                                  </span>
                                  {/*end:Info*/}
                                </span>
                                {/*end:Label*/}
                                {/*begin:Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="framework" defaultValue={4} />
                                </span>
                                {/*end:Input*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end::Input group*/}
                          </div>
                        </div>
                        {/*end::Step 2*/}
                        {/*begin::Step 3*/}
                        <div data-kt-stepper-element="content">
                          <div className="w-100">
                            {/*begin::Input group*/}
                            <div className="fv-row mb-10">
                              {/*begin::Label*/}
                              <label className="required fs-5 fw-bold mb-2">Database Name</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder defaultValue="master_db" />
                              {/*end::Input*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                <span className="required">Select Database Engine</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine" />
                              </label>
                              {/*end::Label*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer mb-5">
                                {/*begin::Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin::Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-success">
                                      <i className="fas fa-database text-success fs-2x" />
                                    </span>
                                  </span>
                                  {/*end::Icon*/}
                                  {/*begin::Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">MySQL</span>
                                    <span className="fs-7 text-muted">Basic MySQL database</span>
                                  </span>
                                  {/*end::Info*/}
                                </span>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="dbengine" defaultChecked="checked" defaultValue={1} />
                                </span>
                                {/*end::Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer mb-5">
                                {/*begin::Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin::Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-danger">
                                      <i className="fab fa-google text-danger fs-2x" />
                                    </span>
                                  </span>
                                  {/*end::Icon*/}
                                  {/*begin::Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">Firebase</span>
                                    <span className="fs-7 text-muted">Google based app data management</span>
                                  </span>
                                  {/*end::Info*/}
                                </span>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="dbengine" defaultValue={2} />
                                </span>
                                {/*end::Input*/}
                              </label>
                              {/*end::Option*/}
                              {/*begin:Option*/}
                              <label className="d-flex flex-stack cursor-pointer">
                                {/*begin::Label*/}
                                <span className="d-flex align-items-center me-2">
                                  {/*begin::Icon*/}
                                  <span className="symbol symbol-50px me-6">
                                    <span className="symbol-label bg-light-warning">
                                      <i className="fab fa-amazon text-warning fs-2x" />
                                    </span>
                                  </span>
                                  {/*end::Icon*/}
                                  {/*begin::Info*/}
                                  <span className="d-flex flex-column">
                                    <span className="fw-bolder fs-6">DynamoDB</span>
                                    <span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
                                  </span>
                                  {/*end::Info*/}
                                </span>
                                {/*end::Label*/}
                                {/*begin::Input*/}
                                <span className="form-check form-check-custom form-check-solid">
                                  <input className="form-check-input" type="radio" name="dbengine" defaultValue={3} />
                                </span>
                                {/*end::Input*/}
                              </label>
                              {/*end::Option*/}
                            </div>
                            {/*end::Input group*/}
                          </div>
                        </div>
                        {/*end::Step 3*/}
                        {/*begin::Step 4*/}
                        <div data-kt-stepper-element="content">
                          <div className="w-100">
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mb-7 fv-row">
                              {/*begin::Label*/}
                              <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                <span className="required">Name On Card</span>
                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name" />
                              </label>
                              {/*end::Label*/}
                              <input type="text" className="form-control form-control-solid" placeholder name="card_name" defaultValue="Max Doe" />
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-column mb-7 fv-row">
                              {/*begin::Label*/}
                              <label className="required fs-6 fw-bold form-label mb-2">Card Number</label>
                              {/*end::Label*/}
                              {/*begin::Input wrapper*/}
                              <div className="position-relative">
                                {/*begin::Input*/}
                                <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" defaultValue="4111 1111 1111 1111" />
                                {/*end::Input*/}
                                {/*begin::Card logos*/}
                                <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                  <img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                                  <img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                                  <img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                                </div>
                                {/*end::Card logos*/}
                              </div>
                              {/*end::Input wrapper*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="row mb-10">
                              {/*begin::Col*/}
                              <div className="col-md-8 fv-row">
                                {/*begin::Label*/}
                                <label className="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
                                {/*end::Label*/}
                                {/*begin::Row*/}
                                <div className="row fv-row">
                                  {/*begin::Col*/}
                                  <div className="col-6">
                                    <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                                      <option />
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                      <option value={3}>3</option>
                                      <option value={4}>4</option>
                                      <option value={5}>5</option>
                                      <option value={6}>6</option>
                                      <option value={7}>7</option>
                                      <option value={8}>8</option>
                                      <option value={9}>9</option>
                                      <option value={10}>10</option>
                                      <option value={11}>11</option>
                                      <option value={12}>12</option>
                                    </select>
                                  </div>
                                  {/*end::Col*/}
                                  {/*begin::Col*/}
                                  <div className="col-6">
                                    <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                                      <option />
                                      <option value={2021}>2021</option>
                                      <option value={2022}>2022</option>
                                      <option value={2023}>2023</option>
                                      <option value={2024}>2024</option>
                                      <option value={2025}>2025</option>
                                      <option value={2026}>2026</option>
                                      <option value={2027}>2027</option>
                                      <option value={2028}>2028</option>
                                      <option value={2029}>2029</option>
                                      <option value={2030}>2030</option>
                                      <option value={2031}>2031</option>
                                    </select>
                                  </div>
                                  {/*end::Col*/}
                                </div>
                                {/*end::Row*/}
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col-md-4 fv-row">
                                {/*begin::Label*/}
                                <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                  <span className="required">CVV</span>
                                  <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code" />
                                </label>
                                {/*end::Label*/}
                                {/*begin::Input wrapper*/}
                                <div className="position-relative">
                                  {/*begin::Input*/}
                                  <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="CVV" name="card_cvv" />
                                  {/*end::Input*/}
                                  {/*begin::CVV icon*/}
                                  <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                    {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                                    <span className="svg-icon svg-icon-2hx">
                                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M22 7H2V11H22V7Z" fill="black" />
                                        <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="black" />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                  </div>
                                  {/*end::CVV icon*/}
                                </div>
                                {/*end::Input wrapper*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Input group*/}
                            {/*begin::Input group*/}
                            <div className="d-flex flex-stack">
                              {/*begin::Label*/}
                              <div className="me-5">
                                <label className="fs-6 fw-bold form-label">Save Card for further billing?</label>
                                <div className="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
                              </div>
                              {/*end::Label*/}
                              {/*begin::Switch*/}
                              <label className="form-check form-switch form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                                <span className="form-check-label fw-bold text-muted">Save Card</span>
                              </label>
                              {/*end::Switch*/}
                            </div>
                            {/*end::Input group*/}
                          </div>
                        </div>
                        {/*end::Step 4*/}
                        {/*begin::Step 5*/}
                        <div data-kt-stepper-element="content">
                          <div className="w-100 text-center">
                            {/*begin::Heading*/}
                            <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                            {/*end::Heading*/}
                            {/*begin::Description*/}
                            <div className="text-muted fw-bold fs-3">Submit your app to kickstart your project.</div>
                            {/*end::Description*/}
                            {/*begin::Illustration*/}
                            <div className="text-center px-4 py-15">
                              <img src="assets/media/illustrations/sigma-1/9.png" alt="" className="mw-100 mh-300px" />
                            </div>
                            {/*end::Illustration*/}
                          </div>
                        </div>
                        {/*end::Step 5*/}
                        {/*begin::Actions*/}
                        <div className="d-flex flex-stack pt-10">
                          {/*begin::Wrapper*/}
                          <div className="me-2">
                            <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                              <span className="svg-icon svg-icon-3 me-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={6} y={11} width={13} height={2} rx={1} fill="black" />
                                  <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}Back</button>
                          </div>
                          {/*end::Wrapper*/}
                          {/*begin::Wrapper*/}
                          <div>
                            <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                              <span className="indicator-label">Submit
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                <span className="svg-icon svg-icon-3 ms-2 me-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}</span>
                              <span className="indicator-progress">Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                            </button>
                            <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-3 ms-1 me-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="black" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}</button>
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Actions*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                    {/*end::Content*/}
                  </div>
                  {/*end::Stepper*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>

          {/*begin::Modal - New Car*/}
          <div className="modal fade" id="kt_modal_new_car" tabIndex={-1} aria-hidden="true">
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered mw-650px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header">
                  {/*begin::Modal title*/}
                  <h2>Add New Car</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                  {/*begin::Form*/}
                  <form id="kt_modal_new_card_form" className="form" action="#">
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                        <span className="required">Customer Name</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Customer Name" />
                      </label>
                      {/*end::Label*/}
                      <input type="text" className="form-control form-control-solid" placeholder name="customer_name" defaultValue="Max Doe" />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="required fs-6 fw-bold form-label mb-2">Customer Email</label>
                      {/*end::Label*/}
                      {/*begin::Input wrapper*/}
                      <div className="position-relative">
                        {/*begin::Input*/}
                        <input type="text" className="form-control form-control-solid" placeholder="Enter customer email" name="customer_email" defaultValue="john@doe.com" />
                        {/*end::Input*/}
                        {/*begin::Card logos*/}
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                          <img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                          <img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                          <img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                        </div>
                        {/*end::Card logos*/}
                      </div>
                      {/*end::Input wrapper*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                        <span className="required">Car Make</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Car Make" />
                      </label>
                      {/*end::Label*/}
                      <input type="text" className="form-control form-control-solid" placeholder name="car_make" defaultValue="BMW" />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-8 fv-row">
                        {/*begin::Label*/}
                        <label className="fs-6 fw-bold form-label mb-2">Model</label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Model">
                              <option />
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Label*/}
                          {/*end::Label*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                              <option />
                              <option value={2021}>2021</option>
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>
                              <option value={2031}>2031</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-md-4 fv-row">
                        {/*begin::Label*/}
                        <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                          <span>Trim</span>
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input wrapper*/}
                        <div className="position-relative">
                          {/*begin::Input*/}
                          <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="Sport" name="car_trim" />
                          {/*end::Input*/}
                          {/*begin::CVV icon*/}
                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                          </div>
                          {/*end::CVV icon*/}
                        </div>
                        {/*end::Input wrapper*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                        <span>Car Mileage</span>
                      </label>
                      {/*end::Label*/}
                      <input type="text" className="form-control form-control-solid" placeholder name="car_make" defaultValue="120,000" />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Label*/}
                      <div className="me-5">
                        <label className="fs-6 fw-bold form-label">Track Valuation?</label>
                        <div className="fs-7 fw-bold text-muted">If you want to keep this car tracked</div>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                        <span className="form-check-label fw-bold text-muted">Track</span>
                      </label>
                      {/*end::Switch*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="text-center pt-15">
                      <button type="reset" id="kt_modal_new_car_cancel" className="btn btn-light me-3">Discard</button>
                      <button data-bs-toggle="modal" data-bs-target="#kt_modal_new_car_value" className="btn btn-light me-3">Test</button>
                      <button type="submit" id="kt_modal_new_car_submit" className="btn btn-primary">
                        <span className="indicator-label">Submit</span>
                        <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2" /></span>
                      </button>
                    </div>
                    {/*end::Actions*/}
                  </form>
                  {/*end::Form*/}
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>
         
          {/*begin::Modal - New Car*/}
          <div className="modal fade" id="kt_modal_new_car_value" tabIndex={-1} aria-hidden="true">
            {/*begin::Modal dialog*/}
            <div className="modal-dialog modal-dialog-centered mw-650px">
              {/*begin::Modal content*/}
              <div className="modal-content">
                {/*begin::Modal header*/}
                <div className="modal-header">
                  {/*begin::Modal title*/}
                  <h2>Car Valuation</h2>
                  {/*end::Modal title*/}
                  {/*begin::Close*/}
                  <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                    <span className="svg-icon svg-icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="black" />
                        <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="black" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </div>
                  {/*end::Close*/}
                </div>
                {/*end::Modal header*/}
                {/*begin::Modal body*/}
                <div className="modal-body scroll-y mx-5 mx-xl-15 my-7 align-items-center text-center">
                  <p>John Doe - john@doe.com</p>
                  <h1 className="text-success">AED 120,000 - 170,000</h1>
                  <p>BMW X6 Sport 2021 - 120,000kms</p>
                </div>
                {/*end::Modal body*/}
              </div>
              {/*end::Modal content*/}
            </div>
            {/*end::Modal dialog*/}
          </div>

        </div>
      )
}

export default Cars ;
