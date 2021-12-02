import React from 'react';
import './Preview.css';

export default function Preview({ head }) {
  return (
    <div className="character">
      <img src={`${process.env.PUBLIC_URL}/assets/${head}.jpeg`} />
    </div>
  );
}
