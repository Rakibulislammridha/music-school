import React, { useEffect, useState } from 'react';
import Title from '../../../components/Title/Title';
import SingleInstructor from './SingleInstructor';

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/classes`)
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.filter((instructor) => instructor.enrolledStudent > 100)
        setInstructors(popularInstructors);
        console.log(popularInstructors);
      });
  }, []);

    return (
        <section className='my-8'>
            <Title
             subHeading={"See Our"}
             heading={"Popular Instructors"}
            ></Title>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                instructors.map(singleInstructor => <SingleInstructor
                  key={singleInstructor._id}
                  singleInstructor={singleInstructor}
                ></SingleInstructor>)
            }
            </div>
        </section>
    );
};

export default PopularInstructors;