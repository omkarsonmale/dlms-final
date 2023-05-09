
import {usestate,useEffect, useState} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Blogs.css";
import Navbar from './Navbar';
//http://api.mediastack.com/v1/news? access_key = ecc76bbf4c11c63174c5d3fcccacc0be& keywords = tennis& countries = us, gb, de
//http://api.mediastack.com/v1/news?access_key=ecc76bbf4c11c63174c5d3fcccacc0be&categories=technology
//Issue in blogs
const Blogs=()=>{
  const [news,setNews] = useState([]);
  
useEffect(()=>{
  const getData = async () => {
    axios.get("http://api.mediastack.com/v1/news? access_key = ecc76bbf4c11c63174c5d3fcccacc0be& keywords = tennis& countries = us, gb, de")
    .then((res)=>{
    console.log(res.data.data);
     setNews(res.data.data)
    })
}
  getData();
},[])
  return(<>
  <Navbar/>
   <div className="blogscontainer ">
    <div className="row text-center">
    <div className="col">
    

    {
      news.map((article,index)=>{
                        return(
                         
                          <div className="card" style={{width: "30rem"}}>
                            <img src={article.image} class="card-img-top" />
                            <div class="card-body">
                              <h5 class="card-title" id="articaltitle">{article.title}</h5>
                              <p class="card-text" >{article.description}</p>
                              <a href={article.url} class="btn btn-primary" target={"_blankcd"}>Explore more</a>
                            </div>
                          </div>
                       
                        );
                    })    
    }
    </div>

    </div>
  </div> 

  
  </>)
}
export default Blogs;