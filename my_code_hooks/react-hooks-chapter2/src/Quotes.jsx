import React, { useState } from "react";

const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Dream big. Start small. Act now.",
  "You are stronger than you think.",
  "Stay positive, work hard, make it happen."
];

export default function InspirationCard() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-xl font-bold mb-4">💡 Inspiration of the Moment</h2>
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <button
          onClick={getNewQuote}
          className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-800 transition"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}