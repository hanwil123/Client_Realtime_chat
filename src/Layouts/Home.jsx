import React from "react";
import Navbar from "../Components/Navbars/Navbar";
import Results from "./Results";
import Navbars from "../Components/Navbars/Navbars";
import Directory from "./Directory";
import Chat from "./Chat";

const Home = () => {
  return (
    <>
      <div className=" flex flex-row xl:w-full max-h-full">
        <div className=" flex-col">
          <Navbars />
        </div>
        <div className=" flex flex-col">
          <Results />
        </div>
        <div className=" flex flex-col bg-red-700">
          <Chat/>
        </div>
        <div>
          <Directory/>
        </div>
      </div>
    </>
  );
};

export default Home;
