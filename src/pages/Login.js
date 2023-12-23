import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        oldPassword: ""
    })
    const [formError, setFormError] = useState({
        email: "",
        oldPassword: "",
        errMessage:""
    })
    var result="";
    const { email, oldPassword } = user;
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const validateFormData = async (e) => {
        e.preventDefault();
        let inputError = {
            email: "",
            oldPassword: "",
            errMessage:""
        }
        if (!email) {
            setFormError({
                ...inputError,
                email: "Enter a valid Email Address"
            });
            return;
        }
        if (!oldPassword) {
            setFormError({
                ...inputError,
                oldPassword: "password should not be empty"
            });
            return;
        }
        await axios.post("http://localhost:8080/loginuser",user).then(function (response) {
            result = response.data;});
            if(result==="invalidEmail"){
                setFormError({
                    ...inputError,
                    errMessage: "Invalid Email"
                });
                return;
            }
            if(result==="InvalidPassword"){
                setFormError({
                    ...inputError,
                    errMessage: "Password is incorrect"
                });
                return;
            }
            if(result==="valid"){
                navigate("/");
                return;
            }
            setFormError(inputError);
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card my-3">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login to the Account</h2>

                                <form onSubmit={validateFormData}>

                                    <div className="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => { onInputChange(e) }} aria-describedby="email" />
                                    </div>
                                    <p className='text-danger'>{formError.email}</p>
                                    <div class="form-group">
                                        <label for="oldPassword">Password</label>
                                        <input type="password" className="form-control" id="oldPassword" value={oldPassword} name="oldPassword" onChange={(e) => { onInputChange(e) }} required />
                                    </div>
                                    <div className="form-group">
                                        <p>{result}</p>
                                        
                                    </div>
                                    <p className='text-danger'>{formError.oldPassword}</p>
                                    <p className='text-danger'>{formError.errMessage}</p>
                                    <p className="text-center text-muted mt-3 mb-0">Forgot password&nbsp;
                                        <Link to="/forgotpassword"><u>Click here</u></Link></p>

                                    <div className="form-group mt-2 d-flex align-items-between justify-content-between">
                                        <button type="submit"
                                            className="btn btn-primary">Login</button>
                                        <Link type="button"
                                            className="btn btn-danger" to="/">Cancel</Link>
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
export default Login;
