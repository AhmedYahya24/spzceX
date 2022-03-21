import React from "react";
import { Link } from "react-router-dom";
//styles
import "./home.css";
const Home = () => {
  return (
    <div className="navbar">
      <div className="left-content">
        <p>Welcome to Space X</p>
      </div>
      <div className="right-content">
        <ul>
          <li>
            {" "}
            <Link to="/launches">Lunches </Link>
          </li>
          <li>
            {" "}
            <Link to="/missions">Missions </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
