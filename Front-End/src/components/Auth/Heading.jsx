import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="space-y-2 text-center">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
};

export default Heading;
