import React from 'react'
import"./menu.css";
import { Link } from 'react-scroll'
import {FcHome,FcAbout,FcBusinessContact,FcReadingEbook,FcAndroidOs,FcPackage}  from "react-icons/fc"

import Rotate from 'react-reveal/Rotate';

import Fade from "react-reveal/Fade";
const Menu = ({toggle}) => {
  return (
    <>
      {  toggle?(
      <>
        <Rotate>
       <div className='profile-picture'>
        < img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIoqZab8LRz1kdm5AQ64Dh1Wc4pHbYT-OWA&usqp=CAU' alt="profile-img" />

       </div>
       </Rotate>
      <Fade>
       <div className="nav-items">

              <div className="nav-item"> 




                <div className="nav-link">
                  <Link to="home"
                   spy={true}
                   smooth={true}
                   offset={-100}
                   duration={100}
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
                 >
                <FcBusinessContact/>  
                    Contacts
                </Link>
                </div>

      </div>  
      </div> 
      </Fade>


      </>
      ):
      
      (
       <>
<div className="nav-items">
<div className="nav-item">



  <div className="nav-link">
  <Link to="home"
                   spy={true}
                   smooth={true}
                   offset={-100}
                   duration={100}
                   >

                  <FcHome title='Home' size={30} />        
                 
                  </Link>
         
     
  </div>


  
  <div className="nav-link">
  <Link to="abouts"
               spy={true}
               smooth={true}
               offset={-100}
               duration={100}
               >
               <FcAbout title='About' size={30} />  
                  
               </Link>
      
  </div>
  


  <div className="nav-link">
  <Link to="education"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 >
                <FcReadingEbook title='Education' size={30} />  
                </Link>
  
    
  </div>
 

 
  <div className="nav-link">
  <Link to="techstacks" 
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 >
                <FcAndroidOs  title='Techskills' size={30} />  
                </Link>
  
  
  </div>
 

 
  <div className="nav-link">
  <Link to="projects"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 >
                 <FcPackage title='Projects' size={30} />  
                
                </Link>

 
     
  </div>


 
  <div className="nav-link">
  <Link to="contacts"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={100}
                 >
                 <FcBusinessContact title='Contact' size={30}  />  
                </Link>
 
   
  </div>
 

</div>  
</div>   

       </>
      )


      }
 
    </>
  )
}

export default Menu;