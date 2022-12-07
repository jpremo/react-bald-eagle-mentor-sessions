import React, { useRef } from 'react';
import InfoCard from './info-card/info-card';
import './app.css';

function App() {
  const videoRef = useRef(null);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Interesting Pets</h1>
      <div className="card-wrapper">
        <InfoCard title="Fluffy Cat">
          <img src="https://cdn2.thecatapi.com/images/xIICfnlNm.jpg"/>
          <p>They are extra fluffy.</p>
        </InfoCard>
        <InfoCard title="Photogenic Cat">
          <img src="https://cdn2.thecatapi.com/images/vJB8rwfdX.jpg"/>
          <p>They look regal.</p>
        </InfoCard>
        <InfoCard title="Nyan Cat">
          <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4"/>
          <h2>Nyan nyan nyan</h2>
        </InfoCard>
        <InfoCard title="Definitely not an ad">
          <video ref={videoRef} controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/>
          <button onClick={() => console.log('videoRef', videoRef)}>Log Ref</button>
          <button onClick={() => videoRef.current.play()}>Play</button>
        </InfoCard>
      </div>
    </div>
  );
}

export default App;
