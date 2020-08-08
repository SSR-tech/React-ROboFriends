import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robot";
import SearchResults from "../components/SearchResults";
import "./App.css";
import Scroll from "../components/Scroll";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      animal: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ animal: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { animal, searchField } = this.state;
    const filterRobotCards = animal.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc mainBackground">
        <h1 className="mainTitle">RobotFriends</h1>
        <SearchResults searchChange={this.onSearchChange} />
        <Scroll>
          <CardList animals={filterRobotCards} />
        </Scroll>
      </div>
    );
  }
}

export default App;
