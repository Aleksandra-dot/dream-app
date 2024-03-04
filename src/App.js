import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [showImage, setShowImage] = useState(false);

  const submitDream = () => {
    let sid = localStorage.getItem('s_id') || 0;
    let newDream = [text, color];
    localStorage.setItem(`dream${sid}`, JSON.stringify(newDream));
    localStorage.setItem('s_id', parseInt(sid) + 1);
    setText('');
  };

  const deleteDreams = () => {
    localStorage.clear();
  };

  const showImageOnClick = () => {
    setShowImage(true);
  };

  return (
    <div style={{ background: 'rgb(69, 57, 161)', color: 'pink' }}>
      <h1>DREAM TRACKER</h1>
      <h2 htmlFor="example">Describe your dreams for image generation</h2>
      <p>If you don't recall your dreams, press the "Skip" button</p>
      <input
        type="text"
        id="t"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="color"
        id="c"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={submitDream}>Submit</button>
      <button onClick={deleteDreams}>Delete All!!</button>
      <input type="submit" value="Skip" />

      <div id="te"></div>

      <button id="show-image-button" onClick={showImageOnClick}>
        Show Image
      </button>
      {showImage && (
        <div id="image-container">
          <img id="image" src="image.jpg" alt="Displayed Image" />
        </div>
      )}
    </div>
  );
}

export default App;
