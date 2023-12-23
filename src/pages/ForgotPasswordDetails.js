import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPasswordDetails() {
  return (
    <div>
        <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card my-3">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Reset Password</h2>

                                <form>
                                   <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="confirmPassword">Confirm Password</label>
                                        <input type="password" class="form-control" id="confirmPassword" />
                                    </div> 
                                    <div class="form-group mt-2 d-flex align-items-between justify-content-between">
                                        <button type="submit"
                                            class="btn btn-primary">Submit</button>
                                        <Link type="button"
                                            class="btn btn-danger" to="/login">Cancel</Link>
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

export default ForgotPasswordDetails