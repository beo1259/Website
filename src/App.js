import React, { useEffect } from 'react';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  useEffect(() => {
    document.body.classList.add('body');
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
