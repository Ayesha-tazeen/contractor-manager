import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/client"
});

API.interceptors.request.use(req=>{
  const user = JSON.parse(localStorage.getItem("user"));
  if(user?.token){
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export const getDashboard = ()=> API.get("/dashboard");
export const createProject = (data)=> API.post("/create-project", data);
export const getReport = ()=> API.get("/monthly-report");