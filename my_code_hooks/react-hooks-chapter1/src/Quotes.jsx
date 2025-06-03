import React, { useState } from "react";
import useFetch from './useFetch';

const InspirationCard = () => {

  const thequotes = "https://random-quotes-freeapi.vercel.app/api/random/quote";

  const quote = thequotes;
  const data = quote;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-xl font-bold mb-4">💡 Inspiration of the Moment</h2>
        <Button variant="link" onClick={() => quote}>
          New Quote
        </Button>
        <br />
        Quotes: {quote}
        <ul>
          {data.map(el => (
            <li key={el.id}>{el.quote}</li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default InspirationCard;