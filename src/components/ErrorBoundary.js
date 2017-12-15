import React, { PureComponent } from 'react'

/**
 * Wrap any component to handle catching of errors
 * This component takes advantage of the new React 16 error boundaries (notice the componentDidCatch lifecycle method)
 */
class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      // Fallback UI if an error occurs
      return (
        <div style={{padding: '10%', height: '100vh', width: '100vw', background: '#607D8B', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h2>{"Oh-no! Something went wrong"}</h2>
          <p style={{color: '#FE5252', fontWeight: 'bold'}}>
            {this.state.error && this.state.error.toString()}
          </p>
          <div>{"Component Stack Error Details: "}</div>
          <p style={{color: '#FE5252', fontWeight: 'bold'}}>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // component normally just renders children
    return this.props.children;
  }
}

export default ErrorBoundary
