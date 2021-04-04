import React from 'react'
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
        <div>
          <Component ref={refs} {...rest} />
          <ListOfTenThings />
        </div>
      )
    }
  }
  return React.forwardRef((props, ref)=>{
    console.log('React.forwardRef', props, ref)
    return <ShowRef {...props } refs={ref}/>
  })
}
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

export default ShowRefs(FancyButton)