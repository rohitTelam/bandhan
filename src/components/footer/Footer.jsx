import React from 'react';

function Footer() {
  return (
    <>
    <div className='container-fluid footer'>
        <div className='row'>
          <div className="col-lg-3">
            <div className="socials">
                <i class="fa fa-facebook fa-1x" aria-hidden="true"></i>
                <i class="fa fa-linkedin  fa-1x" aria-hidden="true"></i>
                <i class="fa fa-youtube-play fa-1x" aria-hidden="true"></i>
                <i class="fa fa-instagram fa-1x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-lg-9 medeby">
              <p className="mr-5">&copy; Right YoreHireness 2020</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default Footer;
