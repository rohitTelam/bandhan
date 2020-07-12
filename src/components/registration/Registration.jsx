import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';


function Registration() {
  return (
    <>
    <Header/>
    <div className='container-fluid myregistration'>
             <div className='row justify-content-center align-items-center '>
             <div className='registrationbox'>
             <br/>
             <h3 className="text-center">Registration</h3>
             <hr/>
                <form>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" id="" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <label >House Name</label>
                        <input type="text" className="form-control" id="" placeholder="House Name" />
                    </div>
                    <div className="form-group">
                        <label >Date Of Birth</label>
                        <input type="date" className="form-control" id=""  />
                    </div>
                    <div className="form-group">
                        <label >Gander</label>
                        <select className='form-control'>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control" id="" placeholder="name@example.com" />
                    </div>
            
                    <div className="form-group">
                        <label >Phone</label>
                        <input type="text" className="form-control" id="" placeholder="Phone / Mobile No." />
                    </div>
                    <div className="form-group">
                        <label >Country</label>
                        <select className='form-control'>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <Link to="/Dashboard" className="btn btn-info form-control" href="#">Submit</Link>
                </form>
                <br/>
                <br/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Registration;
