import React from 'react'

interface errorState {
  [prop: string]: any
}

class ErrorBoundary extends React.Component<any, errorState> {
  state = {
    hasError: false
  }
  static getDerivedStateFromError(error:any) {
    return {
      hasError: true
    }
  }
  logErrorToMyService(error:any, errorInfo:any) {
    console.log(error, errorInfo)
  }
  componentDidCatch(error:any, errorInfo:any) {
    this.logErrorToMyService(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return <h1> something went wrong </h1>
    }
    console.log(React.Children.count(this.props.children))
    return React.Children.map(this.props.children, (item)=>{
      return item
    })
    
  }
}

export default ErrorBoundary