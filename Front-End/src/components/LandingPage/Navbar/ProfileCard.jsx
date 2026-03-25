import React, { useState } from "react";
import { userLogout } from "../../../api/auth/logout.api";
import { navigate } from "../../../hooks/useNavigate";
import useLoading from "../../../hooks/useLoading";
import Swal from "sweetalert2";

const ProfileCard = ({ avatar }) => {
  const [hovered, setHovered] = useState(false);
  const [loading, setLoading] = useLoading(false);

  const handleProfileClick = () => {
    navigate("/dashboard", { subdomain: "dashboard" });
  };

  const handleSignOut = async (e) => {
    e.stopPropagation();
    try {
      setLoading(true);
      const res = await userLogout();
      if (res.data?.success) {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        }).then(() => navigate("/login", { subdomain: "auth" }));
      } else {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: `${res.data.message}`,
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: "swal-margin-top",
          },
        });
      }
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Error While Logging Out: " + error.message,
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "swal-margin-top",
        },
      });
      console.log(error.message);
    }
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleProfileClick}
    >
      <div className="w-14 h-14 p-[2px] bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-2 border-white"
        />
      </div>

      {hovered && (
        <div
          className={`absolute right-0 mt-3 w-36 bg-white shadow-xl border border-gray-200 rounded-xl overflow-hidden z-20 transition-all duration-[3500ms] ease-in-out ${
            hovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      )}

      <style>
        {`
    .animate-fade-in {
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
      </style>
    </div>
  );
};

export default ProfileCard;
