import React from 'react';
import useCourseList from '../../hooks/useCourseList';
import InstructorCard from '../instructorCard/InstructorCard';
import Loading from '../shared/loading/Loading';

const Instructors = ({ len }) => {
  const [courseList, loading] = useCourseList();
  if (loading) {
    return <Loading></Loading>;
  }
  let length = 0;
  !len ? length = courseList.length : length = len;
  return (
    <div className='container mb-4 py-5'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-4">
        {
          courseList.slice(0, length).map((instructor, index) => <InstructorCard instructorInfo={instructor} key={index}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;