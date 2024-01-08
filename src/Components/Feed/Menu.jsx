import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaRegBell, FaBell, FaRegEnvelope, FaEnvelope } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";

const Menu = () => {
  return (
    <div>
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
        <div className="px-4 py-3 bg-black text-white w-full border-t border-gray-700/75">
          <div className="flex items-center justify-around">
            <Link to="/home/foryou">
              <button>
                <RiHome2Line size={27} />
              </button>
            </Link>
            <Link to='/search/trending'>
            <button>
              <FaMagnifyingGlass size={22} />
              {/* <HiMagnifyingGlass size={28} /> */}
            </button>
            </Link>
            <Link to='/notification'>
            <button>
              <FaRegBell size={25} />
              {/* <FaBell size={25} /> */}
            </button>
            </Link>
            <Link to='/message'>
            <button>
              <FaRegEnvelope size={25} />
              {/* <FaEnvelope size={25} /> */}
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Your bottom bar content goes here */}
    </div>
  );
};

export default Menu;
