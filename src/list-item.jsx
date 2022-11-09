import React from "react";

const ListItem = (props) => {
    const handleButtonClick = () => {
        props.onButtonClick(props.title);
    }
    return (
        <div>
            <li>{props.title}</li>
            <button onClick={handleButtonClick}>Change Pet</button>
        </div>
    )
}

export default ListItem;