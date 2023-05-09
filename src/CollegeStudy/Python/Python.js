import "./Python.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function Python() {
    return (
        <div className="python">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/Soz9kgs9ADJ8rfEv7WHty8"
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
                        <h2 class="card__title">Budgeting Application - A budgeting application that helps users track their expenses and income.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="http://flask.pocoo.org/" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Weather Application - A weather application that displays the current weather conditions and forecast for a specified location.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.djangoproject.com/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Quiz Application - A quiz application that allows users to test their knowledge on a variety of topics.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="http://www.numpy.org/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Image Recognition Application - An image recognition application that can identify objects within an image.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://matplotlib.org/" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Web Scraper - A web scraper that can extract data from websites and save it to a file.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://opencv.org/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Calculator Application - A calculator application that performs basic arithmetic operations and advanced mathematical functions.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.crummy.com/software/BeautifulSoup/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}