import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import MainNavbar from "./components/MainNavbar";
import Home from './views/Home'
import ListBeer from "./views/ListBeer";
import RandomBeer from "./views/RandomBeer";
import SingleBeer from "./views/SingleBeer";
import NewBeer from "./views/NewBeer";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <MainNavbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={ListBeer} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
          <Route path="/beer-detail/:id" exact component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
