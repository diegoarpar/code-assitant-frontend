import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import ChatBoard from "./chat/ChatBoard";
import Feedback from "./feedback/Feedback";
import Logs from "./logs/Logs";
import Token from "./token/Token";

const App = () => {
  const scrollToSection = (event, id) => {
    if (event != null) {
      event.preventDefault(); // Prevent the default anchor behavior
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

    const targetPosition = section.offsetTop;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    

    requestAnimationFrame(animation);
      
    }
  };
  
  return (
    <div>
    <div className="nav nave-menu-assistant">
      <input className="nav-input" type="checkbox" />
        <span className="first-span"></span>
        <span></span>
        <div className="menu">
          <li onClick={(e) => scrollToSection(e, "home")}><Link to="#home" >
              Home
            </Link>
          </li>
          
          <li onClick={(e) => scrollToSection(e, "chat")}><Link to="#chat" >
             Code Assistant
            </Link>
          </li>
          <li onClick={(e) => scrollToSection(e, "logs")}><Link to="#logs" >
              Logs
            </Link></li>
          <li onClick={(e) => scrollToSection(e, "token")}>
            <Link to="#token" >
             Get Token
            </Link>
          </li>
          <li onClick={(e) => scrollToSection(e, "about")}><Link to="#about" >
              About
            </Link>
          </li>
        </div>
    </div>



      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/about" element={<Home />}></Route>
        <Route path="/home/chatBoard" element={<Home />}></Route>
        <Route path="/home/logs" element={<Home />}></Route>
        <Route path="/home/token" element={<Home />}></Route>
        <Route path="/home/feedback" element={<Home />}></Route>
      </Routes>
      <footer className="footer-assistant">
        <p>&copy; 2024 Java Code Assistant. All rights reserved. Any feedback to padillar001@gannon.edu</p>
      </footer>
    </div>
  );
};

export default App;