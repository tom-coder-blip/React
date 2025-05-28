import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';

class Thankyou extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Card className="text-center p-4 shadow" style={{ maxWidth: '600px', width: '100%' }}>
          <Card.Body>
            <Card.Title>Thank You!</Card.Title>
            <Card.Text>
              Thank you for contacting us! We will be in touch soon.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Thankyou;
