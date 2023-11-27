import React, { useEffect } from 'react';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add('body');
    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('body');
    };
  }, []);

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
