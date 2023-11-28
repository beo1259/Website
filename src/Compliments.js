import React, { useState, useEffect } from 'react';

const compliments = [
  "Innovative Thinker",
  "Exceptional Leader",
  "Creative Problem Solver",
  // ...add more compliments here
];

const Compliments = () => {
  const [currentCompliment, setCurrentCompliment] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCompliment((current) => (current + 1) % compliments.length);
    }, 3000); // Change compliment every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="compliments-section">
      <h2>I am...</h2>
      <p>{compliments[currentCompliment]}</p>
    </div>
  );
};

export default Compliments;
