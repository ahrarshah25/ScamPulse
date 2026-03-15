import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white border border-teal-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-teal-50 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition">
          <props.icon size={26} />
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {props.title}
        </h3>
      </div>

      <p className="text-gray-500 mt-4 leading-relaxed">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
