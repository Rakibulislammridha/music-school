import React from "react";
import banner2 from "../../../assets/banner2.jpg";
import banner3 from "../../../assets/banner3.jpg";
import banner4 from "../../../assets/banner4.jpg";
import banner6 from "../../../assets/banner6.jpg";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item w-full relative">
          <img src={banner2} className="w-full" />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-gray-200">
            <h2 className="text-5xl text-center font-bold mt-[220px]">
            Introduction to Music Theory
            </h2>
            <p className="text-xl text-center mt-4 p-4">Embark on a rhythmic adventure and explore the captivating world of music! Discover different beats, rhythms, and musical styles while honing your skills and unleashing your creativity. Join us on this exciting journey and let the magic of music guide your way.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-5xl text-center font-bold mt-[220px]">Vocal Mastery: Discover Your Voice</h2>
            <p className="text-xl text-center mt-4 p-4"> Unleash your inner musician and dive into the world of melodies! From classical compositions to contemporary tunes, this music class will take you on a melodic journey like no other. Learn to play beautiful melodies, compose your own songs, and let the power of music ignite your passion.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner4}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-5xl text-center font-bold mt-[220px]">Songwriting and Composition Lab</h2>
            <p className="text-xl text-center mt-4 p-4">Embark on a musical adventure as you explore a variety of instruments! Discover the unique sounds and techniques of guitars, pianos, drums, and more. Whether you're a beginner or an experienced musician, this class offers the perfect opportunity to expand your repertoire and master the art of playing instruments.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={banner6}
            className="w-full"
          />
          <div className="absolute rounded-xl items-center p-4 top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
            <h2 className="text-5xl text-center font-bold mt-[220px]">Instrumental Explorations</h2>
            <p className="text-xl text-center mt-4 p-4"> Delve into the enchanting world of Guitar and unlock the secrets of musical composition. Learn how to blend different notes, chords, and harmonies to create beautiful and mesmerizing compositions. Develop your ear for Guitar, explore chord progressions, and let your imagination soar as you become a master of musical Guitar.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
