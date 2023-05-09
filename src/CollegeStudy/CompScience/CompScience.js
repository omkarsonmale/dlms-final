
import "./CompScience.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
/* cloud computing instead of computer science */
export default function CompScience() {
    return (
        <div className="compscience">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/7iDCdtSf5d5NahuR18Vdu3"
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
                        <h2 class="card__title">Develop a cloud-based storage service like Dropbox or Google Drive using cloud platforms like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/owncloud/core" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Build a serverless application using cloud platforms like AWS Lambda or Azure Functions. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/serverless/examples" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Deploy and manage containerized applications using container orchestration platforms like Kubernetes or Docker Swarm. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/kubernetes/kubernetes" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop automation scripts using tools like Ansible or Terraform to automate cloud infrastructure provisioning and management.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/ansible/ansible" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop a web application using cloud platforms like AWS Elastic Beanstalk or GCP App Engine. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-examples/appengine" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Detection of Data Leaks Using SQL Injection Prevention</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/i6nlKqJJNkM" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}