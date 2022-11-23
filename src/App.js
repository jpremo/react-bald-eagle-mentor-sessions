import React, { useState, useEffect, Fragment } from 'react';

const useEffectNoInitialization = (callback, dependencyArray) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (initialized) {
      callback();
    } else {
      setInitialized(true);
    }
  }, dependencyArray)
}

const appetizers = [
  {
    title: 'Prawn Cocktail',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Side Salad',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Garlic Bread',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  }
];

const entrees = [
  {
    title: 'T-bone steak',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Fish and Chips',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Irish Stew',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  }
];

const healthyEntrees = [
  {
    title: 'Baked Chicken',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Grilled rainbow trout',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Salmon',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  }
];

const desserts = [
  {
    title: 'Creme Brulee',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Poptarts',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  },
  {
    title: 'Pumpkin Pie',
    url: 'https://richanddelish.com/wp-content/uploads/2022/02/FI-best-easy-creme-brulee-recipe.png',
  }
];

function App() {
  const [appetizer, setAppetizer] = useState(null);
  const handleAppetizerChange = (event) => {
    setAppetizer(event.target.value)
  }
  const [entree, setEntree] = useState(null);
  const handleEntreeChange = (event) => {
    setEntree(event.target.value)
  }
  const [dessert, setDessert] = useState(null);
  const handleDessertChange = (event) => {
    setDessert(event.target.value)
  }
  useEffectNoInitialization(() => {
    console.log('menu \n')
    console.log('appetizer', appetizer);
    console.log('entree', entree);
    console.log('dessert', dessert);
  }, [appetizer, entree, dessert]);

  const entreeList = appetizer?.includes('healthy') ? healthyEntrees : entrees;

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <select onChange={handleAppetizerChange} value={appetizer}>
          {appetizers.map((appetizer, idx) => {
            return (
              <>
                <option value={idx}>
                  {appetizer.title}
                </option>
                <option value={`${idx}-healthy`}>
                  Healthy: {appetizer.title}
                </option>
              </>
            )
          })}
        </select>
        <select onChange={handleEntreeChange} value={entree}>
          {entreeList.map((entree, idx) => {
            return (
              <>
                <option value={idx}>
                  {entree.title}
                </option>
              </>
            )
          })}
        </select>
        <select onChange={handleDessertChange} value={dessert}>
          {desserts.map((dessert, idx) => {
            return (
              <>
                <option value={idx}>
                  {dessert.title}
                </option>
              </>
            )
          })}
        </select>
        <div className='menu-preview'>
          {/* Note that we have not handled for when we select a healthy appetizer here; the index will actually be a string (i.e. 1-healthy) which cannot be used to access our array*/}
          <img src={appetizers?.[appetizer]?.url}/>
          <img src={entrees?.[entree]?.url}/>
          <img src={desserts?.[dessert]?.url}/>
        </div>
      </div>
      <div>Test</div>
    </>
  );
}

export default App;
