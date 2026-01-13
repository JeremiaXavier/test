import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Book from "./Booking";
import View from "./viewbooking";
import "./App.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link> | <Link to="/book">Book</Link> |{" "}
        <Link to="/view">View</Link>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </div>
    </>
  );
}
