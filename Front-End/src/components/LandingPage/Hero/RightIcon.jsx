import { Shield } from "lucide-react";
import React from "react";

const RightIcon = () => {
  return (
    <div className="relative flex items-center justify-center max-w-full overflow-hidden">
      <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-teal-500/30 blur-3xl rounded-full"></div>

      <Shield
        strokeWidth={2.5}
        className="text-teal-400 relative z-10
        w-48 h-48 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px]"
      />
    </div>
  );
};

export default RightIcon;
