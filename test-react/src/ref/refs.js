import React from 'react'

// const FancyButton = React.forwardRef((props, ref) => {
//   return <button ref={ref} className="FancyButton" onClick={props.onClick}>
//     {props.children}
//   </button>
// })
class FancyButton extends React.Component {
  focus () {
    document.getElementsByClassName('FancyButton')[0].focus()
    console.log('触发了focus')
  }
  render() {
    console.log(this.props)
    return (
      <button className="FancyButton" {...this.props}>
        {this.props.label}
      </button>
    )
  }
}

function ShowRefs (Component) {
  class ShowRef extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }
    render () {
      const { refs, ...rest} = this.props
      console.log('React.forwardRef render', refs, rest)
      return (
        <Component ref={refs} {...rest} />
        // <FancyButton ref={ref} 
        // onClick={()=>{this.toRef()}}>
        //   click me!
        // </FancyButton>
      )
    }
  }
  return React.forwardRef((props, ref)=>{
    console.log('React.forwardRef', props, ref)
    return <ShowRef {...props } refs={ref}/>
  })
}

export default ShowRefs(FancyButton)