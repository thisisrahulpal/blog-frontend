import React, { useState } from "react";
import Feed from "../Components/Feed/Feed";
import Menu from "../Components/Feed/Menu";
import Sidebar from "../Components/Sidebar/Sidebar";
import Nav from "../Components/Feed/Nav";
import { Outlet } from "react-router-dom"

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Nav toggleSidebar={toggleSidebar} />
      <Outlet />
      <Menu />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Home;
