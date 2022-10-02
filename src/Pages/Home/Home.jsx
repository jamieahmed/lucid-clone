import React from "react";
import Navbar from "../../Components/Nav/Navbar";
import CarTypes from "../../Components/PageDetails/CarTypes";
import HomeHero from "../../Components/PageDetails/HomeHero";
import Stories from "../../Components/PageDetails/Stories";
import StudiosAndCareers from "../../Components/PageDetails/StudiosAndCareers";
import Subscribe from "../../Components/PageDetails/Subscribe";
import Vision from "../../Components/PageDetails/Vision";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <CarTypes />
      <Vision />
      <Stories />
      <StudiosAndCareers />
      <Subscribe />
    </>
  );
};

export default Home;
