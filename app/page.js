import React from "react";
// import LandingPage from "@/pages/LandingPage";
import LandingPage from "../components/LandingPage";

// export const metadata = {
//   // robots: {
//   //   index: true,
//   //   follow: false,
//   // },
//   title: "Rashin Web",
//   description: "Rashin Latifi - Full-Stack Developer | Building Modern Web Experiences",
// };


// const Home = () => {
 
//   return (
//     <>
//         <LandingPage />
//     </>


//   );
// };

// export default React.memo(Home);


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const page = () => {
  return <LandingPage />;
};

export default page;

