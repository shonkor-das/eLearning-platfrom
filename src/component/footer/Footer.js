import React from 'react';
import './Footer.css';

const Footer = () => {
  
  return (
    <div className='bg-light'>
      <div className='container py-5'>
        <div className='row'>

          <div className='col-12 col-lg-4 '>
            <img src='Jhttps://dreamslms.dreamguystech.com/html/assets/img/logo.svg' alt="" className='w-50' />
            <p className='pt-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum facere voluptatibus nobis voluptatum nisi eos, officia blanditiis commodi quo cum dolorum nam quasi quis repudiandae. Assumenda veniam vitae facere.</p>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Instructor</h4>
            <ul className='footerList'>
              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              <li>Instructor</li>
            </ul>
          </div>

          <div className='col-6 col-lg-2 footerHeaders'>
            <h4>For Student</h4>
            <ul className='footerList'>
              <li>Profile</li>
              <li>Login</li>
              <li>Register</li>
              <li>Instructor</li>
            </ul>
          </div>

          <div className='col-12 col-lg-4 footerHeaders'>
            <h4>News Letter</h4>

            <div className='footerContacts'>
              <p className='text-success'><i className="fa-solid fa-location-dot"></i></p>
              <h6 className='text-wrap '>3556 Beech Street, San Francisco,
                California, CA 94108
              </h6>
            </div>

            <div className='footerContacts'>
              <p className='text-warning'><i className="fa-solid fa-envelope"></i></p>
              <h6> dreamslms@example.com</h6>
            </div>

            <div className='footerContacts'>
              <p className='text-info'><i className="fa-solid fa-phone"></i></p>
              <h6> +88 01234293874</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;