import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-4 my-6">
      <span className="flex-1 h-px bg-gray-700" />
      <span className="text-gray-400 text-sm">OR</span>
      <span className="flex-1 h-px bg-gray-700" />
    </div>
  );
};

export default Divider;
