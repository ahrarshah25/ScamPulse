import React from "react";

const StatusCard = ({ status, risk }) => {
  return (
    <div className="bg-[#020617] border border-red-500/30 rounded-2xl p-6 
    shadow-[0_0_40px_rgba(255,0,0,0.15)]">

      <p className="text-white text-sm">Status:</p>

      <h1 className="text-4xl font-bold text-red-500 mt-2">
        {status}
      </h1>

      <p className="mt-4 text-white text-sm">
        Risk Level:
        <span className="ml-2 text-red-400 font-semibold">
          {risk}
        </span>
      </p>

      <button className="mt-6 w-full py-3 rounded-xl 
      bg-teal-500 hover:bg-teal-600 transition text-black font-medium">
        Scan Now
      </button>
    </div>
  );
};

export default StatusCard;