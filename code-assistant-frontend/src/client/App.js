import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import ChatBoard from "./chat/ChatBoard";
import Feedback from "./feedback/Feedback";
import Logs from "./logs/Logs";
import Token from "./token/Token";

const App = () => {
  return (
    <div>
    <div className="nav">
      <input className="nav-input" type="checkbox" />
        <span className="first-span"></span>
        <span></span>
        <div className="menu">
          <li
          ><Link to="/home/">
              Home
            </Link>
          </li>
          <li><Link to="/home/about">
              About
            </Link>
          </li>
          <li><Link to="/home/chatBoard">
             Code Assistant
            </Link>
          </li>
          <li><Link to="/home/logs">
              Logs
            </Link></li>
          <li>
            <Link to="/home/token">
             Get Token
            </Link>
          </li>
        </div>
    </div>



      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/about" element={<About />}></Route>
        <Route path="/home/chatBoard" element={<ChatBoard />}></Route>
        <Route path="/home/logs" element={<Logs />}></Route>
        <Route path="/home/token" element={<Token />}></Route>
        <Route path="/home/feedback" element={<Feedback />}></Route>
      </Routes>
      <footer className="footer-assistant">
        <p>&copy; 2024 Java Code Assistant. All rights reserved. Any feedback to padillar001@gannon.edu</p>
      </footer>
    </div>
  );
};

export default App;