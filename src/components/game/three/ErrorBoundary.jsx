import React, { Component } from 'react';

// Error Boundary para capturar errores de componentes hijos
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary capturó un error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal: {this.state.error.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
