import React, { useEffect, useState } from "react";
import { getRandomCatFact, getRandomCatImage } from "./utils";

const FactCard = () => {
    const [fact, setFact] = useState(null);
    const [catSrc, setCatSrc] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCatFactChange = async () => {
        setLoading(true);
        const info = await getRandomCatFact();
        setFact(info.fact);
        setLoading(false);
    };

    const handleCatImgChange = async () => {
        setLoading(true);
        const catUrl = await getRandomCatImage();
        setCatSrc(catUrl);
        setLoading(false);
    };

    const handleInitialLoad = async () => {
        setLoading(true);
        const catUrl = await getRandomCatImage();
        const info = await getRandomCatFact();
        setFact(info.fact);
        setCatSrc(catUrl);
        setLoading(false);
    }

    useEffect(() => {
        handleInitialLoad();
    }, []);


    return (
        <div className="fact-card">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <img src={catSrc}/>
                    <p>{fact}</p>
                    <button onClick={handleCatFactChange}>{fact ? 'Get a New Cat Fact' : 'Get Random Cat Fact'}</button>
                    <button onClick={handleCatImgChange}>{fact ? 'Get a New Cat Pic' : 'Get Random Cat Pic'}</button>
                </>
            )}
        </div>
    );
};

export default FactCard;
