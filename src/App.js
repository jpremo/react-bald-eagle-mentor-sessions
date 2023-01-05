import React, { useEffect, useState, useCallback } from 'react';
import University from './university';

//1. on page load display 10 university summaries on the page
//2. Have a search bar, when typing into it, we filter by university name, typed into the search bar
//3. Add a search button that will query the API with the search bar input
function App() {
  const [universityList, setUniversityList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const fetchUniversitiesNoCallback = (searchString) => {
  //   fetch(`http://universities.hipolabs.com/search?name=${searchString}`).then((universityData) => {
  //     return universityData.json();
  //   }).then((parsedUniversityData) => {
  //     setUniversityList(parsedUniversityData);
  //   })
  // }

  const fetchUniversities = useCallback((searchString) => {
    fetch(`http://universities.hipolabs.com/search?name=${searchString}`).then((universityData) => {
      return universityData.json();
    }).then((parsedUniversityData) => {
      setUniversityList(parsedUniversityData);
    })
  }, [])

  // This code would fetch some data on initial page load
  useEffect(() => {
    fetchUniversities('middle');
  }, []);


  // useEffect(() => {
  //   fetch(`http://universities.hipolabs.com/search?name=${searchTerm}`).then((universityData) => {
  //     return universityData.json();
  //   }).then((parsedUniversityData) => {
  //     setUniversityList(parsedUniversityData);
  //   })
  // }, [searchTerm]);

  return (
    <div style={{ textAlign: 'center' }}>
      <input placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={() => fetchUniversities(searchTerm)}>Search</button>
      <p>Your search yielded {universityList.length} universities</p>
      {universityList.map((universityData) => {
        return <University country={universityData.country} name={universityData.name} url={universityData.web_pages[0]}/>
      })
      }
    </div>
  );
}

export default App;
