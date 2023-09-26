import Filter from "../components/Filter";
import Candidates from "../components/Candidates";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left">
        <Filter />
      </div>
      <div className="right">
        <Candidates />
      </div>
    </div>
  );
};

export default Dashboard;
