import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {

    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Diary</a>
                    <Link className='btn btn-outline-light' to="/">Home</Link>
                    <Link className="btn btn-outline-light" to="/data">Data</Link>
                    <div class="nav-item dropdown dropstart">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dp
                        </a>
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to="/signup">Signup</Link></li>
                            <li><Link class="dropdown-item" to="/profile">profile</Link></li>
                            <li><Link class="dropdown-item" to="/login">logout</Link></li>
                        </ul>
                    </div>
                    </div>
            </nav>
  </div>

    )
}

export default Navbar