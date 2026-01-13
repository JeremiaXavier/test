import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Bus Booking</h3>
      <div>
        <Link to="/">Search</Link>
        <Link to="/buses">Buses</Link>
      </div>
    </nav>
  );
}
