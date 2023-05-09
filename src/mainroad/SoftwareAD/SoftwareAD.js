import "./SoftwareAD.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function SoftwareAD() {
    return (
        <div className="softwaread">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/yUiLpZjg5He5Vmicv4Ngt"
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
                        <h2 class="card__title">Enterprise Resource Planning (ERP) system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/c9HfNg4a_Og" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Healthcare management system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/ECwmWJNMrIU" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop an online marketplace where buyers and sellers can trade goods and services.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/spree/spree" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a CMS that allows users to create, manage, and publish content on a website.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/refinery/refinerycms" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Build a cloud-based SaaS application that can be accessed from any device and platform. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/maurobonfietti/saas-starter-kit" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Design and develop a scalable e-commerce platform with features like user management, product catalog, shopping cart, payment gateway integration, and order tracking. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/DivineITLimited/E-commerce-website" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}