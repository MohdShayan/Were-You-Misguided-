import React, { useState } from 'react';

import part1 from './assets/1.png';
import part2 from './assets/2.png';
import clubLogo from './assets/clubLogo2.png';

import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <h1 className="logo-text" style={{ color: 'white' }}>Khul Ja Sim Sim</h1>
      </div>
      
      <div className="image-container">
        {/* Club Logo behind the splitting images */}
        <img src={clubLogo} className="club-logo" alt="Club Logo" width={250} />
        
        <img
          src={part1}
          className={`logo-part part-left ${isClicked ? 'animate-left' : ''}`}
          alt="Left part"
        />
        <img
          src={part2}
          className={`logo-part part-right ${isClicked ? 'animate-right' : ''}`}
          alt="Right part"
        />
      </div>

      <button className="magic-button" onClick={handleButtonClick}>
        Khul Ja Sim Sim
      </button>

      <footer>
        <div>
          <p>
            Made with <span>❤️</span> by TCB
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
