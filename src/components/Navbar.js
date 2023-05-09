import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import BE from "./Images/BE.png";
import TV from "./Images/TechVenture-logos_transparent.png"
import logo from "./Images/TechVenture-White.png";

const Navbar = () => {
  const home = () => {
    window.location.href = "#exp1";
  };
  const motivation = () => {
    window.location.href = "#motiv1";
  };
  const feat = () => {
    window.location.href = "#feat1";
  };
  const team = () => {
    window.location.href = "#team1";
  };
  const toggleMenu = () => {
    var ele = document.getElementById("main-b");
    ele.classList.toggle("open");
  };

  return (
    <header className="main-body" id="main-b">
      <button onClick={toggleMenu} className="burger">
        <MenuIcon fontSize="large" />
      </button>
      <span className="logoOut"></span>
      <nav className="navbar1">
        <div className="home-logo">
          <div><img src={logo} width="68px" /></div>
          <div><label>TechVenture</label></div>
        </div>
        <div className="buttons">
          <button onClick={home}>Home</button>
          <button onClick={motivation}>Motivation</button>
          <button onClick={feat}>Features</button>
          <button onClick={team}>Our Team</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
