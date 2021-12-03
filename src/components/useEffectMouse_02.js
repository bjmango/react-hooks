import React, { useState, useEffect } from 'react';

const UseEffectMouse = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e =>{
    console.log("Mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener('mousemove', logMousePosition)

    return ()=>{
      console.log('componet unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  },[])

  return (
    <div>
      Mouse position - X {x}, Y {y}
    </div>
  );
};

export default UseEffectMouse;
