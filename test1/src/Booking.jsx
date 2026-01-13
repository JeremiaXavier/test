import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [seats, setSeats] = useState(1);

  const confirm = async () => {
    const data = {
      name,
      seats,
      bus: state.bus,
      date: state.date,
      total: seats * state.bus.price
    };

    await axios.post("http://localhost:5000/book", data);
    navigate("/confirmation", { state: data });
  };

  return (
    <>
      <h2>Booking</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input type="number" onChange={e=>setSeats(e.target.value)} />
      <button onClick={confirm}>Confirm</button>
    </>
  );
}
