import React from "react";
import "./AnimCards.css";
import img1 from './Images/undraw_programming.png';
import img2 from './Images/undraw_scrum_board.png';
import img3 from './Images/undraw_my_personal_files.png';
import img4 from './Images/undraw_personal_notebook.svg'
import img5 from './Images/undraw_team_chat.svg'
import img6 from './Images/undraw_selection.svg';



export default function AnimCards() {
    return (
        <>
            <div className="cContainer1">
                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img
                                src={img1} />
                            <h3>Development</h3>
                        </div>
                    </div>

                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p>Whether you're a student, a working professional, or a community member, our roadmap program offers
                                a clear and achievable path to personal and professional growth. And with our diverse range of project
                                offerings, you'll have ample opportunities to apply your knowledge and build your portfolio.
                            </p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img
                                src={img2} />
                            <h3>College Study</h3>
                        </div>
                    </div>
                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p> Our roadmap program offers a clear and concise path for college subjects students and community members to achieve their academic and professional goals. We provide a variety of projects that complement our roadmap program, allowing you to put theory into practice and gain hands-on experience.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img
                                src={img3} />
                            <h3>Linkedin Blogs</h3>
                        </div>
                    </div>
                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p> Our website's feature provides students with the latest technology and programming articles, helping them stay current with the ever-evolving landscape of the tech industry.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="cContainer2">
                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img
                                src={img4} />
                            <h3>Diary</h3>
                        </div>
                    </div>

                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p> Our website's notekeeping diary feature is a powerful tool that helps students stay organized and on top of their academic work, allowing them to quickly jot down notes and important information.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img width='300px'
                                src={img5} />
                            <h3>Chatrooms</h3>
                        </div>
                    </div>
                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p> Our website's chatroom feature provides students with a safe and supportive environment to connect with their peers and collaborate on projects and assignments.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className="cCard">
                    <div className="cFace cFace1">
                        <div className="cContent">
                            <img
                                src={img6} />
                            <h3>TodoList</h3>
                        </div>
                    </div>
                    <div className="cFace cFace2">
                        <div className="cContent">
                            <p> Our website's to-do list feature is a powerful tool that helps you stay organized and on top of your tasks, whether you're managing your personal or professional life.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
