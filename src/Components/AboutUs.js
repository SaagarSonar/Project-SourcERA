import { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Vision } from "./Vision";
import './AboutUs.css';
import { AboutWhy } from "./AboutWhy";

export class AboutUs extends Component{
    render(){
        return(
            <>
        <div className="about-text">
            <h1>About SourcERA</h1>
                <p>
                    SourcERA Academy is a global leader in delivering technical training.
                    Our training portfolio includes CAD/CAM/CAE, Mechanical, Civil,
                    Electrical and Architecture Design & Analysis courses. We offer
                    Classroom and Instructor-Led Online trainings on all the Engineering
                    Design & Analysis Softwares used in the industries. SourcERA Academy
                    provides 100% Placement Assistance to fresh Mechanical, Civil,
                    Electrical Engineering & Architecture students who enroll for SourcERA
                    Academy Certified Career Programs training at our centers. We have a
                    dedicated Training & Placement Cell for our Students which caters
                    Engineering Fundamentals & Soft Skills trainings to our students along
                    with their campus placements. Our Classroom and Instructor-Led Online
                    courses are developed and delivered by Working Professionals from
                    industry and academia. 
                    </p>
                    <p>SourcERA Academy is headquartered in Pune. There are many Start Up Training Centers who have signed up
                    with us for some specific Software domains as well. SourcERA Academy
                    Instructor-Led Online trainings have reached globally and we have
                    students base from almost all countries.
                    </p>
                    <p>SourcERA Academy has signed up
                    strategic MoU’s with Product Companies for conducting world-class
                    training programs in the area of Engineering Design. SourcERA Academy is
                    Authorised Educational Partner of Autodesk, Dassault Systemes, SIEMENS
                    PLM Software, ANSYS, Bentley Systems & IES VE in India. Students receive
                    Global Certification from these companies after successful completion of
                    training which helps them in standing apart from other students while
                    appearing for placements.
                    </p>
                    <p>Our primary focus is on Skill Development
                    Programs for Mechanical, Civil, Electrical Engineering & Architecture
                    students by arranging finishing school job oriented training programs
                    for them. We are working on Vocational Training Programs of engineering
                    education through specific training programs and the evolution of credit
                    framework.
                    </p>
                    <p>MoU’s have been signed with renowned Engineering Institutes
                    and Universities for conducting Certified Training Programs / Courses in
                    the field of CAD/CAM/CAE for Mechanical, Civil Design Courses for Civil
                    Engineering students. Similar courses have been extended for Electrical
                    Engineering & Architecture streams. SourcERA Academy has signed MoU with
                    Savitribai Phule Pune Univeristy’s Reasearch Park Foundation & SPPU’s
                    Design Innovation Center for offering Post Graduate Diploma Courses in
                    Engineering Design & Analysis for Mechanical, Automobile, Production,
                    Civil Engineers and Architects. Students completing these programs will
                    receive joint course completion Certificate from SourcERA Academy,
                    Savitribai Phule Pune Univeristy’s Reasearch Park Foundation & SPPU’s
                    Design Innovation Center. We offer various customized training programs
                    to companies as per their requirements. We have successfully delivered
                    Corporate Training Programs on various Software Tools. Teaching &
                    Learning process followed is at par with the quality norms and we take
                    dedicated efforts for the placement of our students and guide them for
                    their future career. SourcERA Academy Authorised Training Center (ATC)
                    or Franchise model is becoming very popular among new Start-Up Training
                    Centers who wish to establish themselves in Education Business. We have
                    established several ATC’s in various cities based on their requirement.
                    Our customized business model and deliverables to ATC’s are helping them
                    in becoming profitable in the first year of their business itself. Read
                    Less
                </p>
            </div>
                <div className="container">
                    <div className="row">
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Vision & mission">
                             <Vision></Vision> 
                            </Tab>
                            <Tab eventKey="profile" title="Why sourcera">
                             <AboutWhy></AboutWhy>  
                            </Tab>
      
                         </Tabs>
                    </div>
                </div>
            </>
        )
    }
}
