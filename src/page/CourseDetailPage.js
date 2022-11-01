import React from "react";
import { NavLink, useParams } from "react-router-dom";

import CourseDetail from "../component/courseDetail/CourseDetail";
import Loading from "../component/shared/loading/Loading";
import useCourseList from "../hooks/useCourseList";

const CourseDetailPage = () => {
  
  const { id } = useParams(); 
  const [courseList, loading] = useCourseList(id);
  if(loading){
    return <Loading/>
  }
 
  return (
    <div className="row gx-0">
      <div className="col-0 col-lg-2 sideBar order-2 order-lg-1">
      <div className=" h5 sideLink">
          <NavLink
            to="/course"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-book"></i>
            Course
          </NavLink>
        </div>
        <div className=" h5 sideLink">
          <NavLink
            to="/instructor"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-person-chalkboard"></i>
            Instructors
          </NavLink>
        </div>

        <div className=" h5 sideLink">
          <NavLink
            to="/faq"
            className="nav-link d-flex  align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-circle-question"></i>
            FAQ
          </NavLink>
        </div>

        <div className="h5 sideLink">
          <NavLink
            to="/about"
            className="nav-link d-flex align-items-center gap-2 fw-bold "
            aria-current="page"
          >
            <i className="fa-solid fa-address-card"></i>
            About Us
          </NavLink>
        </div>
      </div>

      <div className="col-12 col-lg-10  order-1 order-lg-2">
        <CourseDetail  course={courseList}></CourseDetail>
      </div>
    </div>
  );
};

export default CourseDetailPage;
