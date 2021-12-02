import React from 'react';

export default function Editor({ head, setHead }) {
  const handleHead = (e) => {
    setHead(e.target.value);
  };

  return (
    <div className="editor">
      <div>
        <select value={head} onChange={handleHead}>
          <option value={'vader-head'}>Darth Vader</option>
          <option value={'trooper-head'}>Stormtrooper</option>
          <option value={'r2-head'}>R2-D2</option>
        </select>
      </div>
    </div>
  );
}
