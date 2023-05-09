import "./Blockchain.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";

export default function Blockchain() {
    return (
        <div className="blockchain">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/FTrAHpVXKyAharT81tyvaf"
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
                        <h2 class="card__title">Crowd Funding Platform</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/watch?v=2SNr-PJmcZE" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Voting System</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/watch?v=qKsu3-Jkas0" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Car Pooling</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/KHXx7ZH7Ruw" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Stock Market for Crypto</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/N8hNe3m4Bm0" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Document Exchange Verification System on Ethereum Blockchain using IPFS</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/UdhsNYHQfis" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Decentralize Google Drive Project</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/fghqq3-P3x0" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}