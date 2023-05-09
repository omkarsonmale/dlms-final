import "./Frontend.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function Frontend() {
    return (
        <div className="frontend">
            <Newnavbar />
            <div className="roadmap" id="frontendroad">
                <Iframe url="https://whimsical.com/embed/ABboZxn8rap2zmv5uxhALh@2Ux7TurymMpbj8AtTKfn"
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
                        <h2 class="card__title" >Travel Campanion using Google Maps API</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/watch?v=GDa8kZLNhJ4" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Spotify clone</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://codedamn.com/project/spotify-audio-player-clone" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">pomodoro App</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://codedamn.com/project/pomodoro-app" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Password Generator</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://codedamn.com/project/password-generator" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Magical Commands For Bash </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/championballer/magical-commands-for-bash" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">A Language Translation Tool Using Google Translate API </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/0vQkTya1Qb4" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}