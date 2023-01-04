import React, { useEffect, useState, useRef } from 'react';
import Wrapper from './wrapper';
import { getRandomCatImage } from './utils';

const useEffectNoInitialize = (callback, dependencyArray) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if(loaded) {
      callback();
    } else {
      setLoaded(true);
    }
  }, dependencyArray);
}

const secretPassword = "1234";

function App() {
  const [text, setText] = useState('');
  const [catUrl, setCatUrl] = useState(null);
  const inputRef = useRef(null);
  const numberRef = useRef(0);
  // useClickOutside();
  useEffectNoInitialize(() => {
    console.log('hitting useEffect callback with text in dependency array')
  }, [text]);
  // useEffect(() => {
  //   console.log('hitting useEffect callback with empty dependency array')
  // }, []);
  // console.log('hitting useEffect callback with no dependency array')
  const consoleLogCatLink = async () => {
    const catUrl = await getRandomCatImage();
    console.log(catUrl)
    setCatUrl(catUrl);
  }
  useEffect(() => {
    // Async/await approach
    consoleLogCatLink();
    // Promise chaining approach
    getRandomCatImage().then((res) => {
      console.log(res);
    })
    // Not awaiting whatsoever (not the desired effect)
    console.log(getRandomCatImage());
  }, []);

  if(!catUrl) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)}/>
      {text === secretPassword &&
        <img src={catUrl}/> 
      }
      <button onClick={() => console.log('inputRef', inputRef)}>Console Log inputRef</button>
      <button onClick={() => console.log('numberRef', numberRef)}>Console Log numberRef</button>
      <button onClick={() => numberRef.current += 1}>Increase Number Ref</button>
      <Wrapper text="first wrapper!">
        <h1>First wrapper!</h1>
      </Wrapper>
      <Wrapper text="first wrapper!">
        <h3>First wrapper!</h3>
      </Wrapper>
    </div>
  );
}

export default App;
