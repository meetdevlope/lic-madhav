import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="pt-7">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
