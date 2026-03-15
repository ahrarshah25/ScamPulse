import React from "react";

const Button = ({ text , func }) => {
  return (
    <button
    onClick={func}
      className="w-full py-3 rounded-xl font-medium
      bg-gradient-to-r from-teal-500 to-cyan-500
      hover:opacity-90 transition text-black"
    >
      {text}
    </button>
  );
};

export default Button;
