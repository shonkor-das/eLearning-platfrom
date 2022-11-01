import React from 'react';
import blogBanner from '../../resource/share.png' 

const Mantor = () => {
  return (
    <div className='container pt-5'>
      <div className='row align-items-center justify-content-center gy-5 gy-lg-0'>

         <div className='col-12 col-lg-6 col-md-6 order-2 order-lg-1'>
             <img src={blogBanner} alt="" className='img-fluid' />
         </div>

         <div className='col-12 col-lg-6 col-md-6 order-1 order-lg-2'>
           <h1 className='pb-2 fw-bold'>Engaging & Accessible Online  Courses For All</h1>
           <p className='headerTag'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
         </div>

      </div>
    </div>
  );
};

export default Mantor;