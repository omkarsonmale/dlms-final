import "./OOP.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function OOP() {
    return (
        <div className="oop">
            {/* Navbar  */}
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/V2Yk4a88KAnrHbCuV4HH9z"
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
                        <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" id="tteext"> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="#" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Ut enim ad minim veniam.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="#" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Quis nostrud exercitation ullamco laboris nisi.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="#" id="tteext">Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Ut aliquip ex ea commodo consequat. Duis aute irure dolor.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="#" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="#" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}