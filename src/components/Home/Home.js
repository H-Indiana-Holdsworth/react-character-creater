import React, { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('head');
  const [torso, setTorso] = useState('torso');
  const [legs, setLegs] = useState('legs');
  const [headCount, setHeadCount] = useState(0);

  return (
    <main>
      <Preview {...{ head, torso, legs, headCount }} />
      <Editor {...{ head, setHead, torso, setTorso, legs, setLegs, headCount, setHeadCount }} />
      {!!headCount && <p>You have changed head {headCount} times</p>}
    </main>
  );
}
