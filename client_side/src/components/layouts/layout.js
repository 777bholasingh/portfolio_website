import React,{useState} from 'react';
import Home from '../../pages/home/home';
// import {MdOutlineKeyboardDoubleArrowLeft,MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./LAYOUT.css"
import Menu from '../menu_s/menu';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>

<div className="sidebar-section">


        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>


          <div className="sidebar-toggle-icons">
            
          <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={31} />
              ) : (
                <AiOutlineDoubleRight size={31} />
              )}
            </p>

          </div>
          <Menu  toggle={toggle}/>


          
        </div>


        <div className="container">
          <Home/>
        </div>


      </div>
    
    
    
    
    
    </>
  )
}

export default Layout;


