import React from "react";
import Arrow from "./Arrow";

const ProcessModules = ({ modules }) => {
  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
      {modules.map((step, i) => (
        <div key={step.id} className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center gap-5 bg-white border border-teal-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 w-full">
            <div className="flex items-center justify-center p-4 rounded-xl bg-teal-50 text-teal-500">
              <step.icon size={28} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {step.id}. {step.title}
              </h3>
              <p className="text-gray-500 mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
          {i < modules.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
};

export default ProcessModules;
