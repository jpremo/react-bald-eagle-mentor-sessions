import React from 'react';
import GardenCard from './garden-card/garden-card'
import './app.css'

const PlantInfo = [
  {
    name: 'Tomato',
    numberPlanted: 8,
    gardenBed: 2,
    src: 'https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg'
  },
  {
    name: 'Zucchini',
    numberPlanted: 4,
    gardenBed: 1,
    src: 'https://www.tasteofhome.com/wp-content/uploads/2021/07/the-ripened-vegetable-marrows-zucchini-and-bush-972655992.jpg?w=1280'
  },
  {
    name: 'Potato',
    numberPlanted: 16,
    gardenBed: 3,
    src: 'https://thepracticalplanter.com/wp-content/uploads/2021/09/IS-Potato-Plant.jpg'
  },
  {
    name: 'Broccoli',
    numberPlanted: 4,
    gardenBed: 6,
    src: 'https://www.almanac.com/sites/default/files/styles/max_2600x2600/public/image_nodes/broccoli-plant.jpg?itok=TsaSLzFo'
  },
  {
    name: 'Butternut Squash',
    numberPlanted: 4,
    gardenBed: 4,
    src: 'https://www.treehugger.com/thmb/l6fZ4ll0vcRFOX9DpmNzEZZDiWw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butternutcrop-06310b117b0043ddaad037554198f649.jpg'
  },
  {
    name: 'Watermelon',
    numberPlanted: 6,
    gardenBed: 5,
    src: 'https://bustlingnest.com/wp-content/uploads/lifecycle-stages.jpg.webp'
  },
]

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Garden Planning</h1>
      <div className="card-wrapper">
        {PlantInfo.map((info) => {
          return (
            <GardenCard name={info.name} numberPlanted={info.numberPlanted} src={info.src} gardenBed={info.gardenBed}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
