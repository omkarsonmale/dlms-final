import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";
import BE from "../components/Images/BE.png";
import TV from "../components/Images/TechVenture-logos_transparent.png"
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import UserInfo from "./UserInfo";
import Person2Icon from '@mui/icons-material/Person2';
import DashLogo from '../components/Images/TechVenture-White.png';

const Navbar = () => {
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
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div><img src={DashLogo} width="113px" /></div>
          <div><label className="Dash-label">TechVenture</label></div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/development" className={"fortextdeco"}>Development</NavLink>
            </li>
            <li>
              <NavLink to="/collegestudy" className={"fortextdeco"} >College Study</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={"fortextdeco"}>Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/Diary" className={"fortextdeco"}>Diary</NavLink>
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

export default Navbar;
