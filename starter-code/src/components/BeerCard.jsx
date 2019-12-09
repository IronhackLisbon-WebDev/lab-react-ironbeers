import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class BeerCard extends Component {
  render() {
    const beer = this.props.beer;
    return (
      <Card className="beerCard">
        <Card.Img
          className="beerImg"
          // variant="top"
          src={beer.image_url}
        />
        <Card.Body>
          <Card.Title>{beer.name}</Card.Title>
          <Card.Text>{beer.tagline}</Card.Text>
          <Card.Text>{beer.description}</Card.Text>
          <Card.Text>{beer.contributed_by}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
