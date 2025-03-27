import React, { Component } from "react";

class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 20,
      index: 1,
    };
  }

  addone = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({ index: 2 });
  };
  
  render() {
    return (
      <>
        <h2>Counter Class</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.addone()}>+1 from class</button>
      </>
    );
  }
}
export default CounterClass;
