import React from "react";
import DP from "../../assets/faces/user-dp.jpeg";
import Tweet from "./Tweet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="border-b mt-1 border-gray-700/75">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between  px-4">
              {/* Your navigation content goes here */}
              <div className="w-9 h-9">
                <img className="w-8 h-8 rounded-full" src={DP} alt="" />
              </div>
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
                <div className="w-full mx-auto h-1 rounded-md opacity-75 bg-sky-400 opacity-80"></div>
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

        {/* Menubar */}
        <div className="flex flex-col  fixed bottom-0 w-full opacity-90">
          <div className="px-7">
            <div className="flex justify-end mb-8">
              {/* New Tweet button */}
              <Link to="/tweet">
                <button className="bg-blue-500 text-white w-14 h-14 rounded-full">
                  <i className="fa-solid fa-plus fa-xl"></i>
                </button>
              </Link>
            </div>
          </div>

          {/* Your bottom bar content goes here */}
          <div className="p-4 bg-black text-white w-full border-t border-gray-700/75">
            <div className="flex justify-around">
              <button>
                <i className="fa-solid fa-house fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-solid fa-magnifying-glass fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-solid fa-bell fa-xl opacity-90"></i>
              </button>
              <button>
                <i className="fa-regular fa-envelope fa-xl opacity-90"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
