import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default class NewBeer extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tagline</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Brewed</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Attenuation Level</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contributed By </Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
