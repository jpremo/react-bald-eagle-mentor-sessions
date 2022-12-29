import React from 'react';
import APIRoute from './api-route';
import Joke from './joke';
import Dog from './dog';
import './styles.css';
//1. be able to click a button, and display results from an API route
//2. We want to be able to have multiple buttons for different API routes
  //This means we want a component for this button
//We will assume all routes are GET routes

//new ideas
  // 1. loading indicator
  // 2. optional checkbox that caches multiple responses from the same API
  // 3. For the jokes API specifically, filter out unnecessary data and focus on punchline and setup
    // this could be done with react children
  // 4. Loading indicator should not hide cached results
  // 5. Filter responses
function App() {
  return (
    <div>
      <APIRoute
        title="Get Random Joke"
        fetchUrl="https://official-joke-api.appspot.com/random_joke"
        RenderingComponent={Joke}
        filterFunction={(searchTerm) => (joke) => {
          return joke.setup.toLowerCase().includes(searchTerm) || joke.punchline.toLowerCase().includes(searchTerm);
        }}
      />
      <APIRoute
        title="Get Random User"
        fetchUrl="https://randomuser.me/api/"
        filterFunction={(searchTerm) => (user) => {
          return user.results[0].name.first.toLowerCase().includes(searchTerm) || user.results[0].name.last.toLowerCase().includes(searchTerm);
        }}
      />
      <APIRoute
        title="Get Random Dog Picture Link"
        fetchUrl="https://dog.ceo/api/breeds/image/random"
        RenderingComponent={Dog}
      />
      <APIRoute
        title="Get University List"
        fetchUrl="http://universities.hipolabs.com/search?country=United+States"
      />
    </div>
  );
}

export default App;
