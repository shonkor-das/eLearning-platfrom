import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  console.log()
  const { id, courseImage, courseName, instructor, instructorPhoto, lesson, time, rating } = course;

  const showRating = (rating) => {
    const showRating = [];
    let i = 0;
    for (i = 0; i < parseInt(rating); i++) {
      showRating.push('star')
    }
    return showRating;
  }
  return (
     
    <div className='col'>
      <div className="card card2 shadow radious border-0" >
        <img src={courseImage} className="card-img-top radious card2-img-top" alt="..." />
        <div className="card-body">
          <div className='d-flex align-items-center gap-2'>
            <img src={instructorPhoto} alt="" className='instructorPhoto' />
            <h2 className='instructorTitle cardText cardText2'>{instructor}</h2>
          </div>

          <div className='pt-3'>
            <h2 className='courseTitle cardText cardText2'>{courseName}</h2>

            <div className='d-flex justify-content-between align-items-center gap-2 ps-1'>
              <div className='d-flex justify-content-center  gap-2'>
                <i className="fa-solid fa-book-open pt-1 cardText cardText2"></i>
                <p className='cardText cardText2'>{lesson}+ Lesson</p>
              </div>
              <div className='d-flex justify-content-center  gap-2'>
                <i className="fa-regular fa-clock pt-1 cardText cardText2"></i>
                <p className='cardText cardText2'>{time}</p>
              </div>
            </div>
            <hr className='cardText cardText2' />
            <div className='d-flex align-item-center gap-3'>
              <div>
                {
                  showRating(rating).map((item, index) => <i key={index} className="fa-solid fa-star golden"></i>)
                }
              </div>
              <p className='cardText cardText2'>{rating}</p>
            </div>

            <div>
              <Link to={`/course/${id}`} className="buyButton rounded-pill btn-lg">Buy Now</Link>
            </div>
          </div>
         </div>
       </div>
       </div>
  );
};

export default CourseCard;