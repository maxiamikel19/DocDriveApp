import { FaEdit, FaTrash } from "react-icons/fa";
import { FaFolder } from "react-icons/fa6";

export default function FolderList({ folders, onEdit, onDelete, onClick }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {folders.map((folder) => (
        <div
          onClick={onClick}
          key={folder.id}
          className=" relative flex flex-col items-center justify-between hover:bg-gray-300  border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white cursor-pointer"
        >
          <FaFolder className="text-amber-700 text-5xl mb-2" />

          <div className="flex flex-col items-center text-center w-full">
            <p className="text-md font-medium  text-gray-800 mb-2 break-words">
              {folder.name}
            </p>

            <div className="absolute top-0 rounded-tr-md right-0 h-auto flex flex-col p-1 text-[10px] items-start font-medium text-gray-600">
              <p>
                Files:<span>{folder.totalFiles}</span>
              </p>
              <p>
                Folders:<span>{folder.totalSubFolders}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
