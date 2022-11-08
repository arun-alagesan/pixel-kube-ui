import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div
        className="flex-1 border border-dashed"
      >
        <div className="h-20 p-4 flex items-center justify-between header-comp">
          <span>Search</span>
          <div className="flex items-center">
            <span>Alert Icon | </span>
            <span>| Profile Menu</span>
          </div>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
