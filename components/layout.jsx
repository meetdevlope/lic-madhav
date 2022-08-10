import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
<<<<<<< Updated upstream
    <div className="pt-7" >
=======
    <div className="pt-7">
>>>>>>> Stashed changes
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
