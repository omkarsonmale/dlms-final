import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Logout from "./Logout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserInfo = ({isAvatarSet,User}) => {
    const navigate = useNavigate();

    const setAvatarHandle = () =>{
        
        navigate('/setavatar');
    }

    return(<>
        {
            isAvatarSet ? <AccountCircleIcon sx={{ fontSize: 40 }}/>:
            <img className="UserImgInfo" src={`data:image/svg+xml;base64,${User.AvatarImage}`} />}
        <h1 className="UserNameInfo">{User.username}</h1>
        <div className="UserInfoButton">
            {
                isAvatarSet &&
                <button onClick={setAvatarHandle}>Set AvatarImage</button>
            }
            <Logout />
        </div>
    </>)
}

export default UserInfo;