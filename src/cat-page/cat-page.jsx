import React from 'react';
import { getCatImage, getCatBreed } from '../utils';
import './cat-page.css';

const CatPage = () => {
    // The code on line 10 is a more concise version of lines 7-9
    // const catStuff = React.useState('');
    // const catUrl = catStuff[0]
    // const setCatUrl = catStuff[1]
    const [catUrls, setCatUrls] = React.useState([]);
    const fetchRandomCat = async() => {
        const newCatUrl = await getCatImage(getCatBreed());
        setCatUrls([...catUrls, newCatUrl]);
    }
    return (
        <div className='cat-page'>
            I am a page for cats
            {catUrls.map((catUrl, idx) => {
                return (
                    <img src={catUrl} key={`cat-url-${idx}`}/>
                );
            })}
            <button onClick={fetchRandomCat}>
                Get Random Cat Picture
            </button>
        </div>
    );
};

export default CatPage;