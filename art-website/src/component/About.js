import React, { useState, useEffect } from 'react';

function About() {
  const [colors, setColors] = useState(["red", "blue", "green"]);

  useEffect(() => {
    const generateRandomColors = () => {
      const availableColors = ["red", "blue", "green", "yellow", "orange", "purple"];
      const randomColors = availableColors.slice(0, 3);
      setColors(randomColors);
    };

    generateRandomColors(); // Chiamare la funzione di generazione dei colori al montaggio iniziale.
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        style={{
          width: '900px',
          height: '300px',
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
          border: '2px solid #000000',
          padding: '20px',
          borderRadius: '15px',
          fontStyle: 'italic',
        }}
      >
        <h1 className='text-white'>
          This simple collection of paintings expresses the desire to create,
          albeit at an amateur level. Painting is something wonderful that
          allows you to dilate time until it is erased.
        </h1>
      </div>
    </div>
  );
}

export default About;



