import { Button, Card, Carousel } from "react-bootstrap";

export function Beinstructor() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="inst1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Be Instructor</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="inst2.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3>Be Instructor</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="inst3.webp" alt="Third slide" />

          <Carousel.Caption>
            <h3>Be Instructor</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="mt-4 mb-4">
        <Card.Body>
          <div class="section">
            <h2><b>Be An Instructor</b></h2>

            <p>
              SourcERA is globally acclaimed Training Provider offering Skill Development Programs in the field of Mechanical, Civil, Architecture and Electrical Design & Analysis Softwares for the past 15 years.Recently we have launched courses in upcoming fields of Computer & IT as well. We offer Classroom,Instructor-Led Online and Self-Paced Courses in these fields.
            </p>
            <p>
              We are always looking for Full Time, Part Time and Corporate Trainers / Instructors who wish to work with us. We work closely with Instructors in imparting existing trainings as well as we develop new courses based on the work / domain experience of the aspiring Instructors. Industrial Working Professionals, Free Lancers, Corporate Trainers and Full Time Job Aspirants who wish to be an Instructor at SourcERA are requested to submit their details by clicking at the below mentioned link. Our Expert Technical Team will get back to you shortly with the further details.
            </p>
          </div>
        </Card.Body>
      </Card>
     

      <Card className="mt-4 mb-4">
        <Card.Body>
          <div class="section">
          <h3>Click here to register yourself as an Instructor at SourcERA.</h3>
            <h4>Send your CV's on SourcERA@gmail.com</h4>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
