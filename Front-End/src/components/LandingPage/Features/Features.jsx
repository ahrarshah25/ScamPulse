import React from "react";
import Heading from "../Trust & Security/Heading";
import features from "../../../data/FeatureData";
import Card from "./Card";

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-14 text-center">
          <Heading title="Powerful Fraud Detection Features" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
