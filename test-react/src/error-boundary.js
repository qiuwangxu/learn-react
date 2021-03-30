import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    }
  }
  logErrorToMyService(error, errorInfo) {
    console.log(error, errorInfo)
  }
  componentDidCatch(error, errorInfo) {
    this.logErrorToMyService(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return <h1> something went wrong </h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary