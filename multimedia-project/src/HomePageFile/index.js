import React from "react";
import "./index.css"

const Homepage = () => {
  return(
    <div id="container">
<div className ='navigation'>
  
               <img src ='.public/images/logo-removerbg-preview.png' alt ="" className="logo"></img>
            <nav>
                <ul>
                <li className="home">Home</li>
                <li >Video</li>
                <li>Writing</li>
                <li>Podcast</li>
                <li>Resume</li>
                </ul>
            </nav>
           </div>
           <div>
            <h1 id="pageWords">Explore our insightful articles, educational videos, engaging blog posts, and informative podcast episodes now</h1>
            <button>Explore now</button>
           </div>
           </div>
           );
           };
   export default Homepage;
