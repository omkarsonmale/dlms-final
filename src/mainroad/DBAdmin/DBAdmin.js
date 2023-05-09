import "./DBAdmin.css";
import Newnavbar from "../../newnavbar";
import Iframe from 'react-iframe';
export default function DBAdmin() {
    return (
        <div className="dbadmin">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/HPvx7ngdsY2siMmYa8cicj"
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
                        <h2 class="card__title">To-do list application </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/XXRptlP5P6U" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">E-commerce website</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/SSXA2XluIBU" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Weather app</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/USQkgCHEAOM" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Recipe app</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/tPqnKDBaMLQ" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Blogging platform</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/7kjud2ikReQ" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Fitness tracker</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/KBpoBc98BwM" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}