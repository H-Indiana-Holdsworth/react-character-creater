import React from 'react';
import './Preview.css';

export default function Preview({ head, torso }) {
  return (
    <div className="character">
      <img src={`${process.env.PUBLIC_URL}/assets/${head}.jpeg`} />
      <img src={`${process.env.PUBLIC_URL}/assets/${torso}.jpeg`} />
    </div>
  );
}
