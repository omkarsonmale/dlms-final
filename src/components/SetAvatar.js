import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { Buffer } from "buffer";
import { setAvatarRoute } from "../Routes/APIroutes";

const SetAvatar = () =>{
    const api = "https://api.multiavatar.com";
    const api_key = "?apikey=l2v8tFrQ1VdHUS";
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-left",
        autoClose: 8000,
        theme: "dark",
        pauseOnHover: true,
    }
    // useEffect(()=>{
    //     if (localStorage.getItem(`chat-app-user`)) {
    //       navigate('/dash');
    //     }
    //   },[]);
    const [avatars,setAvatars] = useState([]);
    const [isloading,setisLoading] = useState(true);
    const [selectedAvatar,setSelectedAvatar] = useState(undefined);
    const setProfilePicture = async () => {
        if (selectedAvatar===undefined) {
            toast.error("Please select an avatar !!",toastOptions);
        }else{
            const user = await JSON.parse(localStorage.getItem(`dlms-app-user`));
            const res = await axios.post(`${setAvatarRoute}/${user._id}`,{ image:avatars[selectedAvatar] });
            if (res.data.isSet) {
                user.isAvatarImageSet = true;
                user.AvatarImage = res.data.image;
                localStorage.setItem(`dlms-app-user`,JSON.stringify(user));
                navigate("/development");
            }else{
                toast.error("Error !! Try again. ",toastOptions);
            }
        }
    };
    useEffect(()=>{
        async function fetchdata (){
            const data = [];
            for (let i = 0; i < 4; i++) {
                const image = await axios.get(`${api}/${Math.round(Math.random()*1000)}${api_key}`);
                const buffer = new Buffer(image.data);
                data.push(buffer.toString("base64"));
            }
            setAvatars(data);
            setisLoading(false);
        }
        fetchdata();
    },[]);
    return(<>
    {
        isloading ? (
            <>
            <div className="container-avatar">
                <span class="loader"></span>
            </div>
            </>
        ) : (
            <>
            <div className="container-avatar">
                <div className="title-avatar">
                    <h1>Pick an avatar for profile image</h1>
                </div>
                <div className="avatars">{
                    avatars.map((avatar,index)=>{
                        return(
                            <div key={index} className={`avatar ${selectedAvatar === index ? "selected" : ""}`}>
                                <img 
                                width="150px"
                                src={`data:image/svg+xml;base64,${avatar}`} 
                                alt="avatar" 
                                onClick={()=>{setSelectedAvatar(index)}}
                                />
                            </div>
                        );
                    })    
                }</div>
                <button onClick={()=>{setProfilePicture()}} className="setProfilebtn">Set Profile Picture</button>
            </div>
            <ToastContainer />
            </>
        )
    }
    </>);  
}

export default SetAvatar;