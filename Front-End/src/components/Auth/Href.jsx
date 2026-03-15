import React from "react";
import { Link } from "react-router-dom";

const Href = ({ text, linkText, href }) => {
  return (
    <p className="text-sm text-gray-400 text-center">
      {text}{" "}
      <Link to={href} className="text-teal-400 hover:underline font-medium" >
      {linkText}
      </Link>
    </p>
  );
};

export default Href;
