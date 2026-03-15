import React from "react";
import Heading from "../Trust & Security/Heading";
import Simulation from "./Simulation";
import Timeline from "./Timeline";
import BeforeAfter from "./BeforeAfter";
import Radar from "./Radar";

const FraudExperience = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center">
        <Heading title="How ScamPulse Stops Fraud in Real Life" />
      </div>

      <div className="mt-6 flex justify-center">
        <p className="text-gray-600 max-w-2xl text-center leading-relaxed">
          This is a simulated experience to demonstrate how ScamPulse detects
          and prevents fraud. For real-time protection and full access, please{" "}
          <a
            href="/signup"
            className="relative inline-block font-medium text-teal-600 group"
          >
            Create an Account
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>{" "}
          or{" "}
          <a
            href="/login"
            className="relative inline-block font-medium text-teal-600 group"
          >
            Login
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          .
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-5 py-2 text-sm text-teal-700">
          <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
          Note: This demo does not process real user data.
        </div>
      </div>

      <div className="space-y-32 mt-24">
        <Simulation />
        <Timeline />
        <BeforeAfter />
        <Radar />
      </div>
    </section>
  );
};

export default FraudExperience;
