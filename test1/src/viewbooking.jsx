import { useEffect, useState } from "react";
import axios from "axios";

export default function View() {
  const [list, setList] = useState([]);

  const load = async () => {
    
    const res = await fetch("http://localhost:5000/bookings");
    setList(await res.json());

    
    /*
    const res = await axios.get("http://localhost:5000/bookings");
    setList(res.data);
    */
  };
function deleteBooking(id) {
    axios.delete(`http://localhost:5000/bookings/${id}`).then(() => {
      load();
    });
  }
  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <h2>View Bookings</h2>

      {list.map((b) => (
        <p key={b.id} className="booking-items">
          {b.name} | {b.bus} | {b.seats} | {b.date} 
          <input type="button" value={"x"} onClick={() => deleteBooking(b.id)} />
        </p>
      ))}
    </>
  );
}
