import React from 'react';

const InfoCard = ({ date, name, ailment, searchValue }) => {
    // const { date, name, ailment } = props;
    // const date = props.date;

    // useState returns an array with two values, a stateVariable, and a setterFunction
    // const [stateVariable, setterFunction] = useState('');
    // const array = ['value 1', 'value 2'];
    // const value1 = array[0];
    // const value2 = array[1];
    // the two lines above are equivalent to the line below. The line below uses array destructuring
    // const [value1, value2] = array;
    return (
        <div>
            <h1>{name}</h1>
            <p>Intake Date: {date}</p>
            <p>Ailment: {ailment}</p>
            <p>Matches search: {name.includes(searchValue) ? 'Yes' : 'No'}</p>
        </div>
    );
};

InfoCard.propTypes = {

};

export default InfoCard;