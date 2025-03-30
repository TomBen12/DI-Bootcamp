import React from "react";
class ErrorBoudary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateError = (error) => {
    return { hasError: true };
  };

  componentDidCatch = (error, erroInfo) => {
    console.log("error=> ", error);
    console.log("erroInfo=> ", erroInfo);
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError)
      return <p>somthing went wrong in {this.props.message}</p>;
    return this.props.children;
  }
}
export default ErrorBoudary;
