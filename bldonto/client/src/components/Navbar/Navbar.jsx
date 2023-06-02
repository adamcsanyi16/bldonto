import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/manchestercity">Manchester City</Link>
      <Link to="/intermilan">Inter Milan</Link>
    </div>
  );
};

export default Navbar;
