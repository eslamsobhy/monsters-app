import { Component } from "react";

// components
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      counter: 0,
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
    this.setState({ counter: this.state.counter + 1 });

    // this log proves it, it still displays the previous value of the counter
    // even when we call it after incrementing the counter by one!!
    console.log(this.state.counter);
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <p>{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
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
