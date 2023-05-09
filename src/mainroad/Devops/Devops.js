import "./Devops.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";

export default function Devops() {
    return (
        <div className="devops">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/RLSSiw2nQBo7B7zkJJFRfF"
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
                        <h2 class="card__title"> Build a CI/CD pipeline to automate the process of building, testing, and deploying software applications. </h2>
                        <p class="card__apply">

                            <a class="card__link" href="https://docs.gitlab.com/ee/ci/" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                            {/* <a class="card__link" href= https://jenkins.io/doc/" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                            <a class="card__link" href=" https://docs.travis-ci.com/" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a> */}

                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Infrastructure as Code (IaC) using Terraform: Automate the provisioning and management of infrastructure resources using Terraform.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.terraform.io/docs/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                            {/* <a class="card__link" href="https://learn.hashicorp.com/terraform" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a> */}
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Containerization using Docker: Containerize a sample application and automate the deployment process using Docker. </h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://docs.docker.com/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                            {/* <a class="card__link" href=" https://docker-curriculum.com/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                             */}
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Logging and Monitoring: Set up logging and monitoring for an application to keep track of logs and performance metrics.</h2>
                        <p class="card__apply">
                            <a class="card__link" href=" https://www.elastic.co/products" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                            {/* <a class="card__link" href="https://prometheus.io/docs/" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                            <a class="card__link" href=" https://docs.nagios.com/" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a> */}
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Automated Testing: Automate the testing of a sample application using tools such as Selenium, JUnit, etc.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.selenium.dev/documentation/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                            {/* <a class="card__link" href="https://junit.org/junit5/docs/current/user-guide/" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                            <a class="card__link" href="https://testng.org/doc/index.html" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a> */}
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">DevOps project for beginner</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://www.youtube.com/live/cnA6AwUeiHU?feature=share" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}