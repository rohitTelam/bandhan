import React from 'react';
import Profile from '../../images/profile.png';

function Details() {
  return (
    <>
     <div className='row bg-info list_details mt-2 mb-1'>

            <div className="col-lg-2 myprofilearea">
                <img src={Profile} alt="profile" className="rounded-circle myprofile" />
            </div>
        <div className='col-lg-7 text-light  bg-danger'>
            <p>Name : Amit</p>
            <p>Father Name : Harion</p>
            <p>Age : 25</p>
            <p>Hobbies : Codeing</p>
        </div>
        <div className='col-lg-3  bg-dark'>
            <button className='btn btn-success mt-5'>Send Message</button>
        </div>
     </div>
    </>
  );
}

export default Details;
