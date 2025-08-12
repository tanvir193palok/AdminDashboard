import { useState } from "react";
import { FiHome } from "react-icons/fi";
import logo from "../../assets/logo.svg";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menu = [{ name: "Dashboard", icon: <FiHome /> }];

  return (
    <div className="bg-white px-4">
      <div className="flex gap-2 3xl:gap-3 py-2 mb-4 3xl:py-3">
        <img src={logo} alt="logo" className="h-14 w-14" />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold">BindRocket.com</p>
          <p className="text-[10px]">Simplify Sales, Empower Agents</p>
        </div>
      </div>
      <ul>
        {menu.map((item) => (
          <li
            key={item.name}
            className={`flex items-center text-xs md:text-sm 2xl:text-base 3xl:text-lg gap-3 px-4 py-3 cursor-pointer rounded-lg ${
              active === item.name ? "bg-primary text-white" : "text-gray-600"
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
