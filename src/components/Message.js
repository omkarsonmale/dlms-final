import React, { useEffect, useState } from "react";
import {format} from "timeago.js";
import { userRoute } from "../Routes/APIroutes";
import axios from "axios";

const Message = ({message,own,current}) => {

    return(
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src={`data:image/svg+xml;base64,${current?.AvatarImage}`} />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}

export default Message;