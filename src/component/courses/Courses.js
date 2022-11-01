import React from 'react';
import useCourseList from '../../hooks/useCourseList';
import CourseCard from '../courseCard/CourseCard';
import Loading from '../shared/loading/Loading';

const Courses = ({ len }) => {

  const [courseList, loading] = useCourseList();
  if (loading) {
    return <Loading></Loading>;
  }
  let length = 0;
  !len ? length = courseList.length : length = len;
  
  return (
    <div className='container py-5'>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

        {
          courseList.slice(0, length).map((course, index) => <CourseCard key={index} course={course} />)
        }

      </div>

    </div>
  );
};

export default Courses;