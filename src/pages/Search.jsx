import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Nav from "../Components/Search/Nav";
import { Outlet } from "react-router-dom";

const Search = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Nav className="fixed w-full top-0 z-50" toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Outlet />
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Search;
