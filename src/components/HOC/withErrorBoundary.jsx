import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx';

const withErrorBoundary = (Component) => (props) => {
    return (
      <ErrorBoundary>
        <Component {...this.props} />
      </ErrorBoundary>
    )
}