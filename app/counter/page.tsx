"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter((c) => (c += 1));
  };

  return (
    <div>
      <h1 className="text-3xl"> Counter: {counter}</h1>
      <button onClick={handleCounter}>Button</button>
    </div>
  );
};

export default Counter;
