import { useState } from "react";
import { FiHome } from "react-icons/fi";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [{ name: "Dashboard", icon: <FiHome /> }];

  return (
    <div className="bg-white shadow-lg min-h-screen px-4">
      <div className=" py-6 font-bold text-lg">Logo</div>
      <ul>
        {menu.map((item) => (
          <li
            key={item.name}
            className={`flex items-center text-xs md:text-sm 2xl:text-base 3xl:text-lg gap-3 px-4 py-3 cursor-pointer rounded-lg ${
              active === item.name
                ? "bg-primary text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActive(item.name)}
          >
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
