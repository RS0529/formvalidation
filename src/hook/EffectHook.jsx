import React, { useEffect, useState } from "react";
const EffectHook = () => {
  const [count, setCount] = useState(0);

  let timer;
  // hook equivalent to componentDidMount()
  useEffect(() => {
    console.log("componentDidMount");
    const ti = setInterval(() => {
      console.log("hooo");
    }, 1000);
    timer = ti;
  }, []);

  // hook equivalent to componentDidUpdate()

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  // hook equivalent to componentWillUnmount()

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>Hooks to perform side effects {count}</h1>
      <button onClick={() => setCount(count + 1)}>++</button>
    </>
  );
};

export default EffectHook;
