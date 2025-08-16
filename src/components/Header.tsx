import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-white shadow-sm">
      <button className="text-gray-600 text-2xl">
        <FiMenu />
      </button>

      <div className="flex items-center gap-6">

        <div className="relative">
          <IoNotifications className="text-2xl text-gray-600" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle className="text-[26px]" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">
              Qamar Ali
            </span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <FaChevronDown className="text-gray-500 text-sm" />
        </div>
      </div>
    </header>
  );
}
