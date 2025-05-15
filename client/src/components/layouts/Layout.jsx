import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = ()=> setIsSidebarOpen(false);

  return (
    <div className="w-full h-screen bg-slate-50 flex">
      
 {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}
      
      <div
        className={`
          fixed top-0 left-0 h-full z-40 bg-white shadow-md lg:shadow-none transition-transform duration-300
          lg:relative lg:translate-x-0 lg:w-1/6 
          w-4/5 sm:w-2/5 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar 
            closeSidebar={closeSidebar}
        />
      </div>

      
      <div className="flex-1 lg:ml-0 ml-0">
        
        <Header 
            SidebarOpen={isSidebarOpen}
            setSidebar={setIsSidebarOpen}
        />
      
      </div>
    </div>
  );
};

export default Layout;
