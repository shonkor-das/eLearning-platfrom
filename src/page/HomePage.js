import React from "react";
import HomeBanner from "../component/homeBanner/HomeBanner";
import FaqSection from "../component/faq/FaqSection";
import MentorPage from "./MentorPage";
import Instructors from "../component/instructors/Instructors";
import Courses from "../component/courses/Courses";
import CoursesTitle from "../component/coursesTitle/CoursesTitle";
import InstructorFeatured from "../component/instructorFeatured/InstructorFeatured";
import BloHeading from "../component/blogHeading/BloHeading";
import BlogCard from "../component/blogCard.js/BlogCard";
import Footer from "../component/footer/Footer";


const HomePage = () => {
  return (
    <div>
      <div className="homeBg">
        <HomeBanner></HomeBanner>
      </div>
      <MentorPage></MentorPage>

      <div className="homeBg">
        <CoursesTitle></CoursesTitle>
        <Courses len={3}></Courses>
      </div>

      <div className="">
        <BloHeading></BloHeading>
       <BlogCard len={3}></BlogCard>
      </div>

      <div className="homeBg">
        <InstructorFeatured></InstructorFeatured>
        <Instructors len={3}></Instructors>
      </div>

      <FaqSection></FaqSection>

      <Footer></Footer>

    </div>
  );
};

export default HomePage;
