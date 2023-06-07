import React, { useEffect, useState } from "react";
import Title from "../../../components/Title/Title";
import SingleClass from "./SingleClass";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.filter((course) => course.enrolledStudent > 100)
        setClasses(popularClasses);
      });
  }, []);

  return (
    <>
      <section className="my-8">
        <Title subHeading={"Let See Our"} heading={"Popular classes"}></Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((item) => (
          <SingleClass
             key={item._id}
             item={item}
          ></SingleClass>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularClasses;
