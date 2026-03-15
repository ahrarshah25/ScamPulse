import React from "react";

const Input = ({ label, type, placeholder, value, func }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={func}
        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-teal-500/30
        text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );
};

export default Input;
