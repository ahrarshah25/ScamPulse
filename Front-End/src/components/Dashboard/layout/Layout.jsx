import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen">

      <Sidebar />

      <div className="">
        <Header />
      </div>


        <div className="p-8 ml-64">
          {children}
        </div>

    </div>
  );
};

export default Layout;