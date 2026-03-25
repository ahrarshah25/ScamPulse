import React from "react";

const Activity = () => {
  const logs = [
    "Fake email detected from random@job.com",
    "Payment screenshot flagged",
    "Bot activity blocked",
    "Safe login verified",
  ];

  return (
    <div className="bg-[#0f172a] border border-teal-500/20 rounded-2xl p-6 mt-6">
      <h3 className="text-white font-semibold mb-4">
        Recent Activity
      </h3>

      <div className="space-y-3">
        {logs.map((log, i) => (
          <p key={i} className="text-gray-400 text-sm">
            • {log}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Activity;