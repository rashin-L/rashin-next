import React from "react";
import LandingPage from "@/pages/LandingPage";

export const metadata = {
  // robots: {
  //   index: true,
  //   follow: false,
  // },
  title: "Rashin Web",
  description: "Rashin Latifi - Full-Stack Developer | Building Modern Web Experiences",
};


const Home = () => {
 
  return (
    <>
        <LandingPage />
    </>


  );
};

export default React.memo(Home);
