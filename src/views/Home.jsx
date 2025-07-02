import React, { useEffect, useState } from "react";
import FolderList from "../components/FolderList";
import { createFolder, getFolders } from "../api/folder";
import { RiFolderWarningFill } from "react-icons/ri";

const Home = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    folderParentId: "",
  });

  const resetFormData = () => {
    setFormData({
      name: "",
      folderParentId: "",
    });
  };

  const load = async () => {
    await getFolders().then((res) => setFolders(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createFolder(formData);
      load();
      resetFormData();
      setError("");
    } catch (error) {
      setError(error?.response?.data?.message || "Erro ao criar pasta");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Management Section
      </h1>

      <form
        onSubmit={handleCreate}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Folder name"
            value={formData.name}
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select
            name="folderParentId"
            id="folderParentId"
            value={formData.folderParentId || ""}
            onChange={(e) =>
              setFormData({ ...formData, folderParentId: e.target.value })
            }
            className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select parent</option>
            {folders.map((parent) => (
              <option value={parent.id} key={parent.id}>
                {parent.name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Save
          </button>
        </div>
      </form>

      {folders.length > 0 ? (
        <>
          <hr className="my-6" />
          <FolderList folders={folders} onEdit={() => {}} onDelete={() => {}} />
        </>
      ) : (
        <>
          <div className="flex w-fit items-center my-6 relative">
            <RiFolderWarningFill className="text-9xl text-orange-700" />
            <span className="absolute top-0 right-0 text-3xl font-bold flex p-3 bg-blue-600 rounded-full outline-0">
              0
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
