import React from 'react';
import FactCard from './fact-card';
import './styles.css';
//1. set up an endpoint to get a random cat fact
//2. setup 3-5 cards each with a load random fact button
//3. load result into a state variable

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="card-container">
        <FactCard/>
        <FactCard/>
        <FactCard/>
      </div>
    </div>
  );
}

export default App;
