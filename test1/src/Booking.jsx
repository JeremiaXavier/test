import { useState } from "react";
// import axios from "axios";

export default function Book() {
  const [name, setName] = useState("");
  const [bus, setBus] = useState("");
  const [seats, setSeats] = useState(1);
  const [ac, setAc] = useState(false);
  const [date, setDate] = useState("");

  const submit = async () => {
    await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, bus, seats, ac, date }),
    });

    /*
    await axios.post("http://localhost:5000/bookings", {
      name, bus, seats, ac, date
    });
    */

    alert("Booking Successful");
  };

  return (
    <>
      <h2>Book Ticket</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setBus(e.target.value)}>
        <option value="">Select Bus</option>
        <option>KSRTC</option>
        <option>Volvo</option>
      </select>

      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          onChange={(e) => setAc(e.target.checked)}
        />
        AC
      </label>

      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={submit}>Book</button>
    </>
  );
}
