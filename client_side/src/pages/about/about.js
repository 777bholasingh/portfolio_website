import React from "react";
import "./about.css";
import logos from './TPO.jpg';
const About = () => {
  return (
    <>
      
        <div className="about" id="abouts">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={logos}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content tecks">
              <h1>About me</h1>
              <p>
                Hey,👋 myself Bhola Singh.I'm from hamirpur ,uttar pradesh.Currently, I am persuing my Bachelor of Technology degree
                in Mechanical Engineering stream from Motilal Nehru National Institute of Technology.I have good <span>Data Structure</span> and  <span>Algorithms</span>  problem  
                 solving skill and knowledge about <span>Frontend web devlopment</span> and backend teck stacks like <span>Node js ,Express js,React js</span>.
                I thrive in fast-paced environments, and my adaptability and problem-solving skills make me an asset when it comes to tackling new challenges.
                 Furthermore, my good communication skills facilitate effective collaboration  within teams.  
              
              </p>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default About;