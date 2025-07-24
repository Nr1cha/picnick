// ProgressBarGame.jsx
import React, { useState, useEffect } from 'react';
import "../styles/selection.css";


function UserSelection() {
  // State for button visibility, child text, class, and animation width
  const [showButton, setShowButton] = useState(true); // Tracks if button is visible
  // const [childText, setChildText] = useState('Initial'); // Child element text
  const [childClass, setChildClass] = useState('child1'); // Child element class
  const [width, setWidth] = useState(0); // Animation width (0% to 78%)

  // Handle click event
  const handleClick = () => {
    setShowButton(false); // Remove button
    // setChildText('Worked'); // Update text
    setChildClass('newChildClass'); // Update class
    // Animation starts via useEffect
  };

  // Animation logic
  useEffect(() => {
    if (childClass === 'newChildClass') {
      // Animation parameters
      const endWidth = 99;
      const duration = 1000; // 1 second
      const startTime = performance.now();
      let animationFrame;

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // 0 to 1
        const currentWidth = progress * endWidth;
        setWidth(currentWidth);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      // Cleanup animation frame on unmount or re-run
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [childClass]); // Run when childClass changes to 'newChildClass'

  return (
    <div className="optionParent" style={{ fontFamily: 'Arial', padding: '20px' }}>
      {showButton && (
        <button onClick={handleClick} style={{ padding: '5px 10px' }}>
          Click Me
        </button>
      )}
      <div
        className={childClass}
        style={{
          width: `${width}%`,
          height: '20px',
          backgroundColor: childClass === 'newChildClass' ? 'blue' : 'gray',
          transition: 'width 0.1s linear', // Smooths animation
        }}
      >
        {/* {childText} */}
      </div>
    </div>
  );
}

export default UserSelection;