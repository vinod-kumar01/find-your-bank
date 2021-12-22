import { Link } from "react-router-dom";
import "./index.css";

const SideNavBar = () => {
  return (
    <div className="side-bar-elements">
      <Link to="/all-banks">All Banks</Link>
      <Link to="/favorites">Favorities</Link>
    </div>
  );
};

export default SideNavBar;
