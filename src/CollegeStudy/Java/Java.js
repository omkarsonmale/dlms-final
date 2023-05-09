import "./Java.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function Java() {
    return (
        <div className="java">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/TFMjx8gfTVBqMkgcWMPaJR"
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
                        <h2 class="card__title"> Develop a web application using Java and frameworks like Spring Boot, Hibernate, or Struts. The application can have features like user registration, authentication, and authorization, file upload and download, email integration, and database integration.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/spring-projects/spring-petclinic" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a desktop application using Java and frameworks like JavaFX or Swing. The application can have features like file management, data visualization, reporting, and data analysis..</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/Sciss/ScalaColliderSwing" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop a mobile application using Java and frameworks like Android SDK or JavaFX Mobile. The application can have features like GPS tracking, social media integration, push notifications, and in-app purchases. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/codecov/example-java-android" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a game using Java and frameworks like libGDX or jMonkeyEngine. </h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://github.com/libgdx/libgdx" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Design and develop RESTful APIs using Java and frameworks like Spring Boot or JAX-RS. The APIs can have features like token-based authentication, API documentation using Swagger, and database integration. </h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://github.com/spring-projects/spring-boot/tree/main/spring-boot-samples/spring-boot-sample-webflux" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Music Player - A music player that allows users to play, pause, and skip songs, as well as create playlists.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://hibernate.org/orm/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}