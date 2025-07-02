import React, { useEffect, useState } from "react";
import FolderList from "../components/FolderList";
import { createFolder, getFolders } from "../api/folder";

const Home = () => {
  const [folders, setFolders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    folderParentId: "",
  });

  const load = () => getFolders().then((res) => setFolders(res.data));

  useEffect(() => {
    load();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();
    createFolder(formData).then(() => {
      load();
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Management section</h1>
      <form onSubmit={handleCreate} className="space-y-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Folder name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 p-2 rounded"
          />

          <select
            name="folderParentId"
            id="folderParentId"
            onChange={(e) =>
              setFormData({ ...formData, folderParentId: e.target.value })
            }
          >
            <option value="">Select parent</option>
            {folders.map((parent) => (
              <option value={parent.id} key={parent.id}>
                {parent.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
      <hr className="my-4" />

      <FolderList folders={folders} onEdit={() => {}} onDelete={() => {}} />
    </div>
  );
};

export default Home;
