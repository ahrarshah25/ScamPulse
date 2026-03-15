import React from "react";
import Rain from './Rain'
import CyberEffect from "./CyberEffect";

const Animation = () => {
  return (
    <div className="absolute inset-0 bg-white">
      <Rain count={50} />
      <CyberEffect />
    </div>
  );
};


export default Animation;
