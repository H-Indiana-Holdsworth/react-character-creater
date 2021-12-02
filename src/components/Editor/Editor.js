import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, torso, setTorso }) {
  const handleHead = (e) => {
    setHead(e.target.value);
  };
  const handleTorso = (e) => {
    setTorso(e.target.value);
  };

  return (
    <div className="editor">
      <select value={head} onChange={handleHead}>
        <option value={'vader-head'}>Darth Vader</option>
        <option value={'trooper-head'}>Stormtrooper</option>
        <option value={'r2-head'}>R2-D2</option>
      </select>
      <select value={torso} onChange={handleTorso}>
        <option value={'black-torso'}>Dark torso</option>
        <option value={'red-torso'}>Red torso</option>
        <option value={'woman-torso'}>Woman torso</option>
      </select>
    </div>
  );
}
