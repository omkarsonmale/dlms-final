import './Flutter.css';

import Iframe from 'react-iframe';
import Newnavbar from '../../newnavbar';
export default function Flutter() {
    return (
        <div className='flutter'>
            <Newnavbar />
            <div className='roadmap'>
                <Iframe url="https://whimsical.com/embed/F7DV1eGzHH1cWueqiTx4Km"
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
                        <h2 class="card__title">To-Do List app: A simple app to manage tasks and set reminders. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/smartherd/Flutter-Todo-App" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Weather app: A weather app that displays current weather conditions and forecast for a location.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/sudhirgamit/FlutterWeatherApp" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">E-commerce app: A basic e-commerce app that allows users to browse and purchase products. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/coding-with-sam/Flutter-E-Commerce-App" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Recipe app: A recipe app that displays recipes with ingredients and cooking instructions. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/Rochan-A/flutter-recipe-app" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Music player app: A simple music player app that allows users to play and manage their music files.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/iampawan/FlutterMusicPlayer" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">News app: A news app that fetches the latest news articles from an API and displays them in a list.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/flutter-examples/flutter_news" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}