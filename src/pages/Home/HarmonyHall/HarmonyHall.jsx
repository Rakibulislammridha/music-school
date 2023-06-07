import React from "react";
import harmonyHall from "../../../assets/harmonyHall.jpg"
import {FaEdit} from "react-icons/fa"
import Button from "../../../components/Buttons/Button";
import Title from "../../../components/Title/Title";

const HarmonyHall = () => {
  return (
    <div>
        <Title
          subHeading={"welcome To"}
          heading={"Harmony Hall"}
        ></Title>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={harmonyHall}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Harmony Hall: <span className="text-orange-600">Where Music Comes to Life!</span></h1>
            <p className="py-6">
            At Harmony Hall, we believe that music has the power to breathe life into our souls and ignite our passions. Our music school is a vibrant and nurturing community where students of all ages and skill levels can come together to explore the world of music, discover their unique voices, and unleash their creative potential.
            </p>
            <div className="w-3/12">
            <Button
            icon={FaEdit}
             label={"Enrol Now"}
            >
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarmonyHall;
