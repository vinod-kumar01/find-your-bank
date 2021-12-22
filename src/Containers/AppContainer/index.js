import { Outlet } from "react-router-dom";
import Header from "../../Components/AppHeader";
import SideNavBar from "../../Components/SideNavBar";
import "./index.css";

const AppContainer = () => {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div style={{ display: "flex" }}>
        <div className="side-nav-bar">
          <SideNavBar />
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
