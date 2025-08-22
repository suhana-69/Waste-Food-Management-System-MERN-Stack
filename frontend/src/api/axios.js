import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend base URL
});

// Optional: Attach token automatically if stored in localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
