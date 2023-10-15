import React from 'react'
import "./edu.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdCastForEducation} from "react-icons/md"
const Education = () => {
  return (


   <>
          <div className=' education' id='education'>

          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase tecks">
         Education Details
        </h2>
        
        <hr />
        <VerticalTimeline>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FBEAFF", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2015 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">HIGH SCHOOL</h3>
            <h4 className="vertical-timeline-element-subtitle">
              K P INTER COLLEGE HAMIRPUR, IN
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FBEAFF", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2017 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">INTERMEDIATE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              SARDAR PATEL INTER COLLEGE KANPUR, IN
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FBEAFF", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2020 - 2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-title">BACHELOR OF TECHNOLOGY</h3>
            <h4 className="vertical-timeline-element-subtitle">
              NIT ALLAHABAD, IN
            </h4>
          </VerticalTimelineElement>






          
        </VerticalTimeline>
        
 
  </div>

    </> 
  )
}

export default Education