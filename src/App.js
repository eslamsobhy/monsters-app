import { Component } from "react";

// components
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import Lifecycles from "./components/life-cycle/Lifecycles";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
      counter: 0 + this.props.increment,
      showChild: true,
      text: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // this-object will be binded in the place where the arrow function is defined in the first place,
  // and the context of this arrow function is the App component.
  // This is called lexical scoping.
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  increment = () => {
    // this call of setState is asynchronous
    // when clicking the button that does not happen immediately
    /*
      the best practice to update the state whenever we are using the prev value
      of the state or the prev props is to use a function instead of an object;
      like this:
    */
    this.setState(
      (prevState, prevProps) => {
        // instead of using this.props.increment:
        return { counter: prevState.counter + prevProps.increment };
      },
      () => console.log(this.state.counter)
    );

    // this log proves it, it still displays the previous value of the counter
    // even when we call it after incrementing the counter by one!!
    // to make sure that the log happens after updating the state:
    // just move it as the second param to the setState() in a callback function!
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <hr />
        <button
          onClick={() =>
            this.setState((state) => ({ showChild: !state.showChild }))
          }
        >
          Toggle Lifecycle
        </button>

        <button
          onClick={() =>
            this.setState((state) => ({ text: state.text + " _hello" }))
          }
        >
          Update Text
        </button>

        {this.state.showChild && <Lifecycles text={this.state.text} />}
        <hr /> */}

        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
