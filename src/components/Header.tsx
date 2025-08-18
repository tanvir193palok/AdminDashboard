import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); 
    navigate("/login"); 
  };

  return (
    <header className="flex justify-between items-center px-4 py-4 bg-white shadow-sm relative">
      <button className="text-gray-600 text-2xl">
        <FiMenu />
      </button>

      <div className="flex items-center gap-6">
        <div className="relative">
          <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />
        </div>

        <div
          className="flex items-center gap-3 cursor-pointer relative"
          onClick={() => setOpen(!open)}
        >
          <FaUserCircle className="text-[26px]" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <FaChevronDown className="text-gray-500 text-sm" />

          {open && (
            <div className="absolute right-0 top-12 w-40 bg-white shadow-md rounded-md p-2 z-10">
              <button
                onClick={handleLogout}
                className="w-full cursor-pointer flex items-center text-left gap-1 3xl:gap-2 px-3 py-2 text-gray-700 hover:bg-primary hover:text-white rounded-md"
              >
               <IoMdLogOut /> <span className="text-sm 3xl:text-base mb-1">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
