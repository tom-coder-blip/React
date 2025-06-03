import React from 'react';
import useFetch from './useFetch';

const Quotes = () => {
    const quotes = useFetch("https://random-quotes-freeapi.vercel.app/api/random")
    return (
        <ul>
            {quotes.map(el => (//
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
    )
}

export default Quotes 
