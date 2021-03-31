import logo from './logo.svg';
import './App.css';
import Game from './chess'
import Context from './context/index'
import ShowRef from './ref/refs'
import React from 'react'
const ref = React.createRef()
const handleClick = function () {
  console.log('ref handleclick')
  ref.current.focus()
}
function App() {
  return (
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
      <ShowRef ref={ref} onClick={handleClick}  label="click me">
      </ShowRef>
    </div>
  );
}

export default App;


