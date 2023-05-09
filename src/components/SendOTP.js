import React, { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";
import { otpRoute } from "../Routes/APIroutes";

const SendOTP = () =>{

    const[email,setEmail] = useState("");
    const[otp,setOtp] = useState("");
    const[enteredOtp,setEnteredOtp] = useState("");
    const navigate = useNavigate();
    
    const RegValidation = () =>{
        if (email === "") {
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


    const onSubmitEmail= async (event) =>{
        event.preventDefault();
        if(RegValidation()){
            const res = await axios.post(otpRoute,{email});
            console.log(res.data.otp);
            setOtp(res.data.otp);
        }

    }

    const verifyOTP = (event) => {
        event.preventDefault();
        if(enteredOtp === otp){
            localStorage.setItem('dlms-changepass-gmail',JSON.stringify(email));
            navigate('/changepass');
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

    return(
        <div className="mainLog">
        <div className="log-reg">
        <div className="wrapper">
          <div className="form-wrapper sign-up">
            <form
            onSubmit={(event)=>{verifyOTP(event)}}
            >
              <h2>Verify OTP</h2>
              <div className="input-group">
                <input value={enteredOtp} onChange={(e)=>{setEnteredOtp(e.target.value)}} type="text" maxLength="4" />
                <label>OTP</label>
              </div>
              <button type="submit" className="btn1">
                Verify
              </button>
              
            </form>
          </div>
  
          <div className="form-wrapper sign-in">
            <form action="POST" 
                onSubmit={(event)=>{onSubmitEmail(event)}}
                >
              <h2>Email Verification</h2>
              <div className="input-group">
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" />
                <label>Email</label>
              </div>
              <button type="submit" className="btn1">
                Send OTP
              </button>
              <div className="sign-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="signUp-link">
                    Verify OTP
                  </a>
                </p>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
        </div>
      </div>
    )
}

export default SendOTP;