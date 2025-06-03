import { useState, useEffect } from 'react';

const useFetch = (url) => {
    //initial state
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json()) // converts the response to JSON format.
            .then(data => setData(data)) //stores the result in your state.
    }, [url]);
    
    return data;
};

export default useFetch;