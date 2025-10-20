import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Class:</strong> {props.className}</p>
      <p><strong>Roll No:</strong> {props.rollNo}</p>
    </div>
  );
}

export default Card;