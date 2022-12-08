import React, { useEffect, useState } from 'react';
import { getRandomCatImage } from '../utils';

const RandomCatCard = ({ name }) => {
    const [description, setDescription] = useState(null);
    const [catUrl, setCatUrl] = useState(null);
    useEffect(async () => {
        //Async/await example
        const catSummary = await getRandomCatImage();
        setDescription(catSummary.description);
        setCatUrl(catSummary.url);
        // Below is an example of using the fetch API with promises
        // const res = fetch(
        //   `https://api.thecatapi.com/v1/images/search?breed_ids=asho`,
        //   {
        //       headers: {
        //           "Content-Type": "application/json",
        //           "x-api-key": "b07ebe63-3b58-4285-a374-10aa6a74e158",
        //       },
        //       method: "GET",
        //   }
        // ).then((catResponse) => {
        //   console.log('catResponse (fetch result after processing)', catResponse)
        //   catResponse.json().then((data) => {
        //     console.log('final cat data', data);
        //   });
        // }).catch((e) => {
        //   console.log('we have an error', e)
        // });
    }, []);

    //Alternative to the ternary below
    // if(description && catUrl) return <p>Loading...</p>

    return (
        <div className="card">
            {description && catUrl ?
                <>
                    <h1>{name}</h1>
                    <img src={catUrl}/>
                    <p>{description}</p>
                </> :
                <p>Loading...</p>
            }
        </div>
    );
};


export default RandomCatCard;