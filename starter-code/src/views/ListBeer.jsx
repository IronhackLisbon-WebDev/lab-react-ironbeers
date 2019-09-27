import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllBeers } from "../services/beerApi";

export default class ListBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null
    };
  }

  componentDidMount() {
    getAllBeers()
      .then(beers => {
        this.setState({
          beers: beers.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    // axios.get("https://ironbeerapi.herokuapp.com/beers/all").then(response => {
    //   this.setState({
    //     beers: response.data
    //   });
    // });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const id = this.props.match.params.id;
  //   console.log(prevProps.match, this.props.match);
  //   if (prevProps.match.params.id !== id || !this.state.pokemon) {
  //     load(id)
  //       .then(pokemon => {
  //         this.setState({
  //           pokemon
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }

  render() {
    if (!this.state.beers) return <div>Loading...</div>;

    return (
      <div>
        <h1>All beers</h1>
        {this.state.beers.map(beer => (
          <div
            key={beer._id}
            className="card mb-3"
            style={{ maxWidth: "540px" }}
          >
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={beer.image_url}
                  style={{ height: "10rem" }}
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Link
                    key={beer._id}
                    to={"/beer-detail/" + beer._id}
                    className="beer-card"
                  >
                    <h5 className="card-title">{beer.name}</h5>{" "}
                  </Link>
                  <p className="card-text">{beer.tagline}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      <strong>Contributed by: </strong>
                      {beer.contributed_by}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
