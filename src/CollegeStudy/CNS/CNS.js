import "./CNS.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";

export default function CNS() {
    return (
        <div className="cns">

            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/VCED1tTTs3tHpxmzfpZ4CR"
                    id='frontimg'
                    width="1400px"
                    height="600px"
                    display="block"
                />
            </div>
            x
            <div class="alert alert-primary" role="alert" id="projeheading">Project Ideas
            </div>

            <div class="main-container" id="projectsid">

                <div class="cards">
                    <div class="card card-1" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop a network monitoring tool that can monitor the network traffic, analyze network performance, and detect security threats. </h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/saifkhichi96/network-monitoring-tool" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title"> Build a VPN service that can provide secure remote access to the network.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/Nyr/openvpn-install" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Create a network simulation tool that can simulate various network topologies and protocols.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/GNS3/gns3-gui" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Smoke Detection and Fire Prevention system using Cisco Packet Tracer</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://youtu.be/pU3JLKdaaE8" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Develop a network automation tool that can automate network configuration and management tasks.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/ansible/ansible" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Build a DNS server that can resolve domain names to IP addresses.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://github.com/pi-hole/pi-hole" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}