import { Component } from "react";
import { Alert, Carousel, Container } from "react-bootstrap";
import './Home.css';


export class Home extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="corousal1.jpg"
              alt="First slide"
              height="450px"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="corousal2.jpg"
              alt="Second slide"
              height="450px"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="corousal3.jpg"
              alt="Third slide"
              height="450px"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 className="training-partners">Authorised Education Training Partners</h2>
        <div className="body-container">
          <div className="tp-item"><img src="c2.jpg"/></div>
          <div className="tp-item"><img src="c3.png"/></div>
          <div className="tp-item"><img src="c4.png"/></div>
          <div className="tp-item"><img src="c5.png"/></div>
        </div>
        <h2 className ="training-partners">Placed Students</h2>
        <div className="rowhome">
          <div className="columnhome">
            <div className="cardhome">
              <img src="male.png"/>
              <p>Name</p>
            </div>
          </div>
        
          <div className="columnhome">
            <div className="cardhome">
            < img src="male.png"/>
              <p>Name</p>
            </div>
          </div>

          <div className="columnhome">
            <div className="cardhome">
              <img src="male.png"/>
              <p>Name</p>
            </div>
          </div>
          
          <div className="columnhome">
            <div className="cardhome">
              <img src="male.png"/>
              <p>Name</p>
            </div>
          </div>
          
          <div className="columnhome">
            <div className="cardhome">
              <img src="male.png"/>
              <p>Name</p>
            </div>
          </div> 
        </div>

        <div className="featured-courses">
          <div>
            <h2 style={{color:"orange"}}>Meachanical Engineering Courses</h2>
            <h2 style={{color:"#05203d"}}>Modular Course :</h2>
            <ul>
              <li>AutoCAD Mechanical</li>
              <li>CATIA</li>
            </ul>
          </div>
          <div>
            <h2 style={{color:"orange"}}>Civil Engineering Courses</h2>
            <h2 style={{color:"#05203d"}}>Modular Course :</h2>
            <ul>
              <li>AutoCAD Civil</li>
              <li>ETABS</li>
            </ul>
          </div>
          <div>
            <h2 style={{color:"orange"}}>Electrical Engineering Courses</h2>
            <h2 style={{color:"#05203d"}}>Modular Course :</h2>
            <ul>
              <li>AutoCAD Electrical</li>
              <li>NX-CAD</li>
            </ul>
          </div>
          <div>
            <h2 style={{color:"orange"}}>Computer Engineering Courses</h2>
            <h2 style={{color:"#05203d"}}>Modular Course :</h2>
            <ul>
              <li>CCNA</li>
              <li>Software Testing</li>
            </ul>
          </div>
    </div>
      </>
    );
  }
}
