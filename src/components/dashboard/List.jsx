import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Details from '../dashboard/Details';
import Profile from '../../images/profile.png';
import Logo from '../../images/logo.jpeg';
import { Link } from 'react-router-dom';
import List_details from '../dashboard/List_details';

function List() {
  return (
    <>

       <div className='container-fluid myprofilemain'>
        
             <div className='row'>
                <div className="col-lg-2 myprofilearea"><img src={Profile} className="rounded-circle myprofile" />
               
                </div>
                <div className="col-lg-8">

                </div>
                <div className="col-lg-2 mylogout">
                <div className='col-lg-9 topmenu'>
                  <ul class="nav float-right mr-5">
                      <li class="nav-item">
                      <Link to="/" class="nav-link btn btn-danger" href="#">Logout</Link>
                      </li>
                  </ul>
                </div>
                </div>
              </div>
              <div className='row'>
              <div className='col-lg-2 bg-info'>
                <nav class="navbar">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Search</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Chat</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Interested Matches</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Viewed</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-lg-10 alert-info'>
                   <List_details/>
                   <List_details/>
                   <List_details/>
                   <List_details/>
                </div>
            </div>
            
        </div>
        <Footer />
    </>
  );
}

export default List;
