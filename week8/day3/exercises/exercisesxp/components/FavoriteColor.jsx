import { Component } from "react";

class FavoriteColor extends Component {
  constructor() {
    super();
    this.state = { color: "red", show: true };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
    }));
  };

  handleDelete = () => {
    this.setState({ show: false });
    alert("click");
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
    return null;
  }

  render() {
    return (
      <>
        <h3>My Favourite Color is {this.state.color}</h3>
        <button onClick={this.handleClick}>Change Fav Color</button>
        <br />
        <div>
          {this.state.show && <Child />}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      </>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("unmounted");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default FavoriteColor;
