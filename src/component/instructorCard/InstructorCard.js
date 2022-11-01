import React from 'react';
import './InstructorCard.css'

const InstructorCard = ({instructorInfo}) => {
   let {instructorPhoto, instructor,  courseName,} = instructorInfo;

  return (
   
    <div className="col">
     <div className="card">
       <img src={instructorPhoto} className="card-img-top instructorDp" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{instructor}</h5>
          <p className="card-text">{courseName}</p>
          <p className=''><i className="fa-solid fa-user-group fa-solid1 me-2"></i> 50 Students</p>
        </div>
    </div>
  </div>
  
  
  );
};

export default InstructorCard;