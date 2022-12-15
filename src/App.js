import React, { useEffect } from 'react';
import InfoCard from './info-card';
import { getRandomCatImage } from './utils';

//discussion on debugging

//checking the console
  //reading error messages
  //using console.log to view values
    //making console.log more evident
      // \n vs console.log('%c ', 'font-size: 20px; color: #FB15B9FF;', );

//debugging tool

//what if no errors in console?
  //look at html structure
  //look at react devtools
  //look at network tab

const demoFunction = () => {
  console.log('demo');
}

const items = [{title: 'test title', description: 'fsdlk;jasdfljk asdlkfjasdl ;fjkal;sd f'}, {title: 'test title 2' , description: 'lorem ipsum'}]
function App() {
  useEffect(() => {
    getRandomCatImage();
    console.log('log example line 21', undefined);
    console.log('%c large log', 'font-size: 20px; color: #FB15B9FF;', )
    // throw( new Error('error!'))
  }, [])
  return (
    <div style={{ textAlign: 'center' }}>
      {items.map((item) => {
        return <InfoCard {...item}/>
      })}
      <button onClick={() => {
        let mathExpression = 83 / 5;
        debugger;
        demoFunction();
        mathExpression += 12
        debugger;
      }}>Use Debugger</button>
    </div>
  );
}

export default App;
