import React from "react";

const Button = (props) => {
  return (
    <button className="w-full rounded-xl bg-teal-500 py-3 text-white font-medium hover:bg-teal-600 transition-all duration-300">
      {props.name}
    </button>
  );
};

export default Button;
