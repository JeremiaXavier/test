import { useNavigate, useLocation } from "react-router-dom";

const buses = [
  { id:1, name:"KSRTC", time:"10:00 AM", seats:20, price:500 },
  { id:2, name:"Volvo", time:"6:00 PM", seats:15, price:800 }
];

export default function BusList() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <>
      <h2>Available Buses</h2>
      {buses.map(bus => (
        <div key={bus.id}>
          <p>{bus.name} | {bus.time} | ₹{bus.price}</p>
          <button onClick={()=>navigate("/booking",{state:{bus,date:state.date}})}>
            Book
          </button>
        </div>
      ))}
    </>
  );
}
