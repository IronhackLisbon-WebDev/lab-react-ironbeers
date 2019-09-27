import React, { Component } from 'react'
import axios from "axios";
import BeerCard from "../components/BeerCard";


export default class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://ironbeerapi.herokuapp.com/beers/random"
      )
      .then(response => {
        console.log(response)
        this.setState({
          beer: response.data
        });
      });
  }

  render() {
    if (!this.state.beer) return <div>Loading...</div>;

    return (
      <div>
        <h1>A Random Beer</h1>
        <BeerCard beer={this.state.beer}/>
      </div>
    )
  }
}
