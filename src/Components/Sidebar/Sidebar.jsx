// Sidebar.js
import React, { useState } from "react";

const Sidebar =  ({ isOpen, toggleSidebar })  => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
    <div className="flex items-center justify-between p-4">
      <button onClick={toggleSidebar} className="text-white focus:outline-none">
        <svg
          className="h-6 w-6"
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
    <nav className="flex flex-col p-4">
      <a href="#" className="text-white py-2 hover:underline">Dashboard</a>
      <a href="#" className="text-white py-2 hover:underline">Inbox</a>
      <a href="#" className="text-white py-2 hover:underline">Users</a>
      <a href="#" className="text-white py-2 hover:underline">Products</a>
      <a href="#" className="text-white py-2 hover:underline">Signin</a>
      <div className="py-2"><button>Sign out</button></div>
     
    </nav>
  </div>
  );
};

export default Sidebar;
