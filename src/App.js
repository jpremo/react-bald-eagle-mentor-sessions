import React, { useRef } from 'react';
import InfoContainer from './info-container/info-container';
import './App.css';

function App() {
  const exampleRef = useRef('test');
  const htmlElementRef = useRef(null);
  const containerRef = useRef(null);
  console.log('exampleRef', exampleRef)
  console.log('rendering');

  return (
    <div style={{ textAlign: 'center' }}>
      <InfoContainer id="first-box"> 
        <h4>Container 1</h4>
      </InfoContainer>
      <InfoContainer className="green">
        <h1>I am container 2</h1>
        <input ref={htmlElementRef}/>
        <section>
          <h2>I am a subsection</h2>
        </section>
      </InfoContainer>
      <InfoContainer className="half-width" containerRef={containerRef}>
        <h2>I am 50% of the page width</h2>
      </InfoContainer>
      <button onClick={() => exampleRef.current = 'changed!'}>Change Ref</button>
      <button onClick={() => console.log('htmlElementRef', htmlElementRef)}>Console log htmlElementRef</button>
      <button onClick={() => console.log('containerRef', containerRef)}>Console log containerRef</button>
      <button onClick={() => console.log(containerRef.current.clientWidth)}>Console log containerRef Width</button>
      <button onClick={() => htmlElementRef.current.focus()}>Focus htmlElementRef</button>
    </div>
  );
}

export default App;
