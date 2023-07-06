import {
    Alert,
  Button,
  Card,
  Col,
  Container,Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

export function Payment() {
  return (
    <>
      <Container>
        <Card className="mt-4 mb-4">
          <Row>
            <Col lg={6}>
              <Card className="bg-dark align-center justify-center">
                <Card.Img src="secure.jpg" alt="Course Payment" />
              </Card>
            </Col>

            <Col lg={6}>
              <Card>
                <Card.Header><h2>Course Payment</h2></Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone No.</Form.Label>
                      <InputGroup className="mb-3">
                        <DropdownButton
                          variant="outline-secondary"
                          title="+91 "
                          id="input-group-dropdown-1"
                        >
                          <Dropdown.Item>India +91</Dropdown.Item>
                          <Dropdown.Item>+49</Dropdown.Item>
                          <Dropdown.Item>+852</Dropdown.Item>
                          <Dropdown.Item>+81</Dropdown.Item>
                          <Dropdown.Item>+7</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control aria-label="Text input with dropdown button" />
                      </InputGroup>
                      {/* <Form.Control type="text" placeholder="Enter Phone No." /> */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email-id</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email-id" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Select course to Enroll</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Course</option>
                        <option value="1">AutoCAD for Civil Engineers</option>
                        <option value="2">
                          AutoCAD for Electrical Engineers
                        </option>
                        <option value="3">
                          AutoCAD for Mechanical Engineers
                        </option>
                        <option value="4">CATIA V5 Fundamentals</option>
                        <option value="5">CATIA V5 Mechanical Designer</option>
                        <option value="6">
                          CCNA (Cisco Certified Network Associate) Exam Code:
                          200-301
                        </option>
                        <option value="7">
                          NX CAD Routing Wiring Harness Basic Course
                        </option>
                        <option value="8">
                          Software Test Engineer/ Trainee Test Engineer
                        </option>
                        <option value="9">
                          Structural Design & Analysis using ETABS
                        </option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Course Fees</Form.Label>
                      {/* <Button>
                        <InputGroup className="mb-3">
                          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                          <Form.Control aria-label="Text input with checkbox" />
                        </InputGroup>
                      </Button> */}
                      {["radio"].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                          <Form.Check
                            inline
                            label="PayPal"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="Stripe"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                          <Form.Check
                            inline
                            label="RazorPay"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </div>
                      ))}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text>.00</InputGroup.Text>
                      </InputGroup>
                    </Form.Group>

                    <Alert variant="secondary">
                      <Alert.Heading>Terms & Conditions</Alert.Heading>
                      <ul>
                        <li>
                          Fees structure is inclusive of all taxes. Fees once
                          paid will not be refunded back.
                        </li>
                        <li>
                          I hereby agree to pay the Course Fees towards the
                          Course enrollment at CoursERA Academy.
                        </li>
                        <li>
                          I hereby agree to all the terms & conditions set by
                          IFS Academy and I assure you that the information
                          provided by me is true to the best of my knowledge and
                          I shall strictly follow the rules and regulations set
                          by CoursERA Academy.
                        </li>
                        <li>
                          You agree to share information entered on this page
                          with CoursERA Academy (owner of this page) and Razorpay,
                          adhering to applicable laws.
                        </li>
                      </ul>
                    </Alert>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
