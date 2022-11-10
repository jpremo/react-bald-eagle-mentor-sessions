import React, { useState } from 'react';
import InfoCard from '../info-card/info-card';
import SearchBar from '../search-bar/search-bar';

const patientInfo = [
    {
        name: 'Bob',
        date: '11/09/22',
        ailment: 'Cold',
    },
    {
        name: 'Susie',
        date: '10/15/22',
        ailment: 'Broken Leg',
    },
    {
        name: 'Steve',
        date: '09/22/22',
        ailment: 'Infection',
    },
];

const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const onInputChange = (event) => {
        setSearchValue(event.target.value);
    }
    return (
        <div>
            <SearchBar searchValue={searchValue} onInputChange={onInputChange}/>
            {patientInfo.map((info) => {
                return (
                    <InfoCard name={info.name} date={info.date} ailment={info.ailment} searchValue={searchValue}/>
                )
            })
            }
        </div>
    );
};

SearchPage.propTypes = {

};

export default SearchPage;