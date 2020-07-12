import React from 'react';
import Footer from '../footer/Footer';
import Profile from '../../images/profile.png';
import { Link } from 'react-router-dom';
import List_details from '../dashboard/List_details';

function List() {
  return (
    <>

       <div className='container-fluid myprofilemain'>
        
             <div className='row'>
                <div className="col-lg-2 myprofilearea"><img src={Profile} alt="profile" className="rounded-circle myprofile" />
               
                </div>
                <div className="col-lg-8">

                </div>
                <div className="col-lg-2 mylogout">
                <div className='col-lg-9 topmenu'>
                  <ul className="nav float-right mr-5">
                      <li className="nav-item">
                      <Link to="/" className="nav-link btn btn-danger" href="#">Logout</Link>
                      </li>
                  </ul>
                </div>
                </div>
              </div>
              <div className='row'>
              <div className='col-lg-2 bg-info'>
                <nav className="navbar">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link" href="#">Search</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/#" className="nav-link" href="#">Chat</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/#" className="nav-link" href="#">Interested Matches</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/#" className="nav-link" href="#">Viewed</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-lg-10 alert-info'>
                   <List_details />
                   <List_details />
                   <List_details />
                   <List_details />
                </div>
            </div>
            
        </div>
        <Footer />
    </>
  );
}

export default List;
