import React from "react";

const PageLoader = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-white p-6 space-y-6">
        <div className="relative overflow-hidden bg-gray-300 rounded h-6 w-1/3">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
        </div>

        <div className="space-y-4">
          <div className="relative overflow-hidden bg-gray-300 rounded-xl h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>

          <div className="relative overflow-hidden bg-gray-300 rounded h-4 w-3/4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>

          <div className="relative overflow-hidden bg-gray-300 rounded h-4 w-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PageLoader;
