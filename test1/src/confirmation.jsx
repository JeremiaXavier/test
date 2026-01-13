import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();

  return (
    <>
      <h2>Booking Confirmation</h2>
      <p>Name: {state.name}</p>
      <p>Bus: {state.bus.name}</p>
      <p>Seats: {state.seats}</p>
      <p>Date: {state.date}</p>
      <p>Total: ₹{state.total}</p>
    </>
  );
}
