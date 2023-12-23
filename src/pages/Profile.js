import React from 'react'
import { Link } from 'react-router-dom'
function Profile() {
  return (
    <div>
        <div className='container'>
        <div className='py-4'>
                    <table class="table border shadow">
                        <tbody>
                        <tr>
                                <th scope="col">First Name</th>
                                <td scope="col">firstname</td>
                            </tr>
                            <tr>
                                <th scope="col">Last Name</th>
                                <td scope="col">lastname</td>
                            </tr>
                            <tr>
                                <th scope="col">Email</th>
                                <td scope="col">email</td>
                            </tr>
                            <tr>
                                <th scope="col">Password</th>
                                <td scope="col"><Link className='btn btn-primary' to="/changepassword">Change Password</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
  )
}

export default Profile