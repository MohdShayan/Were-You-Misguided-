import React, { useState } from 'react';
import logo from './assets/tcblogoremakeblackbg.png';
import part1 from './assets/1.png';
import part2 from './assets/2.png';

import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false); // Reset after the animation
    }, 2000); // Animation duration
  };

  return (
    <>
      <div className="image-container">
        {/* Split Parts */}
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
