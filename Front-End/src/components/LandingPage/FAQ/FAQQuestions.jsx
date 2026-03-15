import React from "react";

const FAQQuestions = ({ data, active, setActive }) => {
  return (
    <div className="border-t bg-gray-50 px-4 py-3 flex gap-2 overflow-x-auto">
      {data.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
            active === index
              ? "bg-teal-500 text-white"
              : "bg-white border text-gray-600 hover:bg-gray-100"
          }`}
        >
          Q{index + 1}
        </button>
      ))}
    </div>
  );
};

export default FAQQuestions;
