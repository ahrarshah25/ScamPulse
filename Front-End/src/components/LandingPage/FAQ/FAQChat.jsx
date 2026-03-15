import React from "react";
import { ShieldCheck, User, Bot } from "lucide-react";

const FAQChat = ({ question, answer }) => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b">
        <ShieldCheck className="text-teal-500" />
        <span className="font-semibold text-gray-800">
          ScamPulse AI Security Offline Assistant
        </span>
        <span className="ml-auto text-xs text-red-600">● Offline</span>
      </div>

      <div className="p-6 space-y-6 bg-white">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-gray-100">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="bg-gray-100 rounded-xl px-4 py-3 text-sm text-gray-800 max-w-xl">
            {question}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-teal-100">
            <Bot className="w-4 h-4 text-teal-600" />
          </div>
          <div className="bg-teal-50 border border-teal-100 rounded-xl px-4 py-3 text-sm text-gray-700 max-w-xl">
            {answer}
            <span className="ml-1 animate-pulse">▍</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQChat;
