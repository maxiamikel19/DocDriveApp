import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const login = (formData) => API.post("/api/v1/auth/login", formData);
export const register = (formData) =>
  API.post("/api/v1/auth/register", formData);
