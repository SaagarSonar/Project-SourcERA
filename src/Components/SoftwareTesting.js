import { Button, Card, Carousel, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function SoftWareTesting() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="Soft.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="Soft01.png" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="description">
            <h2>Software Testing Online Course</h2>
            <hr />
            <h2>Software Trainee Test Engineer / Software Test Engineer</h2>
            <hr />
            <h2>Software Automation Engineer: Java Selenium</h2>
            <hr />
            <h2>Instructor-Led Online Training</h2>
            <hr />

            <p>
              SourcERA offers industry need based Software Testing Certification
              online courses. Our course curriculum is developed by industrial
              working professionals having rich experience in Software Testing
              domain.
            </p>

            <p>
              SourcERA offers Software Testing courses which is blending of
              Manual and Automation Testing knowledge. Furthermore, these cover
              what is Agile? What is DevOps and today why Tester should know
              about Agile and DevOps.
            </p>

            <p>
              These courses certainly going to help to become SDET (Software
              Developer in Test) as these jointly cover skills like manual
              testing and automation.
            </p>

            <p>
              These courses will help you acquire global certification
              credentials through ISTQB and TOSCA certifications and help you
              acquire specialization in test automation using Selenium, TestNG
              and Maven.
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="section">
            <h2>About Software Testing :</h2>
            <hr />
            <p>
              Software Testing is a method to check whether the actual software
              product matches expected requirements and to ensure that software
              product is Defect free.
            </p>
            <p>
              It involves execution of software/system components using manual
              and automated tools to evaluate one or more systems of interest.
            </p>
            <p>
              Software Testing is an important process without which no software
              release can happen. Hence, IT companies have got tremendous demand
              for Software Test Engineers. SourcERA provides Certification
              Courses for Students and Working Professionals who wish to learn
              and gain insights into Manual and Automation Testing. Our Software
              Automation Engineer course will emphasise on Core Java – Selenium
              concepts and web design.
            </p>
            <p>
              At the end of the course, participants shall receive SourcERA
              Certificate of Completion. Students will also receive Placement
              Assistance thru our Central Placement Cell.
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="section">
            <h2>Schedule :</h2>
            <hr />
            <h5>
              Software Test Engineer/ Trainee Test Engineer: New batch starts
              from 26th November, 2022
            </h5>
            <h5>
              Software Automation Engineer: New batch starts from 17th December,
              2022
            </h5>
            <p>
              Training will be conducted on weekends: 2.5 Hrs of Theory Sessions
              / Day followed by Home Assignments and Practicals.
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="section">
            <h2>Course Overview</h2>
            <hr />
            <h5>Course I: Software Test Engineer/ Trainee Test Engineer </h5>
            <ul>
              <li>Basic Concepts of Software Testing</li>
              <li>Test case & Bug Report Writing</li>
              <li>Black-Box Test Techniques</li>
              <li>Requirements Review & Test Scenarios Writing using DevOps</li>
              <li>
                Implementing the test process, Test Management using DevOps
              </li>
            </ul>
            <h5>Course II: Software Automation Engineer </h5>
            <ul>
              <li>Programming Essentials</li>
              <li>
                Features of Java required to learn for Selenium Automation
              </li>
              <li>Selenium using Eclipse IDE</li>
              <li>Selenium and its components</li>
              <li>Selenium WebDriver and Locators</li>
            </ul>

            <hr />

            <Table striped bordered cellpading="10px" cellspacing="0px">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Course Title</th>
                  <th>Duration (Hrs).</th>
                  <th>Syllabus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Software Test Engineer/ Trainee Test Engineer</td>
                  <td>20 Hrs Lectures 10 Hrs Home Assignments / Practicals</td>
                  <td>
                    <Button>
                      <a
                        href="Software-Test-Engineer.pdf"
                        style={{ color: "white", "text-decoration": "none" }}
                      >
                        Syllabus
                      </a>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="section">
            <h2>Career after Software Testing course</h2>
            <p>
              Earning your Software Tester Certification will open doors to
              lucrative careers at top companies. A 75% increase in sales is
              predicted for the market. The shortage of qualified personnel has
              caused prices to get skyrocketed.
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card className="mt-5 mb-4">
        <Card.Body>
          <div class="section">
            <h2>Admission / Registration Procedure:</h2>
            Students are requested to complete their admission / registration
            formalities and pay the course fees by clicking on the Apply Now
            button given below.<br></br>
            <LinkContainer to={"/sign-in"}>
            <Button
              className="mt-2"
              varient="primary"
              id="button"
              type="button"
              value="Apply Now"
            >
              Apply Now
            </Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
