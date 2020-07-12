import React from 'react';
import Footer from '../footer/Footer';
import Details from '../dashboard/Details';
import Profile from '../../images/profile.png';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>

       <div className='container-fluid myprofilemain'>
        
             <div className='row'>
                <div className="col-lg-2 myprofilearea"><img src={Profile} alt="profile" className="rounded-circle myprofile" />
               
                </div>
                <div className="col-lg-8">
                  <h2 className='mt-5 ml-5'>Dashboard</h2>
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
                        <Link to="/List" class="nav-link" href="#">Search</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/#" class="nav-link" href="#">Chat</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/#" class="nav-link" href="#">Interested Matches</Link>
                      </li>
                      <li class="nav-item">
                        <Link to="/#" class="nav-link" href="#">Viewed</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-lg-10 alert-info'>
                   <Details/>
                   <Details/>
                   <Details/>
                   <Details/>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-2 bg-info'>

                </div>
                <div className='col-lg-10 alert-info'>
                <div className='rec'>
                  <p className>Recommendation</p>
                </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Dashboard;
