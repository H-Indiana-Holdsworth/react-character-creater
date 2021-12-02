import React from 'react';
import './Editor.css';

export default function Editor({
  head,
  setHead,
  torso,
  setTorso,
  legs,
  setLegs,
  setHeadCount,
  setTorsoCount,
  setLegCount,
  phrase,
  setPhrase,
  setPhraseList,
}) {
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };

  const handleTorso = (e) => {
    setTorso(e.target.value);
    setTorsoCount((prevState) => prevState + 1);
  };

  const handleLegs = (e) => {
    setLegs(e.target.value);
    setLegCount((prevState) => prevState + 1);
  };

  const handleClick = () => {
    // add new phrase to list using setPhraseList
    setPhraseList((prevState) => [...prevState, phrase]);
    // reset input by setting phrase to empty string using setPhrase
    setPhrase('');
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
      <select value={legs} onChange={handleLegs}>
        <option value={'black-legs'}>Dark legs</option>
        <option value={'lego-legs'}>Lego legs</option>
        <option value={'white-legs'}>Light legs</option>
      </select>
      <input type="text" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
      <button onClick={handleClick}>Save</button>
    </div>
  );
}
