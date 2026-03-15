import React from "react";
import { CircleCheckBig } from "lucide-react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      
      <h4 className="text-xl font-semibold text-gray-900">
        {props.name}
      </h4>
      <p className="mt-2 text-gray-500 text-sm">
        {props.des}
      </p>

      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900">
          {props.price}
          <span className="text-base font-medium text-gray-500 ml-1">
            {props.type}
          </span>
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          {props.billedType}
        </p>
      </div>

      <div className="mt-8 space-y-3">
        {props.features.map((e, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
            <CircleCheckBig className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
            <span>{e}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button name="Get Started" />
      </div>
    </div>
  );
};

export default Card;
