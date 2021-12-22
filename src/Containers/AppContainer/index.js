import { Outlet } from "react-router-dom";
import Header from "../../Components/AppHeader";
import SideNavBar from "../../Components/SideNavBar";

const AppContainer = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-side-nav-bar">
        <SideNavBar />
      </div>
      <div className="app-main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AppContainer;
