import React from "react";

const rows = [
  ["Fake payments", "Accepted", "Blocked"],
  ["Manual checks", "Required", "Automated"],
  ["Account safety", "At risk", "Fully secure"],
  ["Response time", "Slow", "Real-time"],
];

const BeforeAfter = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        Without vs With ScamPulse
      </h3>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="font-semibold text-gray-500">Scenario</div>
        <div className="font-semibold text-red-500">Without</div>
        <div className="font-semibold text-teal-500">With</div>

        {rows.map((r, i) => (
          <React.Fragment key={i}>
            <div>{r[0]}</div>
            <div className="text-red-600">{r[1]}</div>
            <div className="text-teal-600">{r[2]}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfter;
