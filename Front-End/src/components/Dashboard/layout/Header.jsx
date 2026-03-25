import React, { useContext } from "react";
import { Bell, UserCircle } from "lucide-react";
import { UserDataContext } from "../../../context/DashboardUserContext";

const Header = () => {
    const user = useContext(UserDataContext);
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-white border-b border-gray-200 ml-64">

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Welcome back 👋
        </h2>
        <p className="text-sm text-gray-500">
          Monitor your fraud detection activity
        </p>
      </div>

      <div className="flex items-center gap-5">

        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
          <UserCircle size={26} className="text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            {user.name}
          </span>
        </button>

      </div>
    </header>
  );
};

export default Header;