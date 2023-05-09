import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { changePassRoute } from "../Routes/APIroutes";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ChangePass = () => {
    const navigate = useNavigate();
    const [password,setPassword] = useState("");
    const [gmail,setgmail] = useState(""); 
    useEffect(()=>{
        const getGmail = async()=>{
            const localData = await JSON.parse(localStorage.getItem(`dlms-changepass-gmail`));
            setgmail(localData);
        }
        getGmail();
    },[])

    const passValidation = () =>{
        if (password.length < 8) {
          toast.error("Password should be greater than 8 characters !!",{
            position : "bottom-right",
            autoClose:8000,
            theme:"dark",
            pauseOnHover:true
          });
          return false;
        }else if (password === "") {
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

    const submitNewPass = async(event) => {
        event.preventDefault();
        if (passValidation()) {
            const res = await axios.post(changePassRoute,{gmail,password});
            navigate('/login');
        }
    }

    return(
    <div className="mainLogChange">
        <div className="changeCard">
            <h2>Change Password</h2>
            <form method="POST" onSubmit={(event)=>submitNewPass(event)}>
                <div className="changePass">
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="changePassInput" placeholder="New Password" />
                </div>
                <div>
                    <button className="changePassBut"  >Set Password</button>
                </div>
            </form>
        </div>
        <ToastContainer />
    </div>
    )
}

export default ChangePass;