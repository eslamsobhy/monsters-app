import React, { Component } from "react";

class Lifecycles extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("mounted!");
  }

  render() {
    console.log("render!");
    return (
      <>
        <div className="lifecycle">
          <h3>LifeCycle Methods</h3>
          <p>{this.props.text}</p>
        </div>
      </>
    );
  }
}

export default Lifecycles;
