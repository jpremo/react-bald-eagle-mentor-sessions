import React, { useEffect } from 'react';
import RandomCatCard from './random-cat-card/random-cat-card';
import './app.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <RandomCatCard name="Example Cat" description="I am the example cat."/>
      <RandomCatCard name="Example Cat 2" description="I am the superior version of example cat."/>
    </div>
  );
}

export default App;
