import React from "react";
import sidImg from "./Images/Sid2.jpg";
// import shuImg from "./Images/shu.jpg";
import omkImg from "./Images/Omkar.jpg";
import tejImg from "./Images/Tejas.jpg";
import tosImg from "./Images/Toshal.jpg";
import Navbar from "./Navbar";
import Explore from "./Explore";
import { positions } from "@mui/system";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Explore.css";
import AnimCards from "./AnimCards";

const position={
  gap:"50px"
}
const Home = () => {
  const size = {
    width: " 18rem",
  };
  return (
    <div className="home">
      <nav className="App">
        <Navbar />
      </nav>
      <Explore />
      <div className="feat" id="feat1">
        <div className="motiv-head"><h1>FEATURES</h1></div>
        <div><AnimCards /></div>
        <hr />
      </div>
      <div id="team1" >
      <div className="team" >
        <header className="motiv-head">
          <h1>Our Team</h1>
        </header>
      </div>
      <div className="imp" >
        <div className="container1">
          <img src={omkImg} alt="person image" className="image1" />
          <p>Omkar Sonmale</p>
        </div>

        <div className="container1">
          <img src={tosImg} alt="person image" className="image1" />
          <p>Toshal Chaudhari</p>
        </div>

        <div className="container1">
          <img src={sidImg} alt="person image" className="image1" />
          <p>Siddharth Bramhecha</p>
        </div>
{/* 
        <div class="container1">
          <img src={shuImg} alt="person image" class="image1" />
          <p>Shubham Masang</p>
        </div> */}

        <div class="container1">
          <img src={tejImg} alt="person image" class="image1" />
          <p>Tejas Shinde</p>
        </div>

        <hr />
      </div>
      </div>
    </div>
  );
};

export default Home;
