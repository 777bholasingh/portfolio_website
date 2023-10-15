import React from 'react'
import "./mobile.css"
import {ImMenu3,ImMenu4} from "react-icons/im"
import { useState } from 'react'

import {FcHome,FcAbout,FcBusinessContact,FcReadingEbook,FcAndroidOs,FcPackage}  from "react-icons/fc"
import { Link } from 'react-scroll'




const Mobile = () => {




    const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // for handling menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  
  return (
    <>
    
      <div className='mobile-nav'>
       
           <div className='mobile-header'>
           {open ? 
           (
            <ImMenu4
              size={25}
              className="menu-icon"
              onClick={handleOpen}
            />
            ) :
          
          (
            <ImMenu3 size={25} className='menu-icon' onClick={handleOpen}/>
          )}

             
     <span className='header-title'> My Portfolio Website</span>
           </div>
             {open&&(

           <div className='mobile-menus' >

                         <div className="nav-items">

              <div className="nav-item"> 




                <div className="nav-link">
                  <Link to="home"
                   spy={true}
                   smooth={true}
                   offset={-100}
                   duration={100}
                   onClick={handleMenuClick}
                   >

                  <FcHome/>        
                    Home
                  </Link>
                    
                </div>
                

                
                <div className="nav-link">
               <Link to="abouts"
               spy={true}
               smooth={true}
               offset={-100}
               duration={100}
               onClick={handleMenuClick}
               >
               <FcAbout/>  
                    About
               </Link>
                </div>
                

                
                <div className="nav-link">
                <Link to="education"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 onClick={handleMenuClick}
                 >
                <FcReadingEbook/>  
                    Education
                </Link>
                </div>
               

                
                <div className="nav-link">
                <Link to="techstacks" 
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 onClick={handleMenuClick}
                 >
                <FcAndroidOs/>  
                    Techskills
                </Link>
                </div>
                

                
                <div className="nav-link">
                <Link to="projects"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 onClick={handleMenuClick}
                 >
                <FcPackage/>  
                    Projects
                
                </Link>

                </div>
                

                
                <div className="nav-link">
                <Link to="contacts"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 onClick={handleMenuClick}
                 >
                <FcBusinessContact/>  
                    Contacts
                </Link>
                </div>

      </div>  
      </div> 








           </div>
           )};





      </div>
    
    
    
    
    </>
  )
}

export default Mobile