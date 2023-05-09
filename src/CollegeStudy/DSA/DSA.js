import "./DSA.css";
import Iframe from 'react-iframe';
import Newnavbar from "../../newnavbar";
export default function DSA() {
    return (
        <div className="dsa">
            <Newnavbar />
            <div className="roadmap">
                <Iframe url="https://whimsical.com/embed/G3wE4akUPyeLkDdKS786HZ"
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
                        <h2 class="card__title">Sorting Algorithms Visualizer: Implement and visualize different sorting algorithms such as bubble sort, insertion sort, merge sort, etc.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://visualgo.net/en/sorting" id="tteext" target={"_blank"}> Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-2" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Pathfinding Algorithms: Implement pathfinding algorithms such as Dijkstra's Algorithm, A* algorithm, etc.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://en.wikipedia.org/wiki/Pathfinding" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-3" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Hash Table: Implement a hash table data structure and use it to implement a simple dictionary application.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://en.wikipedia.org/wiki/Hash_table" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-4" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Graph Algorithms: Implement graph algorithms such as depth-first search, breadth-first search, etc.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://en.wikipedia.org/wiki/Graph_theory" id="tteext" target={"_blank"}>Explore More<i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                    <div class="card card-5" id="leftcard">
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Compression Algorithms: Implement text compression algorithms such as Huffman coding or LZW compression.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://en.wikipedia.org/wiki/Data_compression" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>

                    <div class="card card-1" id="rightcard" >
                        <div class="card__icon"><i class="fas fa-bolt"></i></div>
                        <p class="card__exit"><i class="fas fa-times"></i></p>
                        <h2 class="card__title">Knapsack Problem: Implement a solution to the 0/1 knapsack problem using dynamic programming.</h2>
                        <p class="card__apply">
                            <a class="card__link" href="https://en.wikipedia.org/wiki/Knapsack_problem" id="tteext" target={"_blank"}>Explore More <i class="fas fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}