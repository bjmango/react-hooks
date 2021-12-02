import React, { useState } from 'react';

function UseStateUpdateNumber() {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const incrementFive = function (){
    for (let i = 0; i < 5; i++){
      //! setCount(count + 1)    this doesn't work because setCount read the count variable.
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default UseStateUpdateNumber;
