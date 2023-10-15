import React,{useState} from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import "./contact.css"
import {GrLinkedin} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
const Contact = () => {

      const [name, setname] = useState("");
      const [email, setEmail] = useState("");
      const [msg, setMsg] = useState("");
    
      //handle submit button
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if (!name || !email || !msg) {
            toast.error("PLease Provide all fields");
          }
          const res = await axios.post("/api/users/sendemail", {
            name,
            email,
            msg,
          });
          //validation success
          if (res.data.success) {
            toast.success(res.data.message);
            setname("");
            setEmail("");
            setMsg("");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
        }
      };
    




  return (
<>
        
 <div className='contact' id='contacts'>


                 <div className='card card0 barder-0'>

                        <div className='row'>
                                  < div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>

                                         <div className='card1'>

                                                  <div className='row border-line'>

                                                         <img    src='https://st.depositphotos.com/1038076/3604/i/450/depositphotos_36042091-stock-photo-contact-us.jpg'    alt='contact' className='image'      />

                                                  </div>


                                         </div>

                                    </div>
                                      <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                                            
                                            
                                            <div className='card2 d-flex card border-0 px-3 py-3'>
                                                  <div className='row'>
                                           
                                                        <h6>Contact with 
                                                 <a href='https://www.linkedin.com/in/bhola-singh-b39a4a234'> <GrLinkedin color='blue' size={31} className='ms-2'  /> </a> 
                                                  <a  href='https://github.com/777bholasingh'>  <BsGithub color='black' size={31} className='ms-2'/>  </a>
                                                  
                                                      

                                                        </h6>
                                                   </div>
                                                    <div className='row px-3 mb-4'>
                                                        
                                                        <div className='line' />
                                                              <small className='or text-center'>Or</small>
                                                      
                                                        < div className='line' />
                                                        
                                                        
                                                    </div>   

                                                   <div className='row px-3'>

                                                <input  type='text' name='name' placeholder='write your name'  className='mb-3'    
                                                
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                                
                                                />


                                                   </div>


                                                   
                                                  <div className='row px-3'>

                                                <input  type='email' name='email' placeholder='enter your email'  className='mb-3'    
                                                
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                />


                                                   </div>



                                                      <div className='row px-3'>

                                                <textarea  type='text' name='msg' placeholder='write your message'  className='mb-3'      
                                                
                                                value={msg}
                                                onChange={(e) => setMsg(e.target.value)}
                                                
                                                />


                                                   </div>

                                               <div className='row px-3'>

                                               <button className='button' onClick={handleSubmit}>Send Message</button>


                                                   </div>


                                            </div>   

                                      </div>

                                  



                        </div>









                 </div>
                
            
            
            
            
            
</div> 
        
        
        
        
        
        
        
        
        
 </>
  )
}

export default Contact;