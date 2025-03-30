import { Component } from "react";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { error: null };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ error: error, errorInfo: errorInfo });
  };

  render() {
    if (this.state.error) {
      return (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
