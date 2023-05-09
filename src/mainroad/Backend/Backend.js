import "./Backend.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function Backend() {
    return (
        <div className="backend">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/JA2yJyP6QijkeyuDJKjSY5"
                    id='frontimg'
                    width="1400px"
                    height="600px"
                    display="block"
                />
            </div>

            <div class="alert alert-primary" role="alert" id="projeheading">Project Ideas
            </div>

            <div class="main-container" id="projectsid">

                <div class="cards">
                    <div class="card card-1" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Student Time Table Planner</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://codedamn.com/project/student-timetable-planner" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">E- commerse Website</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/watch?v=y66RgYMAgSo" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Chat Application</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/watch?v=k4mjF4sPITE" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Full Stack TODO App</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://codedamn.com/project/fullstack-todo-app" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Content Management system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/Vq8wUR0AvYg" id="tteext" target={"_blank"} >Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Video Conferencing Website</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/MJzbJQLGehs" id="tteext" target={"_blank"} >Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}