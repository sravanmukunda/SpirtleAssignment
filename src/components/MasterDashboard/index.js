import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Card";
import "./index.css";

const MasterDashboard = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const logOut = () => {
    navigate("/");
  };

  const handler = (e) => {
    e.preventDefault();
    if (input !== "") {
      const newArr = [...arr, input];
      setArr(newArr);
      setInput("");
      let mat = JSON.parse(localStorage.getItem("mat")) || [];
      mat.push({ input });
      localStorage.setItem("mat", JSON.stringify(mat));
      let lc = JSON.parse(localStorage.getItem("mat"));
    }
  };

  return (
    <div className="master-dashboard-container">
      <div className="master-dashboard-form">
        <h3>Master Dashboard</h3>
        <form onSubmit={handler}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
        <Card />
        <button type="button" onClick={logOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default MasterDashboard;
