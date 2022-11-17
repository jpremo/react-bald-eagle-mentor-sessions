import React, { useState, useEffect } from 'react';
import { getRandomCatImage } from './utils'

const useDebounce = (callback, dependencies, delay = 1000) => {
  const [catTimer, setCatTimer] = useState(null);
  useEffect(() => {
    if (catTimer) {
      clearTimeout(catTimer);
    }
    const timeout = setTimeout(() => {
      callback();
    }, delay)
    setCatTimer(timeout);
  }, dependencies)
}

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(3);
  const [catImageUrl, setCatImageUrl] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }

  useDebounce(() => {
    const fetchCatImage = async () => {
      setCatImageUrl(await getRandomCatImage());
    }
    fetchCatImage();
  }, [name], 2000);

  useDebounce(() => {
    console.log('number input changed!', age)
  }, [age], 500);

  return (
    <>
      <input value={name} onChange={handleNameChange}/>
      <input type="number" value={age} onChange={handleAgeChange}/>
      <img src={catImageUrl} style={{width: '200px'}}/>
    </>
  );
}

export default App;
