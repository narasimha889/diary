import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Forgotpassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState({
        email: ""
    });
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState('');
    const [formError, setFormError] = useState({
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
        errMessage: ""
    })
    var result = "";
    const onInputChange = (e) => {
        setEmail({ email: e.target.value })
    }
    const onSendOtp = (e) => {
        setOtp(e.target.value)
    }
    var inputError = {
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
        errMessage: ""
    }
    const validateFormData = async (e) => {
        e.preventDefault();
        if (!email.email) {
            setFormError({
                ...inputError,
                email: "Enter a Email Address"
            });
            return;
        }
        await axios.post("http://localhost:8080/resetPassword", email).then(function (response) {
            result = response.data;
        });
        console.log(result);
        if (result === "invalidEmail") {
            setFormError({
                ...inputError,
                errMessage: "Invalid Email credentials"
            });
            return;
        }
    }
    const [passwordDetails, setPasswordDetails] = useState({
        password: "",
        confirmPassword: ""
    })
    const validateOTp = async (e) => {
        e.preventDefault();
        if (!otp) {
            setFormError({
                ...inputError,
                otp: "Please Enter Otp"
            });
            return;
        }
        console.log("result:", result);
        if (result === otp) {
            setFormError({
                ...inputError,
                errMessage: "Otp verified Successfully"
            });
            setShow(true);
        }
        setFormError(inputError);
    }
    const onInputPassword = (e) => {
        setPasswordDetails({ ...passwordDetails, [e.target.name]: e.target.value })
    }
    const validatePassword = async (e) => {
        e.preventDefault();
        if (!passwordDetails.password) {
            setFormError({
                ...inputError,
                password: "Please Enter Password"
            });
            return;
        }
        if (!passwordDetails.confirmPassword) {
            setFormError({
                ...inputError,
                confirmPassword: "Please Enter Password"
            });
            return;
        }
        if (passwordDetails.password !== passwordDetails.confirmPassword) {
            setFormError({
                ...inputError,
                errMessage: "Password and Confirm Password is not Matching"
            });
            return;
        }
        const savePasswordDetails = {
            token: result,
            newPassword: passwordDetails.password
        }
        await axios.post("http://localhost:8080/savePassword", savePasswordDetails).then(function (response) {
            console.log(response.data);
        });
        setFormError(inputError);
        navigate("/login");
    }
    return (
        <div>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card my-3">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Reset Password</h2>

                                {show ? null : <form onSubmit={validateOTp}>
                                    <div className='emailData'>
                                        <div class="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" class="form-control" id="email" name="email" value={email.email} onChange={(e) => { onInputChange(e) }} aria-describedby="email" />
                                        </div>
                                        <p className='text-danger'>{formError.email}</p>
                                        <div className='row align-items-center justify-content-center'>
                                            <div class="col">
                                                <label for="otp">OTP</label>
                                                <input type="text" class="form-control" id="otp" name="otp" value={otp} onChange={(e) => { onSendOtp(e) }} />
                                            </div>
                                            <div class="col">
                                                <button type="button"
                                                    class="btn btn-primary" onClick={(e) => { validateFormData(e) }}>SEND</button>
                                            </div>
                                        </div>

                                        <p className='text-danger'>{formError.otp}</p>
                                        <p className='text-danger'>{formError.errMessage}</p>
                                        <div class="form-group mt-2 d-flex align-items-between justify-content-between">
                                            <button type="submit"
                                                class="btn btn-primary">Submit</button>
                                            <Link type="button"
                                                class="btn btn-danger" to="/login">Cancel</Link>
                                        </div>
                                    </div>
                                </form>}
                                {show ? <form>
                                     <div className='passwordData'>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" name="password" value={passwordDetails.password} onChange={(e) => { onInputPassword(e) }} />
                                        </div>
                                        <p className='text-danger'>{formError.password}</p>
                                        <div class="form-group">
                                            <label for="confirmPassword">Confirm Password</label>
                                            <input type="password" class="form-control" id="confirmPassword" name='confirmPassword' value={passwordDetails.confirmPassword} onChange={(e) => { onInputPassword(e) }} />
                                        </div>
                                        <p className='text-danger'>{formError.confirmPassword}</p>
                                        <p className='text-danger'>{formError.errMessage}</p>
                                        <div class="form-group mt-2 d-flex align-items-between justify-content-between">
                                            <button type="submit"
                                                class="btn btn-primary" onSubmit={validatePassword}>Submit</button>
                                            <Link type="button"
                                                class="btn btn-danger" to="/login">Cancel</Link>
                                        </div>
                                    </div> 
                                </form>: null}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Forgotpassword