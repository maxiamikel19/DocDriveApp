import API from "./api";

export const getFolders = () => API.get("/api/v1/folders");
export const createFolder = (formData) => API.post("/api/v1/folders", formData);
export const updateFolder = (id, formData) =>
  API.put(`/api/v1/folders/${id}`, formData);
export const deleteFolder = (id) => API.delete(`/api/v1/folders/${id}`);
