import React from "react";
import { useTheme } from "./context/themecontext";
import Layout from "./components/layouts/layout";

import About from "./pages/about/about";
import Education from "./pages/edu/edu";
import Techstack from "./pages/techstacks/techstack";
import Project from "./pages/projects/project";
import Contact from "./pages/contacts/contact";
import ScrollToTop from "react-scroll-to-top";
import Bounce from 'react-reveal/Bounce';
import Mobile from "./components/mobile/mobile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const [theme] = useTheme();

  return (
    <>
     <div id={theme}>
     <ToastContainer />
      <Mobile/>
<Layout/>
<div className="container">
<About/>
<Education/>
<Techstack/>
<Project/>
<Contact/>
</div>
<Bounce>
<div className="footer">
   <h6 className="text-center">
     😍 Website designed and devloped by Bhola Singh
   </h6>
</div>
</Bounce>
</div>
<ScrollToTop smooth 
  color="#272829"
    style={{backgroundColor:"#94ADD7",borderRadius:"85px"}}

/>

    </>
  );
}

export default App;
