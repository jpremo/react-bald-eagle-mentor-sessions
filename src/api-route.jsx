import React, { useEffect, useState } from "react";

const APIRoute = ({ title, fetchUrl, RenderingComponent, filterFunction }) => {
    const [fetchResponses, setFetchResponses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cacheResults, setCacheResults] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchData = async () => {
        setLoading(true);
        const res = await fetch(fetchUrl);
        const data = await res.json();
        if (cacheResults) {
            setFetchResponses([...fetchResponses, data]);
        } else {
            setFetchResponses([data]);
        }
        setLoading(false);
    };

    const filteredResponses = filterFunction ? fetchResponses.filter(filterFunction(searchTerm)) : fetchResponses;

    return (
        <div className="api-route">
            <h1>{title}</h1>
            <label htmlFor="cache">Cache Results</label>
            <input
                id="cache"
                type="checkbox"
                checked={cacheResults}
                disabled={loading}
                onChange={(e) => setCacheResults(e.target.checked)}
            />
            {filterFunction && fetchResponses.length >= 2 &&
                <input placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            }
            <button disabled={loading} onClick={fetchData}>
                Fetch
            </button>
            {filteredResponses.map((fetchResponse, idx) => {
                return RenderingComponent ? (
                    <RenderingComponent {...fetchResponse} />
                ) : (
                    <pre key={`${title}-${idx}`}>{`${JSON.stringify(fetchResponse, null, 2)}`}</pre>
                );
            })}
            {loading && <p>Loading...</p>}
            {/* Same as ternary below */}
            {/* {loading ? <p>Loading...</p> : null} */}
        </div>
    );
};

export default APIRoute;
