import React from "react";
//import "../css/main.css"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopBackground from "./TopBackground";
import CustomFab from "./CustomFab";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const outerTheme = createMuiTheme({
  palette: {
    primary: { main: "#2caeba" },
    secondary: { main: "#2caeba" },
  },
});

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="main-wrapper">
        <TopBackground />
        <div className="container">
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          {children}
          <CustomFab />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
