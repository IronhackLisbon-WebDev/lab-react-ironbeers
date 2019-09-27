import React, { Component } from "react";
import axios from "axios";
import BeerCard from "../components/BeerCard";

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    // We have a `this.props.match.params.id` because of the code in App.js
    // <Route path="/beer-detail/:id" exact component={SingleBeer} />
    console.log(this.props.match.params.id);
    axios
      .get(
        "https://ironbeerapi.herokuapp.com/beers/single/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          beer: response.data
        });
      });
  }

  render() {
    if (!this.state.beer) return <div>Loading...</div>;
    return (
      <div className="BeerDetail">
        <h2>Beer Detail</h2>
        <BeerCard beer={this.state.beer} />
      </div>
    );
  }
}
