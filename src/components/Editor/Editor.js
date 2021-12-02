import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead }) {
  const handleHead = (e) => {
    setHead(e.target.value);
  };

  return (
    <div className="editor">
      <select value={head} onChange={handleHead}>
        <option value={'vader-head'}>Darth Vader</option>
        <option value={'trooper-head'}>Stormtrooper</option>
        <option value={'r2-head'}>R2-D2</option>
      </select>
    </div>
  );
}
