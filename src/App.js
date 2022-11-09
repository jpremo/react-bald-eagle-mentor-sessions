import React, { useState } from "react";
import ListItem from "./list-item";

const pets = ["dog", "cat", "fish"];

function App() {
    // useState returns an array [stateVariable, setterFunction]
    const [selectedPet, setSelectedPet] = useState('Gerbil');
    const inputHandler = (event) => {
      console.log(event.target.value);
    }
    const handlePetChange = (newPet) => {
      setSelectedPet(newPet);
    }
    console.log('rendering')
    return (
        <div style={{ textAlign: "center" }}>
            <div>Selected Pet: {selectedPet}</div>
            <input
                type="number"
                onChange={inputHandler}
            />
            {pets.map((pet) => {
                return <ListItem title={pet} name="Bubbles" onButtonClick={handlePetChange}/>;
            })}
        </div>
    );
}

export default App;
