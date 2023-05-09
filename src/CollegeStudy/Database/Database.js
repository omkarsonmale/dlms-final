import "./Database.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function Database() {
    return (
        <div className="database">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/8R7adDiyaCxSnwAQKNPnWh"
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
                        <h2 class="card__title">Online shopping system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/N1kE3NL34S4" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Hospital management system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/ewksKnwOR0A" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Inventory management system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/8_lr2XooTHY" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Social media platform</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/VeOhsHkMaKQ" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Library management system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/live/jtfuwnN2NoA?feature=share" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Travel booking system</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/cXcie_Si9bI" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}