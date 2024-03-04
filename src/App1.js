import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselPage from './CarouselPage';

function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [showImage, setShowImage] = useState(false);

  const submitDream = () => {
    // Your dream submission logic here
  };

  const deleteDreams = () => {
    // Your dream deletion logic here
  };

  const showImageOnClick = () => {
    setShowImage(true);
  };

  return (
    <div className="app-container">
      <header className="header">
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          <li>
            <Link to="/year"><button style={{ padding: '10px 20px', fontSize: '16px' }}> Year</button></Link>
          </li>
          <li>
            <Link to="/archive"><button style={{ padding: '10px 20px', fontSize: '16px' }}>Archive</button></Link>
          </li>
        </ul>
      </nav>
        <h1>DREAM TRACKER</h1>
      </header>
      <main className="main-content">
        <section className="dream-input">
          <h2>Describe your dream for image generation</h2>
          <p>If you don't recall your dreams, press the "Skip" button</p>
          <div className="input-container">
            <input
              type="text"
              id="t"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your dream description"
            />
            <div className="button-group">
              <button className="primary-button" onClick={submitDream}>
                Submit
              </button>
              <button className="secondary-button" onClick={deleteDreams}>
                Delete All!
              </button>
              <input type="submit" value="Skip" />
            </div>
          </div>
          <br />
          <input
            type="color"
            id="c"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </section>
        <button id="show-image-button" onClick={showImageOnClick}>
          Show Image
        </button>
        
        {showImage && (
          <div className="image-container">
            <img id="image" src="./images/bird.png" alt="Displayed Image" />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
