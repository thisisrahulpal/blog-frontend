// Sidebar.js
import React, { useState } from "react";
import DP from "../../assets/faces/user-dp.jpeg";
import { HiOutlineUsers } from "react-icons/hi2";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50  bg-gray-950 text-white/75 ${
        isOpen
          ? "translate-x-0 shadow-[rgba(0,0,15,0.5)_100px_0px_0px_0px]"
          : "-translate-x-full"
      } transition-transform ease-in-out duration-200 `}
    >
      {/* <div className="flex items-center justify-between p-4">
      
    </div> */}
      <nav className="flex flex-col h-screen">
        <div className="flex flex-col p-4">
          <div className="flex w-60 justify-between ">
            <img className="w-10 h-10 rounded-full" src={DP} alt="" />

            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h- w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="font-roboto font-bold mt-1">Username</div>
          <div className="font-roboto text-zinc-500">@username</div>
          <div className="flex space-x-4 mb-5">
            <div className="flex mt-3 text-robboto text-sm">
              <p className="font-bold">527</p>
              <p className="pl-1 text-zinc-500">Following</p>
            </div>
            <div className="flex mt-3 text-robboto text-sm">
              <p className="font-bold">527</p>
              <p className="pl-1 text-zinc-500">Followers</p>
            </div>
          </div>
          <hr className="h-px  border-0 bg-gray-800 " />
        </div>

        <div className="flex flex-col space-y-3">
          <button className="flex space-x-6 items-center py-2 px-4 hover:bg-gray-900 focus:bg-gray-900">
            <i className="fa-regular fa-user fa-xl" />
            <div className=" font-bold text-xl">User</div>
          </button>
          <button className="flex space-x-6 items-center py-2 px-4 hover:bg-gray-900 focus:bg-gray-900">
            <i className="fa-regular fa-bookmark fa-xl" />
            <div className=" font-bold text-xl">Bookmark</div>
          </button>
          <button className="flex space-x-3 items-center py-2 px-4 hover:bg-gray-900 focus:bg-gray-900">
            <HiOutlineUsers size={30} />
            <div className=" font-bold text-xl">Communities</div>
          </button>
        </div>

        <div className="fixed w-full bottom-0 p-4">
          <hr className="h-px border-0 bg-gray-800 " />
          <button className="flex w-full space-x-5 items-center py-2 px-4 mt-1 hover:bg-gray-900 focus:bg-gray-900">
            <i class="fa-solid fa-right-from-bracket fa-xl"></i>
            <div className=" font-bold text-xl">Log out</div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
