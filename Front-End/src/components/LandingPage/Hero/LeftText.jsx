import React from "react";

const LeftText = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        <span className="text-teal-400">ScamPulse</span> <br />
        Real-Time Protection From <br className="hidden md:block" />
        Digital Scams
      </h1>

      <p className="text-gray-500 text-lg max-w-lg">
        Instantly detect fake messages, phishing links, and fake payment
        screenshots using smart AI-based protection.
      </p>
    </div>
  );
};

export default LeftText;
