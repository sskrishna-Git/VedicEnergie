import React from 'react'
import logo from '../image/vedicLogo.jpg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="bg">
        <nav class="navbar  navbar-expand-lg custom-bg text-color">
        <div class="container-fluid text-color">
          
          <Link to='/'><img
            src={logo}
            width="55"
            height="55"
            class="d-inline-block align-top"
            alt=""
          /> </Link>
        <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about" class="nav-link active" aria-current="page">
                  <b className="text-color">About Us</b>
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/contact" class="nav-link active" aria-current="page">
                  <b className="text-color">Contact Us</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/services" class="nav-link active" aria-current="page">
                  <b className="text-color">Services</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/blog" class="nav-link active" aria-current="page">
                  <b className="text-color">Blog </b>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/getaquote" class="nav-link active" aria-current="page">
                <button type="button" class="btn btn-success">Get a quote</button>
                </Link>
              </li>

            </ul>
        </div>
        
            
          
        </div>
      </nav>

      
    </div>
  )
}

export default Nav