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
                <ul className="nav float-right mr-5">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link" href="#">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-link" href="#">Services</Link>
                    </li>
                    <li className="nav-item" >
                         <Link to="/Registration" className="nav-link" href="#">Registration</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link" href="#">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;
