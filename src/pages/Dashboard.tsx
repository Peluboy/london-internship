import React, { useState } from "react";
import Filter from "../components/Filter";
import Candidates from "../components/Candidates";
import "../styles/dashboard.css";

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="dashboard-container">
      <div className="left">
        <Filter setSearchQuery={setSearchQuery} />
      </div>
      <div className="right">
        <Candidates searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Dashboard;
