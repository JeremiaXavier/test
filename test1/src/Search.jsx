import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ source:"", destination:"", date:"" });

  const search = () => navigate("/buses", { state: form });

  return (
    <>
      <h2>Search Buses</h2>
      <input placeholder="Source" onChange={e=>setForm({...form,source:e.target.value})}/>
      <input placeholder="Destination" onChange={e=>setForm({...form,destination:e.target.value})}/>
      <input type="date" onChange={e=>setForm({...form,date:e.target.value})}/>
      <button onClick={search}>Search</button>
    </>
  );
}
