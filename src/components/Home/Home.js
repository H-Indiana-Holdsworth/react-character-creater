import React, { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('vader-head');
  const [torso, setTorso] = useState('black-torso');
  const [legs, setLegs] = useState('black-legs');
  const [headCount, setHeadCount] = useState(0);
  const [torsoCount, setTorsoCount] = useState(0);
  const [legCount, setLegCount] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <main>
      <Preview {...{ head, torso, legs, headCount, torsoCount, legCount }} />
      <Editor
        {...{
          head,
          setHead,
          torso,
          setTorso,
          legs,
          setLegs,
          headCount,
          setHeadCount,
          setTorsoCount,
          setLegCount,
          phrase,
          setPhrase,
          setPhraseList,
        }}
      />
      {!!headCount && <p>You have changed head {headCount} times</p>}
      {!!torsoCount && <p>You have changed torso {torsoCount} times</p>}
      {!!legCount && <p>You have changed legs {legCount} times</p>}
      {!!phraseList.length && (
        <div>
          Your intergalactic catchprases have been:
          {phraseList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      )}
    </main>
  );
}
