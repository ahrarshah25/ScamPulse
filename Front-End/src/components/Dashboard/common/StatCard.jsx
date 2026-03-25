import React from "react";

const StatCard = ({ title, value, subtitle, status }) => {
  return (
    <div className="bg-teal-500 border border-teal-500/20 rounded-2xl p-5 
    hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-all duration-300">

      <div className="flex justify-between items-start">
        <p className="text-white text-sm">{title}</p>
        <span className="text-xs text-white">{status}</span>
      </div>

      <h2 className="text-3xl font-semibold text-white mt-3">
        {value}
      </h2>

      <p className="text-xs text-black mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default StatCard;