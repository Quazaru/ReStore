import React from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator.jsx';
class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: null,
    }
  }

  componentDidCatch(error) {
    this.setState({hasError: true, errorMessage: error});
  }

  render() {
    const {hasError} = this.state;
    const content = this.props.children;
    if(hasError) {
      return (
        <ErrorIndicator message={this.state.errorMessage} />
      )
    }
    return content;
  }
}

export default ErrorBoundary;