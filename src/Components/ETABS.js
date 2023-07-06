import { Button, Card, Carousel, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function ETabs() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="Etabs01.png" alt="First slide" />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Etabs02.png" alt="Second slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Etabs03.jpg" alt="Third slide" />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="mt-4 mb-5">
        <Card.Body>
          <div class="description">
            <h2>About ETABS:</h2>
            <hr />
            ETABS is an integrated software package for the structural analysis
            and design of buildings. ETABS offers 3D object based modelling and
            visualization tools, linear and nonlinear analytical power, design
            capabilities for a wide range of materials, and graphic displays,
            reports, and schematic drawings that allow users to quickly and
            easily understand analysis and design results. ETABS integrates
            every aspect of the engineering design process. CAD drawings can be
            converted directly into ETABS models or used as templates onto which
            ETABS objects may be overlaid. Design of steel and concrete frames
            (with automated optimization), composite beams, composite columns,
            steel joists, and concrete and masonry shear walls is included, as
            is the capacity check for steel connections and base plates.
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>At an Etabs Authorized Training Center, you can:</h2>
            <hr />
            <ul>
              <li>
                Learn from highly qualified instructors at superior facilities{" "}
              </li>
              <li>
                Develop your skills with sample projects and exercises that
                emphasize real-world applications
              </li>
              <li>
                Choose a class at the most appropriate skill level to meet your
                needs
              </li>
              <li>
                Meet at a time convenient for you, or sign up for the custom,
                on-site training
              </li>
              <li>
                Earn a valuable certificate of completion that’s recognized in
                your profession
              </li>
              <li>
                {" "}
                Validate your product knowledge by getting Etabs Certified when
                you take a certification exam at a participating ATC test
                delivery facility
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>Stand out with an Etabs Certification:</h2>
            <hr />
            <ul>
              <li>
                Earn an industry-recognized credential that helps prove your
                skill level and can get you hired.{" "}
              </li>

              <li>
                Accelerate your professional development and help enhance your
                credibility and career success.
              </li>
              <li>
                Validate your skills and join an elite team of Etabs Certified
                professionals.
              </li>
              <li>
                Display your Etabs Certified certificate, use the Autodesk
                Certified logo, highlight your achievement and get noticed by
                listing your name in the Etabs Certified Professionals database
              </li>
            </ul>
            <p>
              Students shall be using Etabs Civil official course curriculums
              and Training Guides so that they can crack the Etabs Certification
              exams and these curriculums and guides are prepared on the current
              and latest release of Etabs Products.
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>Benefits of Certification:</h2>
            <hr />
            <ul>
              <li>Help to gain Industry Recognition for your skillset. </li>
              <li>Improve your performance and add value to your company.</li>
              <li>
                Validate your skills and join an elite team of Autodesk
                Certified professionals.
              </li>
              <li>
                Earn a Portable Credential to help job retention and mobility.
              </li>
              <li>Align with an industry leader.</li>
              <li>
                Get an electronic certificate suitable for printing and framing.
              </li>
              <li>
                Get a certification logo for use on business cards, resumes, and
                letterhead, identifying you as Autodesk Certified..
              </li>
              <li>Become part of an elite team of professionals.</li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>
              Salient Features of “Structural Design And Analysis using ETABS”
              course:
            </h2>
            <hr />
            <ul>
              <li>AIndustrial Working Professionals as Faculty. </li>
              <li>
                Dedicated workstations within a state-of-the-art training
                facility.
              </li>
              <li>
                Placement opportunities thru our sister concern company:
                In-Finite Solutions.
              </li>
              <li>
                Course curriculum designed in line with the expectations of
                industries.
              </li>
              <li>Exposure to live projects.</li>
              <li>Experience and Certified Faculty.</li>
              <li>Engineering Fundamentals Training.</li>
              <li>Seminars and Visiting Lectures from Industry Experts</li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>Course Certification:</h2>
            <hr />
            <ul>
              <li>Etabs Authorised Certification of Completion</li>
            </ul>
            <h2> Sample Copy of Etabs Authorised Certificate of Completion:</h2>
            <p>
              This Certificate (Soft Copy has to be downloaded from Etabs
              Website through provided Login) is issued to the students after
              successful completion of the training.
            </p>

            {/* <img src="Elegant-Training-Completion-Certificate.jpg" alt="Etabs image"
            style="width: 40%; height: 300px;"> */}
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>Course Eligibility:</h2>
            <hr />
            <ul>
              <li>
                Diploma / Polytechnic Students from Civil Engineering /
                Architecture
              </li>
              <li>
                Students who are undergoing/completed Degree in Civil
                Engineering
              </li>
              <li>ME / MTech in Structural Engineering</li>
              <li>Faculty / Working Professionals</li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <Table striped bordered>
                <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Course Title</th>
                <th>Duration (Hrs.)</th>
                <th>Syllabus</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Structural Design & Analysis using ETABS</td>
                <td>60</td>
                <td>
                  <Button><a href="Structural-Design-Analysis-using-ETABS-60-Hrs.pdf" style={{color:"white", "text-decoration":"none"}}>
                    Syllabus
                  </a></Button>
                </td>
              </tr>
              </tbody>
            </Table>
            <ul>
              <li>The course fee is nonrefundable.</li>

              <li>
                Fees can be paid in Cash / Cheque / DD. Cheque & DD should be
                drawn in favour of SourcERA payable at Mumbai.
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-5">
        <Card.Body>
          <div class="section">
            <h2>Admission / Registration Procedure:</h2>
            <hr />
            <p>
              Students are requested to complete their admission / registration
              formalities and pay the course fees by clicking on the Apply Now
              button given below.
            </p>
            <LinkContainer to={"/sign-in"}>
            <Button id="button" type="button" value="Apply Now">
              Apply Now
            </Button></LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
