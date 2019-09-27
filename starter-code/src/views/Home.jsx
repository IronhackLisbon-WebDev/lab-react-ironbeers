import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center m-3'>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/images/beers.png" />
          <Card.Body>
            <Link to="/beers">
              <Card.Title>All Beers</Card.Title>{" "}
            </Link>
            <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              harum consequuntur id necessitatibus magnam et dicta eveniet
              dolore. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top"  src="/images/random-beer.png" />
          <Card.Body>
            <Link to="/random-beer">
              <Card.Title>Random Beer</Card.Title>{" "}
            </Link>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae
              vitae aspernatur consequuntur enim.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="/images/new-beer.png" />
          <Card.Body>
            <Link to="/new-beer">
              <Card.Title>New Beer</Card.Title>{" "}
            </Link>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              rem eum officiis ad quod. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
