import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logout, isValidToken } = useAuth();
  useAuth;

  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">DocDrive</h1>
      {isValidToken && (
        <div className="flex items-center gap-4">
          <span>
            Hi, <strong>{user?.username}</strong>
          </span>
          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 p-2 rounded-full cursor-pointer"
          >
            <FaPowerOff />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
