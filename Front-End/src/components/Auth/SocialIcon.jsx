import React from "react";
import { Github } from "lucide-react";

const SocialIcon = ({ type, onClick }) => {
  return (
    <button
    onClick={onClick}
      className="flex items-center justify-center gap-2 w-full py-3
      rounded-xl border border-white hover:bg-gray-800 transition"
    >
      {type === "github" && <Github size={18} color="white" />}
      {type === "google" && <span className="font-bold" style={{color: "white"}} >G</span>}
      <span className="text-sm text-gray-300">
        Continue with {type}
      </span>
    </button>
  );
};

export default SocialIcon;
