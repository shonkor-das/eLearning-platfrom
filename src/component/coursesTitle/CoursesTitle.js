import React from "react";
import './CourseTitle.css'
import { Link } from "react-router-dom";

const CoursesTitle = () => {
  
  return (
    <div className="container d-flex pt-5">
      <div className="row align-items-center ">
        <div className="col-12 col-lg-8">
          <h4  className="info">What's New</h4>
          <h1 className="text-bold">Featured Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet.
          </p>
        </div>
        <div className="col-12 col-lg-4  d-flex justify-content-start justify-content-lg-end align-items-center">
          <Link
            to="/course"
            className="signUpButton rounded-pill decorationNone"
          >
            All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesTitle;
