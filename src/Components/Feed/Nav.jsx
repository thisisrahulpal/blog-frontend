import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ toggleSidebar }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <nav className="border-b mt-1 border-gray-700/75">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between  px-4">
          {/* Your navigation content goes here */}
          <button onClick={toggleSidebar} className="w-9 h-9">
            {userInfo.picture ? (
              <img
                className="w-9 h-9 rounded-full"
                src={userInfo.picture}
                alt=""
              />
            ) : (
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-400">
                {userInfo.name.charAt(0)}
              </div>
            )}
          </button>
          <div className="py-4">
            <i className="fa-brands fa-twitter fa-2xl opacity-90"></i>
          </div>
          <div className="">
            <i className="fa-solid fa-gear fa-lg opacity-90"></i>
          </div>
        </div>
        <div className="flex justify-evenly opacity-90 ">
          <NavLink
            to="/home/foryou"
            className={({ isActive }) =>
              `ml-2 px-1 ${isActive ? "border-b-4  border-blue-400" : null}`
            }
          >
            <button className="p-2 font-bold hover:bg-gray-900">For you</button>
          </NavLink>
          <NavLink
            to="/home/following"
            className={({ isActive }) =>
              `ml-2 ${isActive ? "border-b-4  border-blue-400" : null}`
            }
          >
            <button className="p-2 font-bold hover:bg-gray-900">
              Following
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
