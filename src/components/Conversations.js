import axios from "axios";
import React, { useEffect, useState } from "react";
import { userRoute } from "../Routes/APIroutes";

export default function Conversations ({isOpen,conversation,currentUser}) {

    const [user,setUser] = useState([]);
    useEffect(()=>{
        const friendId = conversation.members.find(m=>m !== currentUser._id);
        const getUser = async () => {
            const res = await axios(userRoute+friendId);
            setUser(res.data);
        }
        getUser();
    },[]);
    
    
    return(
        <div className="conversation">
            <img 
            className="conversationImage" 
            src={`data:image/svg+xml;base64,${user?.AvatarImage}`}
            />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}