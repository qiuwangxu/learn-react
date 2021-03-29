import React from 'react'
import {
  ThemContext,
  theme
} from './theme-context'
import ErrorBoundary from '../error-boundary'
ThemContext.displayName = 'myThemContext'
class Context extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTheme = this.toggleTheme.bind(this)
    this.state = {
      theme: theme.light,
      toggleTheme: this.toggleTheme
    }
  }
  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === theme.dark ?
        theme.light : theme.dark
    }))
  }
  render() {
    return ( 
    <ErrorBoundary>
      <ThemContext.Provider value = {this.state} >
        <Toolbar / >
      </ThemContext.Provider> 
      <Toolbar / >
      <ThemContext.Consumer >
        {value => ( 
            <div >
              {value.theme.foreground + '88'}
            </div>
        )} 
      </ThemContext.Consumer> 
    </ErrorBoundary>
    )
  }
}

function Toolbar() {
  return ( 
    <div >
      <ThemedButton / >
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemContext
  componentDidMount() {
    console.log('didmount', this.context)
  }
  componentDidUpdate() {
    console.log('didupdate', this.context)
  }
  componentWillUnmount() {
    console.log('willunmount', this.context)
  }
  render() {
    return (
    <div>
      <button 
      onClick = {this.context.toggleTheme}
      style = {{
          backgroundColor: this.context.theme.background
        }} >
      按钮 
      </button> 
      </div>
    )
  }
}

export default Context