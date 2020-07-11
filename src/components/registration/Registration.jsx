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
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" class="form-control" id="" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <label for="">House Name</label>
                        <input type="text" class="form-control" id="" placeholder="House Name" />
                    </div>
                    <div class="form-group">
                        <label for="">Date Of Birth</label>
                        <input type="date" class="form-control" id=""  />
                    </div>
                    <div class="form-group">
                        <label for="">Gander</label>
                        <select className='form-control'>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">Email address</label>
                        <input type="email" class="form-control" id="" placeholder="name@example.com" />
                    </div>
            
                    <div class="form-group">
                        <label for="">Phone</label>
                        <input type="text" class="form-control" id="" placeholder="Phone / Mobile No." />
                    </div>
                    <div class="form-group">
                        <label for="">Country</label>
                        <select className='form-control'>
                            <option value="India" selected>India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <Link to="/Dashboard" class="btn btn-info form-control" href="#">Submit</Link>
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
