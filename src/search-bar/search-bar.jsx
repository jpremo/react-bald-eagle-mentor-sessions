import React, { useState } from 'react';

const SearchBar = ({ searchValue, onInputChange }) => {
    
    
    console.log(searchValue)
    return (
        <div>
            <input placeholder='search something' value={searchValue} onChange={onInputChange}/>
        </div>
    );
};

SearchBar.propTypes = {

};

export default SearchBar;