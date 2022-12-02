import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div
        className="flex flex-column w-full border border-dashed h-screen"
      >
        <div className="h-20 p-4 flex items-center justify-between header-comp">
          <span>Search</span>
          <div className="flex items-center">
            <span>Alert Icon | </span>
            <span>| Profile Menu</span>
          </div>
        </div>
        <div className="flex flex-column p-4 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
