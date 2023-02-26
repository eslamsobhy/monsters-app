import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hi Eslam!",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.greeting}</p>
          <button onClick={() => this.setState({ greeting: "Hi Sobhii!" })}>
            change
          </button>
        </header>
      </div>
    );
  }
}

export default App;
