import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="col-md-3">
      <div className="card bg-dark text-white mb-4 card-zoom">
        <img src={props.imageSrc} className="card-img" alt={props.imageAlt} />
        <div className="card-img-overlay">
          <h5 className="card-title text-center">{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
