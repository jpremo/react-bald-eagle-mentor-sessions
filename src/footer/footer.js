import React from 'react';

const Footer = () => {
    let num ='hello';
    console.log(num)
    return (
        <form onSubmit={() => {
            window.alert(`${num} ${document.getElementById('nameInput').value}`)
        }}>
            <label>Type your name</label>
            <input type="text" id="nameInput"/>
            <input type="submit"/>
        </form>
    )
}

export default Footer;