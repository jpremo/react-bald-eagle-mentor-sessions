import React from 'react';
import APIRoute from './api-route';
import './styles.css';
//1. be able to click a button, and display results from an API route
//2. We want to be able to have multiple buttons for different API routes
  //This means we want a component for this button
//We will assume all routes are GET routes
function App() {
  return (
    <div>
      <APIRoute
        title="Get Random Joke"
        fetchUrl="https://official-joke-api.appspot.com/random_joke"
      />
      <APIRoute
        title="Get Random User"
        fetchUrl="https://randomuser.me/api/"
      />
      <APIRoute
        title="Get Random Dog Picture Link"
        fetchUrl="https://dog.ceo/api/breeds/image/random"
      />
      <APIRoute
        title="Get University List"
        fetchUrl="http://universities.hipolabs.com/search?country=United+States"
      />
    </div>
  );
}

export default App;
