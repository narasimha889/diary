import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    function navigatehome(){
        navigate("/");
    }
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [conPassword, setConfirmPassword] = useState({
        confirmPassword: ""
    })
    const [formError, setFormError] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const validateFormData = async (e) => {
        e.preventDefault();
        let inputError = {
            firstName:"",
            lastName:"",
            email: "",
            password: "",
            confirmPassword: ""
        }
        if (!firstName) {
            setFormError({
                ...inputError,
                email: "Enter a First Name"
            });
            return;
        }
        if (!lastName) {
            setFormError({
                ...inputError,
                email: "Enter a last Name"
            });
            return;
        }
        if (!email) {
            setFormError({
                ...inputError,
                email: "Enter a valid Email Address"
            });
            return;
        }
        if (!password) {
            setFormError({
                ...inputError,
                password: "password should not be empty"
            });
            return;
        }
        if (password !== conPassword.confirmPassword) {
            console.log(conPassword.confirmPassword);
            setFormError({
                ...inputError,
                confirmPassword: "password and confirm password should be same"
            });
            return;
        }
        setFormError(inputError);
        await axios.post("http://localhost:8080/register", user);
        buttonRef.current.click();

    }
    const { firstName, lastName, email, password } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <section>
                <div class=" d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card my-3">
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                        <form onSubmit={validateFormData}>

                                            <div class="form-group">
                                                <label for="firstName" class="form-label">First Name</label>
                                                <input type="text" class="form-control required" id="firstName" name="firstName" value={firstName} onChange={(e) => { onInputChange(e) }} aria-describedby="firstName" />
                                            </div>
                                            <p className='text-danger'>{formError.firstName}</p>
                                            <div class="form-group">
                                                <label for="lastName" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="lastName" name="lastName" value={lastName} onChange={(e) => { onInputChange(e) }} aria-describedby="lastName" />
                                            </div>
                                            <p className='text-danger'>{formError.lastName}</p>
                                            <div class="form-group">
                                                <label for="email">Email address</label>
                                                <input type="email" class="form-control" id="email" name="email" value={email} onChange={(e) => { onInputChange(e) }} aria-describedby="email" />
                                            </div>
                                            <p className='text-danger'>{formError.email}</p>
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <input type="password" class="form-control" id="password" value={password} name="password" onChange={(e) => { onInputChange(e) }} />
                                            </div>
                                            <p className='text-danger'>{formError.password}</p>
                                            <div class="form-group">
                                                <label for="confirmPassword">Confirm Password</label>
                                                <input type="password" class="form-control" id="confirmPassword" value={conPassword.confirmPassword} onChange={(e) => { setConfirmPassword({ confirmPassword: e.target.value }) }} name="confirmPassword" />
                                            </div>
                                            <p className='text-danger'>{formError.confirmPassword}</p>
                                            <div class="form-group mt-3">
                                                <button type="submit"
                                                    class="btn btn-success btn-block" value="Submit">Register</button>
                                            </div>
                                            <p class="text-center text-muted mt-3 mb-0">Have already an account?
                                                <Link to="/login"><u>Login here</u></Link></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <button type="button" ref={buttonRef} class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Launch demo modal
            </button>

           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">User Verification</h5>
                        </div>
                        <div class="modal-body">
                            Mail Sent successfully for Verification of User
                        </div>
                        <div class="modal-footer justify-content-center align-items-center">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={navigatehome}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup