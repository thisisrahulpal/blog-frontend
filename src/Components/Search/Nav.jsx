import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Nav = ({ toggleSidebar }) => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <nav className="border-b border-gray-700/75">
      <div className="flex flex-col">
        <div className="flex items-center my-1 justify-between py-2 px-4">
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
          <div className="flex justify-around items-center focus:border focus:border-blue-500 rounded-full w-56 h-8 px-2 bg-zinc-800  ">
            <div className=" text-gray-400">
              <HiMiniMagnifyingGlass size={20} />
            </div>
            <input
              className="w-40 ml-4 outline-none bg-zinc-800 text-md"
              placeholder="Search"
              type="text"
            />
            {/* <i className="fa-brands fa-twitter fa-2xl opacity-90"></i> */}
          </div>
          <div className="">
            <i className="fa-solid fa-gear fa-lg opacity-90"></i>
          </div>
        </div>
        <div className="flex justify-evenly opacity-90 text-sm">
          <NavLink
            to="/search/trending"
            className={({ isActive }) => `${ isActive ? 'border-b-4  border-blue-400' : null}`}
          >
            <button className="">
              <div className="p-2 font-bold ">Trending</div>
            </button>
          </NavLink>
          <NavLink
            to="/search/news"
            className={({ isActive }) => `${ isActive ? 'border-b-4  border-blue-400' : null}`}
          >
            <button className="">
              <div className="p-2 font-bold ">News</div>
            </button>
          </NavLink>
          <NavLink
            to="/search/sports"
            className={({ isActive }) => `${ isActive ? 'border-b-4  border-blue-400' : null}`}
          >
            <button className="">
              <div className="p-2 font-bold ">Sports</div>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
