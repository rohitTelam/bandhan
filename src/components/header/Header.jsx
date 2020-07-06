import React from 'react';
import Logo from '../../images/logo.jpeg';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <div className='container-fluid myheader'>
        <div className='row'>
            <div className='col-lg-3'>
                <img src={Logo} alt='Logo' className='rounded-circle logo' />
            </div>
            <div className='col-lg-9 topmenu'>
                <ul class="nav float-right mr-5">
                    <li class="nav-item">
                    <Link to="/" class="nav-link" href="#">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/About" class="nav-link" href="#">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Services" class="nav-link" href="#">Services</Link>
                    </li>
                    <li class="nav-item" >
                         <Link to="/Registration" class="nav-link" href="#">Registration</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Login" class="nav-link" href="#">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;
