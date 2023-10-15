import React from 'react'

import "./home.css"
 import Typewriter from "typewriter-effect";

 import { useTheme } from '../../context/themecontext';
 import resume from './Bhola_singh_resume.pdf';
import {BsMoonStarsFill} from "react-icons/bs"
import {FiSun}  from "react-icons/fi"
import Fade from "react-reveal/Fade";



const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className='container-fluid home-container ' id='home'>
   <div className='theme-btn' onClick={handleTheme}>
   {theme === "light" ? (
            < FiSun size={30}  />
          ) : (
            < BsMoonStarsFill  size={30} color='black' />
          )}
   </div>   
    
           <div className='container home_content'>
           <Fade>
           <h4>Hello 👋 I'm </h4>
           <span id='txt'>
            <h1> 
               <Typewriter
                options={{
                  strings: [
                    'Bhola Singh',
                    "Production Engineering Student",
                    "MNNIT Allahabad",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              /> 
              

            </h1>
            </span>
            </Fade>
            <div className="home-buttons">
            <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9936548831"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
               
               <a   className='btn btn-resume' href={resume} download="Resume.pdf" > Resume</a> 
               
            
            </div>


           </div>

    </div> 
  )
}

export default Home;