import React, { useState, useEffect } from 'react';
import UseEffectMouse from './useEffectMouse_02';

function UseEffectCleanUpComponent() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      <h1>display = {String(display)}</h1>
      {console.log(display)}
      {display && <UseEffectMouse/>}
    </div>
  );
}

export default UseEffectCleanUpComponent;
