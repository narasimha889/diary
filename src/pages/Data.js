import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Data() {
    const [show,setShow]=useState(false);
    return (
        <div>
            <div className='container'>
                <div className='py-4'>
                    <table class="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Discription</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>12-01-2013</td>
                                <td>first discription</td>
                                <td><Link className="btn btn-primary" to="/view">View</Link>
                                    <Link className='btn btn-outline-primary mx-2' to="/edit">Edit</Link>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <p>For to create data <button className='btn btn-primary' onClick={()=>setShow(true)}>Click Here</button></p>
                </div>
            </div>

            </div>
            {
                show?<div class="container dataTable">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card my-3">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Create data</h2>

                                <form>

                                    <div class="form-group">
                                        <label for="createDate" class="form-label">Date</label>
                                        <input type="Date" class="form-control" id="createDate" aria-describedby="createDate" />
                                    </div>

                                    <div class="form-group">
                                        <label for="description" class="form-label">Description</label>
                                        <textarea class="form-control" id="description" aria-describedby="description"></textarea>
                                    </div>
                                    <div class="form-group mt-2 d-flex align-items-between justify-content-between">
                                        <button type="button"
                                            class="btn btn-primary">Submit</button>
                                        <button type="button"
                                            class="btn btn-danger" onClick={()=>setShow(false)}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:null
            }
         
        </div>

    )
}


export default Data