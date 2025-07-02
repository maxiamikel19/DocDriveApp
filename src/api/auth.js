import API from "./api";

export const login = (formData) => API.post("/api/v1/auth/login", formData);
export const register = (formData) =>
  API.post("/api/v1/auth/register", formData);
