import React from 'react'
import { Link } from 'react-router-dom'
function Edit() {
    return (
        <div>
            <div class="container">
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
                                        <Link type="button"
                                            class="btn btn-danger" to="/data">Can</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit