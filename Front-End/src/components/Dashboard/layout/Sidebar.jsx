import React from "react";
import {
  Home,
  BarChart2,
  Bell,
  User,
  Settings,
} from "lucide-react";

import Logo from "../../LandingPage/Navbar/Logo";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
    { name: "Notifications", icon: Bell },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 px-6 py-6 flex flex-col justify-between">

      <div>
        <div className="mb-10">
          <Logo />
        </div>

        <nav className="space-y-2">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition group"
            >
              <link.icon size={20} className="group-hover:text-teal-500" />
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </nav>
      </div>

      <p className="text-xs text-gray-400">
        Secure by ScamPulse
      </p>
    </aside>
  );
};

export default Sidebar;