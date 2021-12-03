import { useState, useEffect } from 'react';

const UseEffectIntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      /* Option1. When pass in function to setter function & uses prevCount to set state,
       the setCount() will track count change. So do not need put count in the condition array of useEffect() */
      // setCount((prevCount) => prevCount + 1);

      /* Option2. When use count+1 in setter function, have to add count to the condition array of useEffect(),
        so useEffect() can work properly. Because the condition array is not about when to execute useEffect(), 
        but tells react what need to be monitored. */
      setCount(count + 1);
    };
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count}</div>;
};
export default UseEffectIntervalCounter;
