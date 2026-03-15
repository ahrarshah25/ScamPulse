import React from "react";
import { Mail, Image, Bot, Ban, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Mail, text: "Fake job email arrives" },
  { icon: Image, text: "Edited payment screenshot sent" },
  { icon: Bot, text: "Bot attempts bypass" },
  { icon: Ban, text: "Account at risk" },
  { icon: ShieldCheck, text: "ScamPulse blocks & secures" },
];

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        Fraud Attack Timeline
      </h3>

      <div className="relative border-l-2 border-teal-300 pl-8 space-y-8">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center">
              <s.icon size={20} />
            </div>
            <p className="text-gray-700">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
