import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  modifyCount = (incr) => {
    let count = this.state.count + parseInt(incr, 10);

    this.setState({
      count: count
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div>
          <button class="add" onClick={() => this.modifyCount("-1")}>
            subtract
          </button>
          <span class="my-number">{this.state.count}</span>
          <button class="add" onClick={() => this.modifyCount(1)}>
            add
          </button>
        </div>
      </div>
    );
  }
}