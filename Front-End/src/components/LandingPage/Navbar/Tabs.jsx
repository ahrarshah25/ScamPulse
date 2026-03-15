import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const Tabs = ({ mobile = false }) => {
  const baseLinkClasses =
    "relative transition hover:text-teal-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300";
  const activeLinkClasses = "text-teal-600 after:w-full";

  const containerClasses = mobile
    ? "flex flex-col gap-4 text-center"
    : "flex items-center gap-8 bg-gray-200 px-6 py-2 rounded-full";

  return (
    <ul className={containerClasses}>
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : "after:w-0 hover:after:w-full"}`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
