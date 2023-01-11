import { useNavigate } from "react-router-dom";
import "./index.css";

import Card from "../Card";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };
  return (
    <div className="student-dashboard-con">
      <div className="student-dashboard-sub-con">
        <h1>Student Dashboard</h1>
        <Card />
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default StudentDashboard;
