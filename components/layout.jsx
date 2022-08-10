import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="py-7" >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
