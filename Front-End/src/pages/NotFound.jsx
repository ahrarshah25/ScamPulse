import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Page Not Found – But Security Never Stops 🛡️
        </p>

        <div className="mt-6 inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm">
          🚧 Coming Soon — Developer Working
        </div>

        <div className="mt-6 max-w-md mx-auto">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
            <span>Developer Progress</span>
            <span>20% Done • 80% Left</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[20%] bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        

        <p className="mt-12 text-sm text-gray-500">
          This page is under development. Our fraud detection engine is actively
          being built to protect your platform.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
