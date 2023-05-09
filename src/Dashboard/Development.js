import React from 'react';
import './Development.css';
import { NavLink } from 'react-router-dom';
import frontend from "./imglink/frontend.png";
import backend from "./imglink/backend.png";
import blockchain from "./imglink/blockchain.png";
import android from "./imglink/android.jpg";
import flutter from "./imglink/flutter.png";
import devops from "./imglink/devops.png";
import reactjs from "./imglink/reactjs.png";
import seimg from "./imglink/seimg.webp";
const size = {
  width: "30rem"
}
const size2 = {
  width: "30rem",

}
function Development() {
  return (
    <>
      <div className='parent1'>

        <div class="card" style={size}>
          <img src={frontend} class="card-img-top" alt="..." />
          <div class="card-body">

            <h5 class="card-title" id='title'>Frontend Development</h5>
            <p class="card-text" id='p'>Step by step guide and source to becoming a modern Frontend Developer.</p>
           
              <NavLink to={'/frontend'}  className="btn btn-primary explore" id='cardsbtn'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={backend} class="card-img-top" alt="..." />
          <div class="card-body">

            <h5 class="card-title" id='title2'>Backend Development</h5>
            <p class="card-text" id='p2'>Step by step guide and source to becoming a modern Backend Developer.</p>
        
              <NavLink to={'/backend'} className="btn btn-primary explore" id='cardsbtn2'>Explore</NavLink>
            
          </div>
        </div>
        <div class="card" style={size}>
          <img src={android} class="card-img-top" alt="..." id='img3' />
          <div class="card-body">

            <h5 class="card-title" id='title3'>Android Development</h5>
            <p class="card-text" id='p3'>Step by step guide  and sourceto becoming a modern Android Developer.</p>
          
              <NavLink to={'/androiddevlopment'} className="btn btn-primary explore" id='cardsbtn3'>Explore</NavLink>
           
          </div>
        </div>

        <div class="card" style={size}>
          <img src={flutter} class="card-img-top" alt="..." style={{ size: "100px" }} />
          <div class="card-body">

            <h5 class="card-title" id='title'>Flutter Development</h5>
            <p class="card-text" id='p'>Step by step guide and source to becoming a modern Flutter Developer.</p>
          
              <NavLink to={'/flutterdevlopment'} className="btn btn-primary explore" id='cardsbtn11'>Explore</NavLink>
          
          </div>
        </div>
      </div>

      <div className='child'>

        <div class="card" style={size2}>
          <img src={devops} class="card-img-top" alt="..." style={{ height: "20.5rem" }} />
          <div class="card-body">
            <h5 class="card-title" id='title5'>DevOps Development</h5>
            <p class="card-text" id='p5'>Step by step guide and source to becoming a modern DevOps Developer.</p>
           
              <NavLink to={'/devops'} className="btn btn-primary explore" id='cardsbtn4'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={blockchain } class="card-img-top" alt="..." />
          <div class="card-body">

            <h5 class="card-title" id='title6'>Blockchain Development</h5>
            <p class="card-text" id='p6'>Step by step guide and source to becoming a modern BlockChain Developer.</p>
           
              <NavLink to={'/blockchain'} className="btn btn-primary explore" id='cardsbtn5'>Explore</NavLink>
          
          </div>
        </div>
        <div class="card" style={size}>
          <img src={reactjs} class="card-img-top" alt="..." style={{ height: "20.5rem" }} />
          <div class="card-body">

            <h5 class="card-title" id='title7'>React Developer</h5>
            <p class="card-text" id='p7'>Step by step guide and source to becoming a modern React Developer.</p>
          
              <NavLink to={'/databaseadmin'} className="btn btn-primary explore" id='cardsbtn6'>Explore</NavLink>
           
          </div>
        </div>
        <div class="card" style={size}>
          <img src={seimg} class="card-img-top"  style={{ height: "20.5rem" }} />
          <div class="card-body">

            <h5 class="card-title" id='title8'>Software Architect Developer</h5>
            <p class="card-text" id='p8'>Step by step guide and source to becoming a modern Software Architect  Developer.</p>
          
              <NavLink to={'/softwarearchitect'} className="btn btn-primary explore" id='cardsbtn7'>Explore</NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Development;