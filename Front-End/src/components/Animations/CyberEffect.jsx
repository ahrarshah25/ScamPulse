import React from "react";

const CyberEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      
      <div className="absolute inset-0 animate-lightning" />

      <span className="scan-line absolute left-1/2 top-0 h-full w-[2px]" />

      <style>
        {`
          .animate-lightning {
            background: radial-gradient(
              circle at 50% 30%,
              rgba(45, 212, 191, 0.18),
              transparent 65%
            );
            opacity: 0;
            animation: lightning 6s infinite;
          }

          @keyframes lightning {
            0% { opacity: 0; }
            45% { opacity: 0; }
            48% { opacity: 1; }
            50% { opacity: 0.4; }
            52% { opacity: 1; }
            55% { opacity: 0; }
            100% { opacity: 0; }
          }

          .scan-line {
            background: linear-gradient(
              to bottom,
              transparent,
              rgba(45, 212, 191, 0.6),
              transparent
            );
            animation: scan 4s linear infinite;
            opacity: 0.35;
          }

          @keyframes scan {
            0% {
              transform: translateX(-40vw);
            }
            100% {
              transform: translateX(40vw);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CyberEffect;
