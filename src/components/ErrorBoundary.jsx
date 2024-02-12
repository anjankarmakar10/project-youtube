import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.setState.hasError) {
      return this.props.fallback || "An error occurred";
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
