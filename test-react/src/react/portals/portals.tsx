// portals提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案
import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component<any, any>{
  el: HTMLDivElement  = document.createElement('div')

  componentDidMount () {
    modalRoot?.appendChild(this.el)
  }

  componentWillUnmount () {
    modalRoot?.removeChild(this.el)
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

function Child () {
  return (
    <div className="modal">
      <button>click portals</button>
    </div>
  )
}
interface Props {
  [prop:string]: any
}
interface State {
  [prop:string]: any
}
class Parent extends React.Component<Props,State> {
  constructor (props:Props) {
    super(props)
    this.state = {clicks: 0}
  }
  handleClick () {
    this.setState((state) => ({
      clicks: state.clicks + 1
    }))
  }
  render () {
    return (
      <div onClick={()=>this.handleClick()}>
        <p>number of clicks : {this.state.clicks}</p>
        <Modal>
          <Child/>
        </Modal>
      </div>
    )
  }
}

export default Parent