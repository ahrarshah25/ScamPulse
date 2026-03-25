import React from "react";
import StatusCard from "../common/StatusCard";

const RightPanel = () => {
  return (
    <div className="space-y-6">
      <StatusCard status="SCAM" risk="HIGH" />
    </div>
  );
};

export default RightPanel;