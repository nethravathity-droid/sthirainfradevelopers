import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getProjects = () => API.get("/projects");
export const sendLead = (data) => API.post("/leads", data);