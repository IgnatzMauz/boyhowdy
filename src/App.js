import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function WelcomeMessage() {
  return <p>Boy Howdy!</p>
}
const message = () => "Howdy!"
const toggle = false

function App() {
  const [ count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <WelcomeMessage />
        {toggle ? message() : 'Nope!'}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {message} Learn React {message}
        </a>
        <br />
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      </header>
    </div>
  );
}

export default App
