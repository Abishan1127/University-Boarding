import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
        <li><Link to="/register" className="nav-item">Register</Link></li>
        <li><Link to="/login" className="nav-item">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
