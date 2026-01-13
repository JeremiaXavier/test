import { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [bus, setBus] = useState("");
  const [seats, setSeats] = useState(1);
  const [list, setList] = useState([]);

  // ✅ Move load here
  const load = async () => {
    const res = await fetch("http://localhost:5000/bookings");
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    load();
  }, []);

  const book = () =>
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, bus, seats }),
    }).then(load);

  const cancel = (id) =>
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    }).then(load);

  return (
    <>
      <h3>Bus Booking</h3>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Bus" onChange={(e) => setBus(e.target.value)} />
      <input type="number" onChange={(e) => setSeats(e.target.value)} />
      <button onClick={book}>Book</button>

      {list.map((b) => (
        <p key={b.id}>
          {b.name} - {b.bus} - {b.seats}
          <button onClick={() => cancel(b.id)}>X</button>
        </p>
      ))}
    </>
  );
}
