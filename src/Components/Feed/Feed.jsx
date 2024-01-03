import React from "react";
import DP from "../../assets/faces/user-dp.jpeg";
import Tweet from "./Tweet";
import { Link } from "react-router-dom";

const Feed = ({ toggleSidebar }) => {
  return (
    <>
      {/* Navbar */}
      <nav className="border-b mt-1 border-gray-700/75">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between  px-4">
            {/* Your navigation content goes here */}
            <button onClick={toggleSidebar} className="w-9 h-9">
              <img className="w-8 h-8 rounded-full" src={DP} alt="" />
            </button>
            <div className="py-4">
              <i className="fa-brands fa-twitter fa-2xl opacity-90"></i>
            </div>
            <div className="">
              <i className="fa-solid fa-gear fa-lg opacity-90"></i>
            </div>
          </div>
          <div className="flex justify-evenly opacity-90">
            <div>
              <p className="p-3 font-bold">For you</p>
              <div className="w-full mx-auto h-1 rounded-md  bg-sky-400 opacity-80"></div>
            </div>
            <div>
              <p className="p-3 font-bold">Following</p>
              {/* <div className="w-full mx-auto h-1 rounded-md opacity-75 bg-sky-400 opacity-80"></div> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Tweets */}
      <Tweet />
    </>
  );
};

export default Feed;
