import React from "react";
import Animation from "../../Animations/Animation";
import Input from "../Hero/Input";
import Heading from "../Trust & Security/Heading";

const Subscribe = () => {
  return (
    <div>
        <Heading title="Join our orbit" />
        
        <section className="relative py-12 flex justify-center px-4 bg-white">
      
      <div className="relative w-full max-w-3xl rounded-[32px] overflow-hidden border border-teal-400/40 shadow-xl">
        
        <Animation />

        <div className="relative z-10 flex justify-center items-center p-8 sm:p-12">
          <div className="relative w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-xl border border-teal-400/40 shadow-2xl px-6 py-10 sm:px-10">

            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Stay Ahead of Scams
              </h2>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Get security updates, fraud alerts, and early access to ScamPulse
                features.
              </p>
            </div>

            <div className="flex justify-center">
              <Input />
            </div>

            <span className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <span className="absolute inset-0 animate-scan-box" />
            </span>
          </div>
        </div>
      </div>

      <style>
        {`
          .animate-scan-box {
            background: linear-gradient(
              120deg,
              transparent 40%,
              rgba(45, 212, 191, 0.35),
              transparent 60%
            );
            animation: scanBox 3.5s linear infinite;
          }

          @keyframes scanBox {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </section>
    </div>
  );
};

export default Subscribe;
