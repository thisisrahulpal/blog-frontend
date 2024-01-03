import React, { useState } from "react";
import Feed from "../Components/Feed/Feed";
import Menu from "../Components/Feed/Menu";
import Sidebar from "../Components/Sidebar/Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Feed toggleSidebar={toggleSidebar} />
      <Menu />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Home;
