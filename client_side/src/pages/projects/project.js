import React from 'react'
import "./project.css"
import Rotate from "react-reveal/Rotate";
import LightSpeed from 'react-reveal/LightSpeed';

const Project = () => {
  return (
    <>
    
<div className='project' id='projects'>
              <LightSpeed>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase tecks">
          TOP RECENT PROJECTS
        </h2>
        </LightSpeed>
        <hr />
        <p className="pb-3 text-center">
       <h6>  👉 I have created Weather forecast and  my Portfolio  Website web application</h6>
        
        </p>
   
             <div className='row' id='ads'>

                   <div className='col-md-6'>

                   <Rotate>
                          <div className='card rounded'>


                                <div className='card-image'>

                                            <span className='card-notify-badge'>PORTFOLIO WEBSITE</span>

                                             <img src='https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?size=626&ext=jpg&ga=GA1.2.2007906575.1692178869&semt=ais'/>
                                

                                 </div>

                                 <div className='card-image-overly m-auto mt-4'>

                                           
                                            <span className='card-details-badge'>NODE JS</span>
                                            <span className='card-details-badge'>EXPRESS JS</span>
                                            <span className='card-details-badge'>REACT JS</span>
                                            <span className='card-details-badge'>MONGOdb</span>
                                           
                                

                                 </div>

                                 <div className='card-body text-center'>

                                          <div className='ad-title m-auto'>

                                             <h6 className='text-uppercase'>My Portfolio website</h6>

                                         </div>
                                           <a className='ad-btn' href='#'> view</a>
                                         

                                 </div>




                          </div>
                         
                  
                    
                    
                    
                    
                          </Rotate>
                    </div> 
                   


















                    <Rotate>

                   <div className='col-md-6'>


                          <div className='card rounded'>


                                <div className='card-image'>

                                            <span className='card-notify-badge'>WEATHER FORECAST</span>

                                             <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000'/>
                                

                                 </div>

                                 <div className='card-image-overly m-auto mt-4'>

                                           
                                            <span className='card-details-badge'>HTML</span>
                                            <span className='card-details-badge'>CSS</span>
                                            <span className='card-details-badge'>JAVASCRIPT</span>
                                            <span className='card-details-badge'>WEATHER API</span>
                                           
                                

                                 </div>

                                 <div className='card-body text-center'>

                                          <div className='ad-title m-auto'>

                                             <h6 className='text-uppercase'>WEATHER FORECAST WEBSITE</h6>

                                         </div>
                                           <a className='ad-btn' href='#'> view</a>
                                         

                                 </div>




                          </div>
                         
                  
                    
                    
                    
                    
                    
                    </div>          

                    </Rotate>
                    
                    
                    
                             




             </div>


   </div>
    
   </>   
    
    
    

  );
}

export default Project