import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./about/About";
import Home from "./home/Home";
import ChatBoard from "./chat/ChatBoard";
import "./App.css";

const styles = {
  main_header: {
    backgroundColor: "white",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    boxShadow: "#4CAF50",
  },

  header: {
    padding: "0.6rem",
    width: "85rem",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  nav_link: {
    textDecoration: "none",
    color: "white",
    background: "#4CAF50",
    fontSize: "1.2rem",
    padding: "0.3rem 1.6rem",
    margin: "5px",
    border: "1px solid white",
    borderRadius: "0.3rem",
  },
};

const App = () => {
  return (
    <div>
      <div style={styles.main_header}>
        <div style={styles.header}>
          <div style={styles.navbar}>
            <Link to="/home/" style={styles.nav_link}>
              Home
            </Link>
            <Link to="/home/about" style={styles.nav_link}>
              About
            </Link>
            <Link to="/home/chatBoard" style={styles.nav_link}>
              ChatBoard
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/about" element={<About />}></Route>
        <Route path="/home/chatBoard" element={<ChatBoard />}></Route>
      </Routes>
    </div>
  );
};

export default App;