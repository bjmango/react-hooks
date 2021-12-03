import React, { useState, useEffect } from 'react';

export default function UseEffectCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('useEffect - updating title');
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
    </div>
  );
}
