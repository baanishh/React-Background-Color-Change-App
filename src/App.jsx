import React, { useState, useEffect } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightpink', 'lightgray', 'lightgoldenrodyellow', 'lightcyan', 'lightsalmon', 'lightseagreen'];

  const changeBackgroundColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length); 
    const newColor = colors[randomNumber]; 
    setBgColor(newColor);
  };

  useEffect(() => {
    const interval = setInterval(changeBackgroundColor, 1000); 
    return () => clearInterval(interval); 
  }, []);
 
  return (
    <div style={{ height: '100vh', backgroundColor: bgColor }}>
      <h1 style={{ textAlign: 'center' }}>Random Background Color App</h1>
    </div>
  );
}

export default App;
