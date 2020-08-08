import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  render() {
    return <div></div>;
  }
}

export default ErrorBoundary;
