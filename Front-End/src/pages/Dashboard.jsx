import React, { useContext, useEffect } from "react";
import Layout from "../components/Dashboard/layout/Layout";
import StatsGrid from "../components/Dashboard/sections/StatsGrid";
import RightPanel from "../components/Dashboard/sections/RightPanel";
import Activity from "../components/Dashboard/common/Activity";
import { UserDataContext } from "../context/DashboardUserContext";
import dashboardRedictHandler from "../handlers/dashboardRedictHandler"

const Dashboard = () => {
  const user = useContext(UserDataContext);
  useEffect(() => {
    document.title = `${user.name}'s Dashboard - ScamPulse`
  },[]);

  dashboardRedictHandler();
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">
          <StatsGrid />
          <Activity />
        </div>

        <RightPanel />

      </div>
    </Layout>
  );
};

export default Dashboard;