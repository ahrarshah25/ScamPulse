import React, { useState } from "react";
import { ShieldAlert, Scan } from "lucide-react";

const Simulation = () => {
  const [scanned, setScanned] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Live Scam Simulation
      </h3>

      <div className="grid md:grid-cols-3 gap-6 items-center">
        <textarea
          placeholder="Paste suspicious email, chat message or text here..."
          className="w-full h-40 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none"
        />

        <div className="flex flex-col items-center">
          <div className={`scan-circle ${scanned ? "active" : ""}`}>
            <Scan className="text-teal-500" size={42} />
          </div>
          <button
            onClick={() => setScanned(true)}
            className="mt-4 px-6 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600"
          >
            Scan Now
          </button>
        </div>

        <div className="p-6 rounded-2xl border border-teal-200 bg-teal-50">
          {scanned ? (
            <>
              <p className="text-sm text-gray-500">Verdict</p>
              <h4 className="text-2xl font-bold text-green-600 mt-1">
                No Fraud Detected
              </h4>
              <p className="text-gray-600 mt-2">
                Score: <span className="font-semibold">89%</span>
              </p>
            </>
          ) : (
            <p className="text-gray-400">
              Awaiting scan result…
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Simulation;
