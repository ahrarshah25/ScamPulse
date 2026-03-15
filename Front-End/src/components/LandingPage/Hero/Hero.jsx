import React from "react";
import LeftText from "./LeftText";
import Input from "./Input";
import RightIcon from "./RightIcon";

const Hero = () => {
  return (
    <section className="relative z-0 min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-16">
        <div className="flex-1">
          <LeftText />
          <Input />
        </div>

        <div className="flex-1 flex justify-center">
          <RightIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
