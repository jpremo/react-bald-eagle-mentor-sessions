import React from 'react';

function Menu() {
    const date = new Date();
    const time = date.toISOString();
    return(
        <nav>
            <ul>
                <li>
                    {time}
                </li>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    );
}

export default Menu;