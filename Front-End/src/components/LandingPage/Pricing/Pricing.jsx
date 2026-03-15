import React from "react";
import Heading from "../Trust & Security/Heading";
import Card from "./Card";
import pricingCard from "../../../data/PricingCard";

const Pricing = () => {
  return (
    <section className="py-28 bg-white">
      <div className="text-center">
        <Heading title="Grow with fewer tools and lower prices" />
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Flexible plans designed for individuals, startups, and enterprises to
          stay protected from fraud at every scale.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {pricingCard.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            des={item.des}
            price={item.price}
            type={item.type}
            billedType={item.billedType}
            features={item.features}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
