import "./OS.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function OS() {
    return (
        <div className="os">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/FesR57F5nk4bRhExfvdT1W"
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
                        <h2 class="card__title">Develop a component library that includes UI elements like buttons, forms, menus, and icons.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/ant-design/ant-design" id="tteext"> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a style guide that defines the brand guidelines, typography, color palette, and imagery for a product or brand.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://github.com/airbnb/lottie-android/tree/master/LottieSample/src/main/assets" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Define design tokens like colors, typography, spacing, and sizes that can be used across the product or brand.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://github.com/atlassian/brand-guidelines/tree/master/design-tokens" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title"> Build a pattern library that includes common design patterns like search, navigation, and filtering. .</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/nadavshaar/react-components-library" id="tteext">Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a comprehensive documentation that covers the design system components, guidelines, and usage instructions.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/densitydesign/raw.githubusercontent.com/master/lab-projects/ondata-design-system/styleguide/index.html" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">online courier service</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/JQ_awALyvMM" id="tteext">Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}