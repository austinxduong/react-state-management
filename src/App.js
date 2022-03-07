import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Fetch from './fetch/Fetch';
// import { useFetch } from './state/State';


function App() {

const [counter, setCounter] = useState(0);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ask Austi... </h1>
        {counter}
        <div className='counter-buttons'>
        <button
          onClick={() => {
            setCounter(counter + 1)
          }}
        >+</button>
        <button
          onClick={() => {
            setCounter(counter -1)
          }}
        >-</button>
        </div>
        <Fetch />        
      </header>
    </div>
  );
}

export default App;



