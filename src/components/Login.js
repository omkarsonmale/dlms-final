import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BE from "./Images/BE.png";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { logRoute, regRoute } from "../Routes/APIroutes";

const Login = () => {
  const navigate = useNavigate();
  // Register
  const [regUserData,setRegUserData] = useState({
    usernameReg: "",
    emailReg: "",
    passwordReg:""
  });
  const postRegData = (event) => {
    event.preventDefault();
    if(RegValidation()){
      const {usernameReg, emailReg, passwordReg} = regUserData;
      fetch(regRoute,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username:usernameReg, email:emailReg, password:passwordReg}),
      })
      .then(function(res){
        return res.json();
      })
      .then(function(data){
        if (data.status === false) {
          toast.error(data.msg,{
            position : "bottom-left",
            autoClose : 8000,
            theme : "dark",
            pauseOnHover : true
          });
        }
        if (data.status === true) {
          localStorage.setItem(`dlms-app-user`,JSON.stringify(data.user));
          navigate('/development');
        }
      });
    }
  }
  const RegValidation = () =>{
    const {usernameReg, emailReg, passwordReg} = regUserData;
    if (usernameReg.length < 3) {
      toast.error("Username is too short !!",
      {
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }else if (passwordReg.length < 8) {
      toast.error("Password should be greater than 8 characters !!",{
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }else if (emailReg === "") {
      toast.error("email not entered !!",{
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }
    return true;
  }
  const handleInput = (e) => {
    setRegUserData({...regUserData,[e.target.name] : e.target.value});
  }
  

  // Login
  const [logUserData,setLogUserData] = useState({
    usernameLog: "",
    passwordLog:""
  });
  const handleInputLog = (e) => {
    setLogUserData({...logUserData,[e.target.name] : e.target.value});
  }
  const logValidation = () =>{
    const {usernameLog, passwordLog} = logUserData;
    if (usernameLog.length < 3) {
      toast.error("Username is too short !!",
      {
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }else if (passwordLog.length < 8) {
      toast.error("Password should be greater than 8 characters !!",{
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }else if (passwordLog === "") {
      toast.error("Password should be greater than 8 characters !!",{
        position : "bottom-right",
        autoClose:8000,
        theme:"dark",
        pauseOnHover:true
      });
      return false;
    }
    return true;
  }
  const postLogData = (event) =>{
    event.preventDefault();
   if (logValidation()) {
    const {usernameLog,passwordLog} = logUserData;
    fetch(logRoute,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: usernameLog, password: passwordLog }),
    })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.status === false) {
        toast.error(data.msg, {
          position: "bottom-left",
          autoClose: 8000,
          theme: "dark",
          pauseOnHover: true,
        });
      }
      if (data.status === true) {
        localStorage.setItem(`dlms-app-user`, JSON.stringify(data.user));
        navigate("/development");
      }
    });
   } 
  }

  const wrapper = document.querySelector(".wrapper");
  const signUpLink = document.querySelector(".signUp-link");
  const signInLink = document.querySelector(".signIn-link");
  if (signUpLink) {
    signUpLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signIn");
      wrapper.classList.remove("animate-signUp");
    });
  }

  if (signInLink) {
    signInLink.addEventListener("click", () => {
      wrapper.classList.add("animate-signUp");
      wrapper.classList.remove("animate-signIn");
    });
  }

  return (
    <div className="mainLog">
    <div className="bgcolor">
      <div className="log-reg">
      <div className="wrapper">
        <div className="form-wrapper sign-up">
          <form action="POST" onSubmit={(event)=>{postRegData(event)}}>
            <h2>Sign Up</h2>
            <div className="input-group">
              <input value={regUserData.usernameReg} onChange={handleInput} name="usernameReg" type="text"  />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input value={regUserData.emailReg} onChange={handleInput} name="emailReg" type="email" />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input name="passwordReg" onChange={handleInput} value={regUserData.passwordReg} type="password" />
              <label>Password</label>
            </div>
            <button type="submit" className="btn1">
              Sign Up
            </button>
            
            <div className="sign-link">
              <p>
                Already have an account?{" "}
                <a href="#" className="signIn-link">
                  Login 
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-wrapper sign-in">
          <form action="POST" onSubmit={(event)=>{postLogData(event)}}>
            <h2>Login</h2>
            <div className="input-group">
              <input name="usernameLog" value={logUserData.usernameLog} onChange={handleInputLog} type="text" />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input name="passwordLog" value={logUserData.passwordLog} onChange={handleInputLog} type="password" />
              <label>Password</label>
            </div>
            {/* <div className="forgot-pass">
              <a onClick={()=>{navigate('/checkgmail')}}>Forgot Password?</a>
            </div> */}
            {/* <NavLink to={'/development'}> */}
            <button type="submit" className="btn1">
              Login
            </button>
            {/* </NavLink> */}
            <div className="sign-link">
              <p>
                Don't have an account?{" "}
                <a href="#" className="signUp-link">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
