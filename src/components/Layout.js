import React from "react";
//import "../css/main.css"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopBackground from "./TopBackground";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="main-wrapper">
        <TopBackground />
        <div className="container">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
