import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-14">
      {title}
    </h2>
  );
};

export default Heading;
