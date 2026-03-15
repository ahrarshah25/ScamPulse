import React from "react";
import Heading from "../Trust & Security/Heading";
import ProcessModules from "./ProcessModules";
import processModules from "../../../data/ProcessModules";

const HW = () => {
  return (
    <section className="py-24 px-5 bg-gray-50">
      <Heading title="How To Use" />
      <ProcessModules modules={processModules} />
    </section>
  );
};

export default HW;
