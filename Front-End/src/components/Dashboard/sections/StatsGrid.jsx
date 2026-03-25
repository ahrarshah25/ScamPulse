import React from "react";
import StatCard from "../common/StatCard";

const StatsGrid = () => {
  const data = [
    {
      title: "Total Message Detection",
      value: "150",
      subtitle: "Fraud messages analyzed",
      status: "+12%"
    },
    {
      title: "Phishing Links Scanner",
      value: "15",
      subtitle: "Links scanned",
      status: "+5%"
    },
    {
      title: "Total Scans",
      value: "250",
      subtitle: "Self scans",
      status: "+20%"
    },
    {
      title: "Scams Detected",
      value: "225",
      subtitle: "Total alerts",
      status: "SAFE"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item, i) => (
        <StatCard key={i} {...item} />
      ))}
    </div>
  );
};

export default StatsGrid;