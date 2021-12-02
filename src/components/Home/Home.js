import React, { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('head');
  const [torso, setTorso] = useState('torso');
  const [legs, setLegs] = useState('legs');

  return (
    <main>
      <Preview {...{ head, torso, legs }} />
      <Editor {...{ head, setHead, torso, setTorso, legs, setLegs }} />
    </main>
  );
}
