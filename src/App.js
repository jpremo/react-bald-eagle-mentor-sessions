import React from 'react';
import InfoCard from './info-card/info-card';
import './app.css';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="card-wrapper">
        <InfoCard title="Fluffy Cat" description="They are extra fluffy." imgSrc="https://cdn2.thecatapi.com/images/xIICfnlNm.jpg"/>
        <InfoCard title="Photogenic Cat" description="They look regal." imgSrc="https://cdn2.thecatapi.com/images/vJB8rwfdX.jpg"/>
      </div>
      {/* https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG */}
      {/* <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4"/> */}
      {/* <video ref={videoRef} controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/> */}
    </div>
  );
}

export default App;
