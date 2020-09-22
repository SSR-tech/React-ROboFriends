import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import { robots } from "../robot";
import SearchResults from "../components/SearchResults";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
  };
};

export class App extends Component {
  constructor() {
    super();
    this.state = {
      animal: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ animal: users }));
  }

  render() {
    const { animal } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filterRobotCards = animal.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc mainBackground">
        <h1 className="mainTitle">RobotFriends</h1>
        <SearchResults searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList animals={(robots, filterRobotCards)} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
