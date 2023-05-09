import "./Android.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";

export default function Android() {
    return (
        <div className="android">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/8uMKW9AMExH7BL3v9AmxzD"
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
                        <h2 class="card__title">Weather App - An app that displays current weather information and forecasts for a specific location.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://openweathermap.org/api)" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Recipe App - An app that allows users to browse and save recipes, with the option to add ingredients to a grocery list.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://spoonacular.com/food-api" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Music Player App - A simple music player app that allows users to play, pause, skip, and repeat songs.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://developer.android.com/guide/topics/media/mediaplayer" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Flashcard App - An app for creating and managing flashcards for studying.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://developer.android.com/topic/libraries/architecture/room" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">To-do List App - A simple app for managing a to-do list, allowing users to add, edit, and delete tasks.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.tutorialspoint.com/android/android_sqlite_database.htm" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Social Media App</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/TqE8Ji_R_Qw" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}