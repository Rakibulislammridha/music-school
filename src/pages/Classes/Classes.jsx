import React, { useEffect, useState } from "react";
import { getAllClasses } from "../../api/subjects";
import SingleClass from "./SingleClass";
import Loader from "../Shared/Loader/Loader";
import Title from "../../components/Title/Title";

const Classes = () => {
  const [subjects, setSubjects] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllClasses().then((data) => {
      const approvedClasses = data.filter(
        (approved) => approved.status === "approved"
      );
      setSubjects(approvedClasses);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Title subHeading={"Our Classes"} heading={"Best Music School"}></Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subjects.map((singleSubject) => (
          <>
          
            <SingleClass
              key={singleSubject._id}
              singleSubject={singleSubject}
            ></SingleClass>

            {console.log(singleSubject)}
          </>
        ))}
      </div>
    </>
  );
};

export default Classes;
