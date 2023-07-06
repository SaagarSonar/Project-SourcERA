import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { deleteStudentFromServer, getAllCourses } from "../Services/CoursesAPIserver";

export function ViewCourses() {
  //we will get array of all the Course objects/JSON object
  //initailizing with empty array
  //courselist is the state
  //setcourse id the function which will assign the value in courselist
  const [courselist, setcourse] = useState([]);
  const [selectedStudentName, setselectedStudentName] = useState([]);
  const [isModalOpened,setIsModalOpened] = useState(false);

    //function will assign true to open the Modal
    const openModal=()=>{
        setIsModalOpened(true);
    }
    const closeModal=()=>{
        setIsModalOpened(false);
    }

  //local function of component which will make call to that service function
  //it will return promise, then need to handle the promise
  async function getAll() {
    const response = await getAllCourses();

    //to take data from response object
    setcourse(response.data);
  }

  const deleteStudent =async()=>{
    //will return a promise
    const response =await deleteStudentFromServer(selectedStudentName);
    
    //will give the response body
    //response.data will give complete Json object 'message:Successfully ......'
    console.log(response.data);
    closeModal();
    getAll();
  }

  //there is no dependency so passing a empty array
  useEffect(() => {
    getAll();
  }, []);

  console.log(courselist);
  return (
    <>
      <Container>
        <Table striped bordered hover className="mt-4">
          <thead className="text-center">
            <tr>
              <th>Student Name</th>
              <th>Courses</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              //will have a single course as an argument
              //that single course will be a Json object
              courselist.map((item) => {
                return (
                  <tr>
                    <td>{item.STUDENT_NAME}</td>
                    <td>{item.Course1}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          setselectedStudentName(item.STUDENT_NAME);
                          openModal();
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Container>
      <Modal show={isModalOpened} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={closeModal}>
            No
          </Button>
          <Button variant="danger" onClick={deleteStudent}>
            Yes,Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
