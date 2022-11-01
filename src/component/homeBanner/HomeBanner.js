import React from 'react';
import "./HomeBanner.css";
import bannerImage from '../../resource/banner.png';

const HomeBanner = () => {
  return (
    <div className='container py-2 py-lg-1'>
      <div className='row align-items-center justify-content-center'>

        <div className='col-12 col-lg-6 order-2 order-lg-1'>
          <p className='headerTag d-none d-lg-block'>The Leader in Online Learning</p>
          <h2 className='headingTitle h1 text'>Engaging & Accessible Online Courses For All</h2>
          <p className='headerTag'>Own your future learning new skills online</p>
        </div>

        <div className='col-12 col-lg-6 order-1 order-lg-2'>
        <p className='headerTag d-block d-lg-none'>The Leader in Online Learning</p>
          <img src={bannerImage} alt="bannerImage" className='img-fluid ZoomIn' />
        </div>

      </div>
    </div>
  );
};

export default HomeBanner;