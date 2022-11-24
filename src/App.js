import React, { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [familyName, setFamilyName] = useState('');

  useEffect(() => {
    console.log('useEffect!')
  }, [])

  console.log('rendering');

  const handleNameChange = (event) => {
    const numbers = '0123456789';
    const newValue = event.target.value;
    const lastCharacter = newValue[newValue.length -1];
    //Filtering out numbers to prevent user from inputting numbers into the name field
    if(numbers.includes(lastCharacter)) {
      console.log(`${lastCharacter} is not permitted to be entered into the name field!`)
    } else {
      setName(event.target.value)
    }
  }

  const handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>useEffect Example</h1>
      <input value={name} onChange={handleNameChange} placeholder="Given Name"/>
      <input value={familyName} onChange={handleFamilyNameChange} placeholder="Family Name"/>
    </div>
  );
}

export default App;
