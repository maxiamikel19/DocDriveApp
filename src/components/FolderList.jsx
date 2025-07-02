import { FaFolder } from "react-icons/fa6";

export default function FolderList({ folders, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-start gap-2">
      {folders.map((folder) => (
        <div className="flex items-center justify-center border border-gray-300 p-3 rounded">
          <FaFolder className="text-amber-700 text-4xl" />
        </div>
      ))}
    </div>
  );
}
