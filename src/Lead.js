import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/leads", form);
    alert("Submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <input placeholder="Name" className="input" 
        onChange={e => setForm({...form, name: e.target.value})} />

      <input placeholder="Email" className="input" 
        onChange={e => setForm({...form, email: e.target.value})} />

      <input placeholder="Phone" className="input" 
        onChange={e => setForm({...form, phone: e.target.value})} />

      <textarea placeholder="Message" className="input"
        onChange={e => setForm({...form, message: e.target.value})} />

      <button className="bg-blue-600 text-white px-4 py-2 mt-4">
        Submit
      </button>
    </form>
  );
}