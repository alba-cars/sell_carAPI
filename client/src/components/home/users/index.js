import React from 'react'
import Nav from '../../core/Nav';


function Users() {
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
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
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
