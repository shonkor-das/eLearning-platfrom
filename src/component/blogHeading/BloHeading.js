import React from 'react';
import { Link } from 'react-router-dom';

const BloHeading = () => {
  
    return (
        <div className="container d-flex pt-5">
        <div className="row align-items-center ">
          <div className="col-12 col-lg-8">
            <h1 className="text-bold">Latest Blogs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
              accumsan bibendum gravida maecenas augue elementum et neque.
              Suspendisse imperdiet.
            </p>
          </div>
          <div className="col-12 col-lg-4  d-flex justify-content-start justify-content-lg-end align-items-center">
            <Link
              to="/blogs"
              className="signUpButton rounded-pill decorationNone"
            >
              All Blogs
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BloHeading;