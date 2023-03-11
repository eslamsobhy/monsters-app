import React, { Component } from "react";

class Lifecycles extends Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("mounted!");
  }

  componentDidUpdate() {
    console.log("updated!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update?");
    // if it returns false, that means it won't update(won't be rerendered)
    // this could be important for performance if we know that this component..
    // has nothing to do with the state chenged!
    return true;
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
