import logo from './logo.svg'
import './App.css'
import Game from './react/chess'
import Context from './react/context/index'
import ShowRef from './react/ref/refs'
import React, { Profiler } from 'react'
import MouseTracker from './react/renderprops/index'
const ref = React.createRef()
const handleClick = function () {
  (ref.current as any).focus()
}
function callback (...rest:any) {
  console.log(rest)
}
// React.memo() 高阶组件。它与 React.PureComponent 非常相似，
// 但只适用于函数组件

// React.cloneElemt()  props合并  key ref保留 children替换

// React.isValidElement(object) 验证对象是否React元素  true/false

// React.Children
// React.Children.map
// React.Children.forEach
// React.Children.count
// React.Children.only
// React.Children.toArray

// React.lazy

// React.Suspense 指定加载指示器（loading indicator），以防其组件树中的某些子组件尚未具备渲染条件
function App(this: any) {
  return (
    <Profiler id="app" onRender={callback}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Game/>
        <Context/>
        <ShowRef ref={ref} onClick={handleClick}  label="click me" />
        <MouseTracker />
      </div>
    </Profiler>
  );
}

export default App;


