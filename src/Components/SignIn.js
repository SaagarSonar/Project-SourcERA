import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export function SignIn() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Card>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" href="/student-portal">
                  Sign In
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
