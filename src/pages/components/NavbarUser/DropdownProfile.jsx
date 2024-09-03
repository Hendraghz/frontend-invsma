import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../utils/context/AuthContext.jsx";
// import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const DropdownProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  // const navigate = useNavigate();

  const token = localStorage.getItem("authTokens");
  const decoded = jwtDecode(token);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "https://invsma.co.id/";
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="flex items-center">
        <div className="px-2 py-2 bg-color-1 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <span className="ml-2 font-bold w-[8rem]">{decoded.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
