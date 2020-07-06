import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <>
    <Header/>
       <div className='container-fluid mylogin'>
             <div className='row justify-content-center align-items-center '>
             <div className='loginbox mt-5'>
             <br />
             <h3 className="text-center">Login</h3>
             <hr/>
                <form action='dashboard' method="post">
                    <div class="form-group">
                        <label for="">Email address</label>
                        <input type="email" class="form-control" id="" placeholder="name@example.com" />
                    </div>
            
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" class="form-control" id="" placeholder="Password" />
                    </div>
                    <a href="#" className="text-danger float-right">Forgot password</a><br/>
                    <Link to="/Dashboard" class="btn btn-info" href="#">Login
                    </Link>
                </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default Login;
