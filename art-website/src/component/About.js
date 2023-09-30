import React from 'react'

function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div
        style={{
          width: '900px',
          height: '300px',
          backgroundColor: 'lightgray',
          border: '2px solid #000000',
          padding: '20px',
          borderRadius: '15px',
          fontStyle: 'italic'
        }}
      >
        <h1>
          This simple collection of paintings expresses the desire to create,
          albeit at an amateur level. Painting is something wonderful that
          allows you to dilate time until it is erased.
        </h1>
      </div>
    </div>
  )
}

export default About
