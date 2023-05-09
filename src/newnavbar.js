import "./newnavbar.css";
// import BE from "../src/components/Images/BE.png";
import Person2Icon from '@mui/icons-material/Person2';
// import TV from './components/Images/TechVenture-logos_transparent.png';
import logo from './components/Images/TechVenture-White.png';
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import UserInfo from "./Dashboard/UserInfo";
// If Newnavbar is showing error then and newnavbar.js file name starting with small letter just 
//made the first letter of newnavbar.js file to Newnavbar.js that is uppercase first letter

const Newnavbar = () => {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [User, setUser] = useState([]);
  const [isAvatarSet, setAvatar] = useState(true);

  async function currentUserData() {
    const localData = await JSON.parse(localStorage.getItem(`dlms-app-user`));
    setUser(localData);
    console.log(localData.isAvatarImageSet);
    if (User.isAvatarImageSet === true) {
      setAvatar(false);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem(`dlms-app-user`)) {
      navigate('/login');
    } else {

      currentUserData();
    }
  }, []);

  const home = () => {
    window.location.href = "#frontendroad";
  };
  const motivation = () => {
    window.location.href = "#projectsid";
  };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div><img src={logo} width="113px" /></div>
          <div><label className="label-TV">TechVenture</label></div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink onClick={home} className={"deco"}>Tech roadmap</NavLink>
            </li>
            <li>
              <NavLink onClick={motivation}  className={"deco"}>Explore projects</NavLink>
            </li>
            <li>
              <NavLink to="/chat"  className={"deco"}>Chat</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <div>
            <button className="settingBut" onClick={() => { setIsOpen(!isOpen); currentUserData(); }}>
              <span>{isOpen ? <CloseIcon fontSize={"large"} /> : <Person2Icon fontSize={"large"} />}</span>
            </button>
            <br />
            <div className={`dropDownInfo ${isOpen ? "openDrop" : ""}`}>
              <UserInfo isAvatarSet={isAvatarSet} User={User} />
            </div>
          </div>
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Newnavbar;