import Navbar from './Navbar';
import React from 'react';
import './CollegeStudy.css';
import { NavLink } from 'react-router-dom';
import DSA from "./imglink/DSA.jpg";
import CNS from "./imglink/CNS.jpg";
import CC from "./imglink/CC.jpg";
import DBadmin from "./imglink/DBadmin.webp";
import JAVA from "./imglink/JAVA.jpg";
import Designsys from "./imglink/Designsys.jpg";
import python from "./imglink/python.png";
import oop from "./imglink/oop.png";
const size = {
  width: "30rem"
}
const size2 = {
  width: "30rem",

}
const blan = {
  target: "  blank"
}

function Development() {
  return (
    <>
      <Navbar />
      <div className='omkson'>
        <div class="card" style={size}>
          <img src={DSA} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>DSA</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to fluently learn  Data Structures and Algorithms.</p>
          
              <NavLink to={'/dsa'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
            


          </div>
        </div>
        <div class="card" style={size}>
          <img src={JAVA} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>Java</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to becoming a modern Java Developer.</p>
       
              <NavLink to={'/java'} className="btn btn-primary explore" id='cardsbtncol2'>Explore</NavLink>
            
          </div>
        </div>
        <div class="card" style={size}>
          <img src={python} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>Python</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to becoming a modern Python Developer.</p>
         
              <NavLink to={'/python'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={DBadmin} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>Database</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to becoming a modern Database Development.</p>
    
              <NavLink to={'/database'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
           
          </div>
        </div>

      </div>
      <div className='omksonmale2'>
        <div class="card" style={size}>
          <img src={oop} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>OOP</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to fluently learn Object Oriented programming.</p>
    
              <NavLink to={'/oop'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={Designsys} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>Design system</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to fluently learn Design System and make some interactive designs.</p>
            
              <NavLink to={'/os'}  className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
          
          </div>
        </div>
        <div class="card" style={size}>
          <img src={CNS} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>CNS</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to fluently learn Computer Networking System.</p>
           
              <NavLink to={'/cns'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={CC} class="card-img-top" alt="..." style={{ height: "200px" }} />
          <div class="card-body">
            <h5 class="card-title" id='dsat'>Cloud Computing</h5>
            <p class="card-text" id='dsap'>Step by step guide and source to fluently learn Cloud Computing and Deployment~.</p>
         
              <NavLink to={'/computerscience'} className="btn btn-primary explore" id='cardsbtncoll'>Explore</NavLink>
          
          </div>
        </div>
      </div>
    </>
  );
}
export default Development;