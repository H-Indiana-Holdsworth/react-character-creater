import React, { useState } from 'react';

import Editor from '../Editor/Editor';

export default function Home() {
  const [head, setHead] = useState('head');

  return (
    <main>
      <Editor {...{ head, setHead }} />
    </main>
  );
}
