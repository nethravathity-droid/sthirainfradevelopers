import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/projects")
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div className="p-8 grid md:grid-cols-3 gap-6">
      {projects.map(p => (
        <div key={p.id} className="shadow-lg rounded-xl overflow-hidden">
          <img src={p.image} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p>{p.location}</p>
            <p className="text-blue-600 font-semibold">{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}