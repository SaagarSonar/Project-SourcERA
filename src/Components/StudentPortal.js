import { Component } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { saveCourses } from "../Services/CoursesAPIserver";
// import { LinkContainer } from "react-router-bootstrap";

export class StudentPortal extends Component {
  constructor() {
    super();
    this.state = {
      formData: {},
      // STUDENT_NAME: "",
      // Course1: "",
      modalOpeningStatus: false,
      defaultValues: { STUDENT_NAME: "", Course1: "" },
    };
  }

  openDialog = () => {
    this.setState({ modalOpeningStatus: true });
  };
  closeDialog = () => {
    this.setState({ modalOpeningStatus: false });
  };

  handleChange = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await saveCourses(this.state.formData);
    console.log(response.data);

    if (response.status == 200) {
      this.setState({ formData: { STUDENT_NAME: "",Course1: "" } });
      this.openDialog();
    }
  };
  render() {
    return (
      <>
        <Container>
          <Alert variant="info" className="mt-3 mb-4 text-center">
            <h3>Welcome To SourcERA</h3>
          </Alert>
          <Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="second">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Profile</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link  eventKey="first">Add Courses</Nav.Link>
                    </Nav.Item>
                   
                    <Nav.Item>
                      <Nav.Link as={Link} to="/view-courses" eventKey="second">View Courses</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link as={Link} to="/jobs" eventKey="third">Jobs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col sm={9}>
                  <Tab.Content>
                  
                    <Tab.Pane eventKey="first">
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label>STUDENT NAME : </Form.Label>
                          <Form.Control
                            type="text"
                            value={this.state.formData.STUDENT_NAME}
                            placeholder="Enter Student Name"
                            name="STUDENT_NAME"
                            onChange={this.handleChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Select Course</Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            name="Course1"
                            onChange={this.handleChange}
                          >
                            <option>Select Course</option>
                            <option value="AutoCAD for Civil Engineers">
                              AutoCAD for Civil Engineers
                            </option>
                            <option value="AutoCAD for Electrical Engineers">
                              AutoCAD for Electrical Engineers
                            </option>
                            <option value="AutoCAD for Mechanical Engineers">
                              AutoCAD for Mechanical Engineers
                            </option>
                            <option value="CATIA V5 Fundamentals">
                              CATIA V5 Fundamentals
                            </option>
                            <option value="CATIA V5 Mechanical Designer">
                            CATIA V5 Mechanical Designer
                            </option>
                            <option value="CCNA (Cisco Certified Network Associate)">
                            CCNA (Cisco Certified Network Associate) Exam Code: 200-301
                            </option>
                            <option value="NX CAD Routing Wiring Harness Basic Course">
                              NX CAD Routing Wiring Harness Basic Course
                            </option>
                            <option value="Software Test Engineer/ Trainee Test Engineer">
                              Software Test Engineer/ Trainee Test Engineer
                            </option>
                            <option value="Structural Design & Analysis using ETABS">
                              Structural Design & Analysis using ETABS
                            </option>
                          </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second"> 
                    </Tab.Pane>

                    <Tab.Pane eventKey="third"> 
                    </Tab.Pane>

                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Row>

          <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
            <Modal.Header closeButton>
              <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>Enrolled for the Course!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.closeDialog}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </>
    );
  }
}
