import React from 'react'
import { Link } from 'react-router-dom'
function Changepassword() {
  return (
    <div>
        <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card my-3">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Change Password</h2>

                                <form>

                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="email" />
                                    </div>

                                    <div class="form-group">
                                        <label for="password">Old Password</label>
                                        <input type="password" class="form-control" id="password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="newPassword">New Password</label>
                                        <input type="password" class="form-control" id="newPassword" />
                                    </div>
                                    <div class="form-group">
                                        <label for="confirmPassword">Confirm New Password</label>
                                        <input type="password" class="form-control" id="confirmPassword" />
                                    </div>
                                    <div class="form-group mt-2 d-flex align-items-between justify-content-between">
                                        <button type="button"
                                            class="btn btn-primary">Submit</button>
                                        <Link type="button"
                                            class="btn btn-danger" to="/profile">Cancel</Link>
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

export default Changepassword