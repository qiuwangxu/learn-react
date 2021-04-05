import React from 'react'

type Props = {
  [prop: string]: any
}
type State = {
  x: number,
  y: number
}
class Mouse extends React.PureComponent<Props, State> {
  state = {
    x: 0,
    y: 0
  }
  handleMouseMove (evnet: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({
      x: evnet.clientX,
      y: evnet.clientY
    })
  }
  render () {
    return (
      <div 
        style={{height: '500px'}} 
        onMouseMove={(e)=>this.handleMouseMove(e)}
      >
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {this.props.render(this.state)}
      </div>
    )
  }
}

// render prop 是一个用于告知组件需要渲染什么内容的函数 prop。

class Cat extends React.Component<any,any> {
  render () {
    const mouse = this.props.mouse
    return (
      <div 
        style={{
          height:'5px', width: '5px', background: 'red' ,
          position: 'absolute', left: mouse.x, top: (mouse.y + 800)
        }}>
      </div>
    )
  }
}

function MouseTracker (Component: any) {
  return class MouseTracker extends React.Component {
    renderTheComponent (mouse: any) {
      return (
        <Component {...this.props} mouse={mouse}/>
      )
    }
    render () {
      return (
        <>
          <h1>移动鼠标</h1>
          <Mouse render={this.renderTheComponent} />
        </>
      )
    }
  }
}

export default MouseTracker(Cat)