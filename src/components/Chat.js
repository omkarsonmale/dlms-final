import {React, useState, useEffect, useRef} from "react";
import Newnavbar from "../newnavbar";
import "../components/Chat.css";
import Conversations from "./Conversations";
import Message from "./Message";
import { useNavigate } from "react-router";
import axios from "axios";
import { getCurrMsgRoute, getMsgRoute, postConRoute, postNewMsgRoute, userRoute, userRoute2 } from "../Routes/APIroutes";
import {io} from "socket.io-client";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';

const Overlay = ({ isOpen, setIsOpen }) => (
    <div
      onClick={() => setIsOpen(false)}
      className={`overlay ${isOpen ? "open" : ""}`}
    />
  );
  
  const Modal = ({ isOpen,currentUser }) => {
    
    const [searchFriend,setSearchFriend] = useState("");
    const [toBeFriend,setToBeFriend] = useState(null);

    const handleSearch = async (e) =>{
        try {
            const res = await axios.get(userRoute2+searchFriend);
            setToBeFriend(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleAdd = async(e) => {
        const conversation = {
            senderId:currentUser._id,
            receiverId:toBeFriend._id
        }
        try {
            if (currentUser._id === toBeFriend._id) {
                toast.error("Enter valid username !!",{
                    position : "bottom-right",
                    autoClose : 8000,
                    theme : "dark",
                    pauseOnHover : true
                });
                return false;
            }
            const res = await axios.post(postConRoute,conversation);
            if (res.data.status === false) {
                toast.error(res.data.msg,{
                    position : "bottom-right",
                    autoClose : 8000,
                    theme : "dark",
                    pauseOnHover : true
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    return(
    <div className={`modal1 ${isOpen ? "open" : ""}`}>
      <div className="model1Box">
        <h2>ADD NEW FRIEND</h2>
        <div className="modal1Container">
            <div className="modal1ContainerInput">
                <input value={searchFriend} onChange={(e)=>{setSearchFriend(e.target.value)}} className="model1Input" />
            </div>
            <div className="modal1ContainerButton">
                <button onClick={handleSearch} className="modal1Button">Search</button>
            </div>
        </div>
        <div className="modal1FriendList">
                        {
                           toBeFriend && <>
                        <div className="modal1FriendListImg">
                            <img className="FriendListImg" src={`data:image/svg+xml;base64,${toBeFriend?.AvatarImage}`} />
                        </div>
                        <div className="modal1FriendListName">
                            <p>{toBeFriend?.username}</p>
                        </div>
                        <div>
                            <button onClick={handleAdd} className="modal1FriendListBut">
                                ADD
                            </button>
                        </div>
                        </>
                        }
        </div>
        
      </div>
    </div>
  )};

const Chat = () => {
    const navigate = useNavigate();
    const [currentUser,setCurrentUser] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    
    const [isOpen, setIsOpen] = useState(false);
    const socket = useRef();
    const scrollRef = useRef();

    const [receiver,setReceiver] = useState([]);

    useEffect(()=>{
            const friendId = currentChat?.members.find(ele => ele != currentUser._id);
            const getUser = async () => {
                const res = await axios(userRoute+friendId);
                setReceiver(res.data);
            }
            getUser();
    },[currentChat]);

    useEffect(()=>{
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMsg", data => {
            setArrivalMessage({
                sender:data.senderId,
                text:data.text,
                createdAt:Date.now(),
            });
        });
    },[]);

    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && 
        setMessages(prev=>[...prev,arrivalMessage]);
    },[arrivalMessage,currentChat]);

    useEffect(()=>{
        socket.current.emit("addUser",currentUser._id);
        socket.current.on("getUsers",users=>{});
    },[currentUser]);

    useEffect(()=>{ 
        if (!localStorage.getItem(`dlms-app-user`)) {
            navigate('/login');
        }else{
            async function currentUserData(){
                const localData = await JSON.parse(localStorage.getItem(`dlms-app-user`));
                setCurrentUser(localData);
            };
            currentUserData();
        }
    },[]);
    useEffect(()=>{
        const getmsg = async () => {
            try {
                const res = await axios.get(getMsgRoute+currentUser._id);
                setConversations(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        getmsg();
    },[currentUser._id]);
    
    useEffect(()=>{
        const getMsg = async () => {
            try {
                const res = await axios.get(getCurrMsgRoute+currentChat._id);
                setMessages(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        getMsg();
    },[currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender : currentUser._id,
            text : newMessage,
            conversationId : currentChat._id
        };

        const receiverId = currentChat.members.find(member=> member !== currentUser._id)

        socket.current.emit("sendMsg",{
            senderId:currentUser._id,
            receiverId,
            text:newMessage,
        });

        try {
            const res = await axios.post(postNewMsgRoute, message);
            setMessages([...messages,res.data]);
            setNewMessage("");
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"});
    },[messages])

    

    return(
    <>
    <Newnavbar />
    <div className="messenger">
        <div className="chatMenu">
            <div className="chatMenuWrapper">
                <button onClick={() => setIsOpen(true)} className="buttonFriendSearch">Add friends</button>
                <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
                <Modal currentUser={currentUser} isOpen={isOpen} />
                <div className="chatMenuBox">
                    {
                        conversations.map((c)=>(
                            <div onClick={()=>setCurrentChat(c)}>
                                <Conversations isOpen={isOpen} conversation={c} currentUser={currentUser} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <div className="chatBox">
            <div className="chatBoxWrapper">
                {
                        currentChat ?
                    <>
                    <div className="chatBoxTop">
                    {
                        messages.map((m)=>(
                            <div ref={scrollRef}>
                                <Message message={m} own={m.sender === currentUser._id} current={m.sender === currentUser._id ? currentUser : receiver}/>
                            </div>
                            ))
                    }
                    </div>
                    <div className="chatBoxBottom">
                        <div className="messageInputContainer">
                            <input value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} className="chatMessageInput" placeholder="Write Something..." />
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="chatSubmitButton"><SendIcon/></button>
                        </div>
                    </div>
                    </> : <span>Select A Chat....</span>
                }
            </div>
        </div>
        <ToastContainer />
    </div>
    </>
    )
}

export default Chat;