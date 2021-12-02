import React, { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Home.css';

export default function Home() {
  const [head, setHead] = useState('head');

  return (
    <main>
      <Preview {...{ head }} />
      <Editor {...{ head, setHead }} />
    </main>
  );
}
