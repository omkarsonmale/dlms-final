import React from 'react';
import LogIn from './Login';
import { NavLink,useNavigate } from 'react-router-dom';
import '../components/Explore.css';
import team1 from "./Images/team1.png";
import Button from 'react-bootstrap/Button';
const img = "https://th.bing.com/th/id/OIP.kzNUH36DI0lAN7QCvIpoIAHaFd?pid=ImgDet&w=1200&h=886&rs=1";

export default function Explore() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container" id="exp1">
                <div className='home-main'>
                        <div className="content">
                            <h1>Welcome to Techventure</h1>

                            <p className='p'>A resource sharing platform for keen learners around the globe</p>
                            {/* <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et .</p> */}

                            <div className='exploreBut'>
                                <button onClick={()=>{navigate('/login')}} className="btn btn-primary explore" id='button'>EXPLORE</button>
                            </div>
                            <br />
                        </div>
                        <div className="image">
                            <img className="responsive" src={team1} alt='display' />
                        </div>
                </div>

                <section className='motiv-container motiv-style' id='motiv1'>
                    <hr />
                    <div className='motiv-content'>
                        <div className='motiv-head'><h1>MOTIVATION</h1></div>
                        <p className='p2'>Are you confused about how to get started in your domain? Want to stay updated with information of upcoming technologies? Or finding a cool project for college ? .Here , are we to help you.
                         Proxy Engineers provides you a platform for getting started with absolute roadmap as well as we provide suggestions regarding project.
                        Also our platform provides you one stop solution for getting latest articles regarding your niche technology in one place. <br/> <span id='span'> Join Our Community! </span></p>
                    </div>
                    <hr />
                </section>
            </div>


        </>
    )
}
