
import './App.css';
import { useState } from 'react'
import Fetch from './fetch/Fetch';
// import { useFetch } from './state/State';


function App() {

const [counter, setCounter] = useState(0);

  
  return (
    <div className="App-container">
      <header className="App-header">

        <h1>Ask Austi... </h1>
        {counter}

        <div className='counter-buttons'>
        <button 
          id = "add"
          onClick={() => {
            setCounter(counter + 1)
          }}
        >+</button>
        <button
          id = "subtract"
          onClick={() => {
            setCounter(counter -1)
          }}
        >-</button>
        </div>
        
        <div className='quote-width'>
          
            <Fetch />
          
        </div>

      </header>
    </div>
  );
}

export default App;



