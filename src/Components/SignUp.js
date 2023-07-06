import { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { saveStudent } from "../Services/StudentAPIService";
import { validName, validEmail, validPassword,validMobile} from "./Regex";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      //key with an empty json object
      formData: {},
      // STUDENT_NAME: "",
      // EMAIL_ID: "",
      // MOBILENO: "",
      // PASSWORD: "",
      modalOpeningStatus: false,
      defaultValues: { STUDENT_NAME: "", EMAIL_ID: "", MOBILENO: "", PASSWORD: "" },
      nameErr: false,
      emailErr: false,
      mobileErr:false,
      passwordErr: false,
      confirmPasswordErr: false,
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
    //preventing its default property of refreshing the page
    event.preventDefault();


    if (!validName.test(this.state.formData.STUDENT_NAME)) {
      alert("Name should have only letters.");
      this.setState({ nameErr: true });
      return;
    }
    if (!validEmail.test(this.state.formData.EMAIL_ID)) {
      alert("Enter the valid Email ID");
      this.setState({ emailErr: true });
      return;
    }
    if(!validMobile.test(this.state.formData.MOBILENO)){
      alert("Enter the valid Mobile Number must be 10 digit");
      this.setState({ mobileErr: true });
      return;
    }
    if (!validPassword.test(this.state.formData.PASSWORD)) {
      alert(
        "Enter the valid Password\nat least one smallcase letter\nat least one uppercase letter\nat least one digit\npassword must be at least 6 characters and max 12 characters"
      );

      this.setState({ passwordErr: true });
      return;
    }
    // if(this.state.formData.PASSWORD !== this.state.CONFIRM_PASSWORD) {
    //   alert("Passwords do not match");
    //   this.setState({ passwordErr: true });
    // }



    //sending a request to the server function to save the student data
    //pasing state as an argument as state has entire form data
    //saveStudent will send a promise within which it has a response
    //saveStudent will call to post method
    const response = await saveStudent(this.state.formData);

    //in the post method on server it returns either the error or the json object
    console.log(response.data);

    if (response.status == 200) {
      this.setState({ formData: { STUDENT_NAME: "",EMAIL_ID: "",MOBILENO: "",PASSWORD: "" } });
      this.openDialog();
    }
  };
  render() {
    return (
      <>
        <Container>
          <Card className="mt-4">
            <Row>
              <Col lg={6}>
                {/* <Card.Title>Sign Up</Card.Title> */}
                <h3>Sign Up</h3>
                <br></br>
                <Form onSubmit={this.handleSubmit} className="mx-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.formData.STUDENT_NAME}
                      placeholder="Enter Name"
                      name="STUDENT_NAME"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email-id</Form.Label>
                    <Form.Control
                      type="email"
                      value={this.state.formData.EMAIL_ID}
                      placeholder="Enter Email-id"
                      name="EMAIL_ID"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.formData.MOBILENO}
                      placeholder="Enter Mobile No."
                      name="MOBILENO"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Create Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={this.state.formData.PASSWORD}
                      placeholder="Create Password"
                      name="PASSWORD"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {/* <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Conform Password"
                    />
                  </Form.Group> */}
                  <Button variant="primary" type="submit" className="center">
                    Sign Up
                  </Button>
                </Form>
                <Card.Text className="mx-4 mb-5">
                  Already have a account?
                  <Card.Link href="/sign-in ">Sign In</Card.Link>
                </Card.Text>
              </Col>

              <Modal
                show={this.state.modalOpeningStatus}
                onHide={this.closeDialog}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Student Registered!</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={this.closeDialog}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Col lg={6}>
                <Card className="bg-dark align-center justify-center">
                  <Card.Img src="login.jpg" alt="Card image" />
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </>
    );
  }
}

//export function SignUp() {
// return (
//   <Container>
//     <Card className="mt-4">
//       <Row>
//         <Col lg={6}>
//           {/* <Card.Title>Sign Up</Card.Title> */}
//           <h3>Sign Up</h3><br></br>
//           <Form className="mx-4">
//             <Form.Group className="mb-3">
//               <Form.Label>Full Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter Name" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email-id</Form.Label>
//               <Form.Control type="email" placeholder="Enter Email-id" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Mobile No</Form.Label>
//               <Form.Control type="text" placeholder="Enter Mobile No." />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Create Password</Form.Label>
//               <Form.Control type="password" placeholder="Create Password" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control type="password" placeholder="Conform Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="center">
//               Sign Up
//             </Button>
//           </Form>
//           <Card.Text className="mx-4 mb-5">
//             Already have a account? <Card.Link href="/sign-in ">Sign In</Card.Link>
//           </Card.Text>
//         </Col>
//         <Col lg={6}>
//           <Card className="bg-dark align-center justify-center">
//             <Card.Img src="login.jpg" alt="Card image" />
//           </Card>
//         </Col>
//       </Row>
//     </Card>
//   </Container>
// );
//}
